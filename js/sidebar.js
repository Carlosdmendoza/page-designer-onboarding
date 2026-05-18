function collapseAllSidebarSections(container) {
  container.querySelectorAll('.sidebar-flow-steps').forEach(s => s.classList.remove('open'));
  container.querySelectorAll('.sidebar-flow-section').forEach(s => {
    s.classList.remove('active');
    s.setAttribute('aria-expanded', 'false');
  });
}

function initSidebarFlows() {
  const container = document.getElementById('sidebar-flows');
  if (!container) return;

  const FLOW_ORDER  = [1, 2, 4, 3, 5];
  const FLOW_LABELS = {
    1: 'Feature Tour',
    2: 'Component Library',
    3: 'Build Your First Page',
    4: 'Site Settings',
    5: 'Tips & FAQs'
  };

  const chevronSvg = `<svg class="sidebar-flow-chevron" width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function makeStepBtn(flowId, step, i, current) {
    const btn = document.createElement('a');
    const isDone = i < current;
    const isCurrent = i === current;
    btn.className = 'sidebar-flow-step' + (isCurrent ? ' active' : '') + (isDone ? ' done' : '');
    btn.dataset.step = i;
    btn.href = stepHash(flowId, i);
    btn.innerHTML = `${sidebarStepBadge(i, current)}<span>${step.title}</span>`;
    btn.addEventListener('click', e => { e.preventDefault(); switchFlow(flowId); goToStep(flowId, i); });
    return btn;
  }

  function makeGroupHeader(label, isExpanded) {
    const btn = document.createElement('button');
    btn.className = 'sidebar-group-header' + (isExpanded ? ' expanded' : '');
    btn.setAttribute('aria-expanded', String(isExpanded));
    btn.innerHTML = `<span class="sidebar-group-label">${label}</span>${chevronSvg}`;
    return btn;
  }

  function buildGroupedSteps(flowId, steps, groups, getRanges, current) {
    const ranges = getRanges();
    const rendered = new Set();
    const frag = document.createDocumentFragment();

    steps.forEach((step, i) => {
      const grpId = groups.find(g => i >= ranges[g.id][0] && i <= ranges[g.id][1])?.id || null;
      if (grpId && !rendered.has(grpId)) {
        rendered.add(grpId);
        const [start, end] = ranges[grpId];
        const grp = groups.find(g => g.id === grpId);
        const isGroupActive = current >= start && current <= end;
        const grpHeader = makeGroupHeader(grp.label, isGroupActive);
        const grpItems = document.createElement('div');
        grpItems.className = 'sidebar-group-items' + (isGroupActive ? ' open' : '');
        for (let j = start; j <= end; j++) {
          if (steps[j]?.title) grpItems.appendChild(makeStepBtn(flowId, steps[j], j, current));
        }
        grpHeader.addEventListener('click', () => {
          const open = grpItems.classList.contains('open');
          grpItems.classList.toggle('open', !open);
          grpHeader.classList.toggle('expanded', !open);
          grpHeader.setAttribute('aria-expanded', String(!open));
        });
        frag.appendChild(grpHeader);
        frag.appendChild(grpItems);
      } else if (!grpId && step.title) {
        frag.appendChild(makeStepBtn(flowId, step, i, current));
      }
    });
    return frag;
  }

  function build() {
    container.innerHTML = '';
    FLOW_ORDER.forEach(flowId => {
      const steps = stepsForFlow(flowId);
      const isActive = state.activeFlow === flowId;
      const current = state.steps[flowId];

      const header = document.createElement('a');
      header.className = 'sidebar-flow-section' + (isActive ? ' active' : '');
      header.dataset.flow = flowId;
      header.href = `#${FLOW_SLUGS[flowId]}`;
      header.setAttribute('aria-expanded', String(isActive));
      header.innerHTML = `<span class="sidebar-flow-section__label">${FLOW_LABELS[flowId]}</span>${chevronSvg}`;

      const stepsList = document.createElement('div');
      stepsList.className = 'sidebar-flow-steps' + (isActive ? ' open' : '');
      stepsList.dataset.flow = flowId;

      if (flowId === 2) {
        stepsList.appendChild(buildGroupedSteps(2, steps, FLOW2_GROUPS, getGroupRanges, current));
      } else if (flowId === 4) {
        stepsList.appendChild(buildGroupedSteps(4, FLOWS[4].steps, FLOW4_GROUPS, getFlow4GroupRanges, current));
      } else {
        steps.forEach((step, i) => {
          if (step.title) stepsList.appendChild(makeStepBtn(flowId, step, i, current));
        });
      }

      header.addEventListener('click', e => {
        e.preventDefault();
        const isOpen = stepsList.classList.contains('open');
        collapseAllSidebarSections(container);
        if (!isOpen) {
          stepsList.classList.add('open');
          header.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          switchFlow(flowId);
          goToStep(flowId, state.steps[flowId] || 0);
        }
      });

      container.appendChild(header);
      container.appendChild(stepsList);
    });
  }

  function syncActive(flowId) {
    container.querySelectorAll('.sidebar-flow-section').forEach(btn => {
      const fid = Number.parseInt(btn.dataset.flow);
      const active = fid === flowId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-expanded', String(active));
      btn.href = `#${FLOW_SLUGS[fid]}`;
    });
    container.querySelectorAll('.sidebar-flow-steps').forEach(list => {
      const fid = Number.parseInt(list.dataset.flow);
      list.classList.toggle('open', fid === flowId);
      const current = state.steps[fid];
      list.querySelectorAll('.sidebar-flow-step').forEach(btn => {
        const i = Number.parseInt(btn.dataset.step);
        const isDone = i < current;
        const isCurrent = fid === flowId && i === current;
        btn.classList.toggle('active', isCurrent);
        btn.classList.toggle('done', isDone);
        const title = btn.querySelector('span:last-child')?.textContent || '';
        btn.innerHTML = `${sidebarStepBadge(i, current)}<span>${title}</span>`;
      });
      // Sync group headers open/closed state
      if (fid === flowId) {
        let groups = [];
        if (fid === 2) groups = FLOW2_GROUPS;
        else if (fid === 4) groups = FLOW4_GROUPS;
        let ranges = {};
        if (fid === 2) ranges = getGroupRanges();
        else if (fid === 4) ranges = getFlow4GroupRanges();
        list.querySelectorAll('.sidebar-group-items').forEach((grpItems, idx) => {
          const grp = groups[idx];
          if (!grp) return;
          const [start, end] = ranges[grp.id] || [0, 0];
          const isGrpActive = current >= start && current <= end;
          grpItems.classList.toggle('open', isGrpActive);
          const grpHeader = grpItems.previousElementSibling;
          grpHeader?.classList.toggle('expanded', isGrpActive);
          grpHeader?.setAttribute('aria-expanded', String(isGrpActive));
        });
      }
    });
  }

  build();
  globalThis._syncSidebarFlows = syncActive;

  const filterInput = document.getElementById('sidebar-filter');
  if (filterInput) filterInput.addEventListener('input', onSidebarFilter.bind(null, container));
}

