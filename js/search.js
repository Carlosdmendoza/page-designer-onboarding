function buildSearchIndex() {
  const index = [];
  const flowNames = { 1: 'Feature Tour', 2: 'Component Library', 3: 'Build Your First Page', 4: 'Site Settings', 5: 'Tips & FAQs' };
  // Flow 2 uses getFlow2Steps() (reordered + intro cards injected) — must match what goToStep navigates to
  const stepsMap = {
    1: FLOWS[1].steps,
    2: getFlow2Steps(),
    3: FLOWS[3].steps,
    4: FLOWS[4].steps,
    5: FLOWS[5].steps
  };
  [1, 2, 3, 4, 5].forEach(flowId => {
    const steps = stepsMap[flowId];
    if (!steps) return;
    steps.forEach((step, i) => {
      const text = (step.title || '') + ' ' + (step.content || '').replace(/<[^>]+>/g, ' ');
      index.push({ flowId, stepIndex: i, title: step.title || '', flowName: flowNames[flowId], text: text.toLowerCase() });
    });
  });
  return index;
}

function highlightSearchMatches(container, query) {
  const q = query.trim();
  if (!q) return;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
  const re = new RegExp('(' + escaped + ')', 'gi');
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: node => {
      const tag = node.parentElement?.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK') return NodeFilter.FILTER_REJECT;
      return re.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) { re.lastIndex = 0; nodes.push(walker.currentNode); }
  nodes.forEach(node => {
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = re.exec(node.nodeValue)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(node.nodeValue.slice(last, m.index)));
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = m[0];
      frag.appendChild(mark);
      last = re.lastIndex;
    }
    if (last < node.nodeValue.length) frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
    node.parentElement.replaceChild(frag, node);
  });
  // Scroll first match into view
  const first = container.querySelector('.search-highlight');
  if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function clearSearchHighlights() {
  document.querySelectorAll('.search-highlight').forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  const index = buildSearchIndex();
  let activeIdx = -1;

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) { results.hidden = true; return; }
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    const wordRe = new RegExp(String.raw`\b` + escaped, 'i');
    const scored = index.map(e => {
      const titleLower = e.title.toLowerCase();
      if (titleLower === q) return { ...e, score: 4 };
      if (titleLower.startsWith(q)) return { ...e, score: 3 };
      if (titleLower.includes(q)) return { ...e, score: 2 };
      if (wordRe.test(e.text)) return { ...e, score: 1 };
      return null;
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 8);
    if (!scored.length) {
      results.innerHTML = '<div class="search-results__empty">No results found</div>';
      results.hidden = false;
      return;
    }
    results.innerHTML = scored.map((m, i) =>
      `<button class="search-result-item" data-flow="${m.flowId}" data-step="${m.stepIndex}" data-idx="${i}">
        <span class="search-result-item__flow">${m.flowName}</span>
        <span class="search-result-item__title">${m.title}</span>
      </button>`
    ).join('');
    results.hidden = false;
    activeIdx = -1;
  }

  input.addEventListener('input', () => renderResults(input.value));

  input.addEventListener('keydown', e => {
    const items = results.querySelectorAll('.search-result-item');
    if (!items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); items.forEach((el, i) => el.classList.toggle('search-result-item--active', i === activeIdx)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); items.forEach((el, i) => el.classList.toggle('search-result-item--active', i === activeIdx)); }
    else if (e.key === 'Enter' && activeIdx >= 0) { items[activeIdx].click(); }
    else if (e.key === 'Escape') { results.hidden = true; input.blur(); }
  });

  results.addEventListener('click', e => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    const flowId = Number.parseInt(item.dataset.flow);
    const stepIndex = Number.parseInt(item.dataset.step);
    const query = input.value.trim();
    switchFlow(flowId);
    goToStep(flowId, stepIndex);
    results.hidden = true;
    // Highlight after DOM settles
    requestAnimationFrame(() => {
      clearSearchHighlights();
      const card = document.getElementById(`flow-${flowId}-step-${stepIndex}`);
      if (card && query) highlightSearchMatches(card, query);
    });
  });

  input.addEventListener('input', () => {
    if (!input.value.trim()) clearSearchHighlights();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) results.hidden = true;
    if (!e.target.closest('.search-wrap') && !e.target.closest('.step-card')) clearSearchHighlights();
  });
}