function stepTitleMatches(btn, q) {
  const title = btn.querySelector('span:last-child')?.textContent.toLowerCase() || '';
  return title.includes(q);
}

function filterGroupItems(grpItems, q) {
  let groupHasMatch = false;
  grpItems.querySelectorAll('.sidebar-flow-step').forEach(btn => {
    const matches = stepTitleMatches(btn, q);
    btn.style.display = matches ? '' : 'none';
    if (matches) groupHasMatch = true;
  });
  grpItems.style.maxHeight = groupHasMatch ? '800px' : '0';
  const grpHeader = grpItems.previousElementSibling;
  if (grpHeader?.classList.contains('sidebar-group-header')) {
    grpHeader.style.display = groupHasMatch ? '' : 'none';
  }
  return groupHasMatch;
}

function onSidebarFilter(container) {
  const q = document.getElementById('sidebar-filter')?.value.trim().toLowerCase() || '';
  container.querySelectorAll('.sidebar-flow-steps').forEach(list => {
    const fid = Number.parseInt(list.dataset.flow);
    const sectionHeader = container.querySelector(`.sidebar-flow-section[data-flow="${fid}"]`);

    if (!q) {
      list.querySelectorAll('.sidebar-flow-step').forEach(btn => { btn.style.display = ''; });
      list.querySelectorAll('.sidebar-group-items').forEach(grp => { grp.style.maxHeight = ''; });
      list.querySelectorAll('.sidebar-group-header').forEach(h => { h.style.display = ''; });
      const isActive = fid === state.activeFlow;
      list.classList.toggle('open', isActive);
      sectionHeader?.classList.toggle('active', isActive);
      sectionHeader?.setAttribute('aria-expanded', String(isActive));
      sectionHeader && (sectionHeader.style.display = '');
      return;
    }

    let sectionHasMatch = false;

    list.querySelectorAll(':scope > .sidebar-flow-step').forEach(btn => {
      const matches = stepTitleMatches(btn, q);
      btn.style.display = matches ? '' : 'none';
      if (matches) sectionHasMatch = true;
    });

    list.querySelectorAll('.sidebar-group-items').forEach(grpItems => {
      if (filterGroupItems(grpItems, q)) sectionHasMatch = true;
    });

    list.classList.toggle('open', sectionHasMatch);
    sectionHeader?.classList.toggle('active', sectionHasMatch);
    sectionHeader?.setAttribute('aria-expanded', String(sectionHasMatch));
    sectionHeader && (sectionHeader.style.display = sectionHasMatch ? '' : 'none');
  });
}
