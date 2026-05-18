function makeStepCard(flowId, step, i) {
  const card = document.createElement('div');
  card.className = 'step-card' + (i === 0 ? ' active' : '');
  card.id = `flow-${flowId}-step-${i}`;
  const hasScreenshot = step.screenshot?.id;
  const bodyClass = hasScreenshot ? 'step-card__body' : 'step-card__body step-card__body--full';
  const screenshotHtml = hasScreenshot ? `
      <div class="step-card__screenshot" data-ss="${step.screenshot.id}" data-ext="${step.screenshot.ext || 'jpg'}" data-caption="${step.screenshot.caption}" role="button" tabindex="0" aria-label="Click to enlarge screenshot: ${step.screenshot.caption}">
        <img src="screenshots/${step.screenshot.id}.${step.screenshot.ext || 'jpg'}?v=${Date.now()}" alt="${step.screenshot.caption}" loading="lazy" data-fallback-id="${step.screenshot.id}">
        <div class="step-card__screenshot-caption">${step.screenshot.caption}</div>
        <button class="step-card__screenshot-zoom" tabindex="-1" aria-hidden="true"><i class="fa-solid fa-expand" aria-hidden="true"></i> Enlarge</button>
      </div>` : '';
  const rightCol = step.belowScreenshot
    ? `<div class="step-card__right-col">${screenshotHtml}<div class="step-card__below-screenshot">${step.belowScreenshot}</div></div>`
    : screenshotHtml;
  card.innerHTML = `
    <div class="step-card__header">
      <span class="step-card__badge">${i + 1}</span>
      <h2 class="step-card__title">${step.title}</h2>
    </div>
    <div class="${bodyClass}">
      <div class="step-card__text">${step.content}</div>
      ${rightCol}
    </div>
  `;
  return card;
}

function renderFlow(flowId) {
  if (flowId === 2) {
    const steps = getFlow2Steps();
    const container = document.getElementById('flow-2-steps');
    container.innerHTML = '';
    steps.forEach((step, i) => container.appendChild(makeStepCard(2, step, i)));
    return;
  }
  const flow = FLOWS[flowId];
  const stepsContainer = document.getElementById(`flow-${flowId}-steps`);
  stepsContainer.innerHTML = '';
  flow.steps.forEach((step, i) => stepsContainer.appendChild(makeStepCard(flowId, step, i)));
}

function renderStepper4GroupItem(steps, gid, ranges, current, list) {
  const group = FLOW4_GROUPS.find(g => g.id === gid);
  const [start, end] = ranges[gid];
  const isExpanded = state.flow4Groups[gid];
  const isGroupActive = current >= start && current <= end;

  const headerLi = document.createElement('li');
  headerLi.className = 'stepper__group-header' + (isGroupActive ? ' active' : '');
  headerLi.innerHTML = `
    <button class="stepper__group-btn${isExpanded ? ' expanded' : ''}" data-group4="${gid}" aria-expanded="${isExpanded}">
      <span class="stepper__group-label"><span class="stepper__group-icon">${group.icon}</span>${group.label}</span>
      <span class="stepper__group-arrow">▸</span>
    </button>
  `;
  list.appendChild(headerLi);

  const wrapLi = document.createElement('li');
  wrapLi.className = 'stepper__group-items-li';
  const wrap = document.createElement('div');
  wrap.className = 'stepper__group-items';
  wrap.dataset.group4 = gid;
  const inner = document.createElement('ul');
  inner.className = 'stepper__group-items-inner';

  for (let j = start; j <= end; j++) {
    const s = steps[j];
    const localNum = j - start + 1;
    const isDone = j < current;
    const isActive = j === current;
    const subLi = document.createElement('li');
    subLi.className = 'stepper__item stepper__item--sub';
    const shortTitle = s.title.includes(' — ') ? s.title.split(' — ').slice(1).join(' — ') : s.title;
    subLi.innerHTML = `
      <button class="stepper__btn${isActive ? ' active' : ''}${isDone ? ' done' : ''}"
              data-flow="4" data-step="${j}" data-local-num="${localNum}"
              aria-current="${isActive ? 'step' : 'false'}">
        <span class="stepper__num">${isDone ? '✓' : localNum}</span>
        <span>${shortTitle}</span>
      </button>
    `;
    inner.appendChild(subLi);
  }

  wrap.appendChild(inner);
  wrapLi.appendChild(wrap);
  list.appendChild(wrapLi);
  if (isExpanded) requestAnimationFrame(() => wrap.classList.add('expanded'));
}

function renderStepper4(list) {
  const steps = FLOWS[4].steps;
  const current = state.steps[4];
  const ranges = getFlow4GroupRanges();
  const renderedGroups = new Set();

  steps.forEach((step, i) => {
    if (step._group) {
      const gid = step._group;
      if (renderedGroups.has(gid)) return;
      renderedGroups.add(gid);
      renderStepper4GroupItem(steps, gid, ranges, current, list);
    } else {
      const isDone = i < current;
      const isActive = i === current;
      const li = document.createElement('li');
      li.className = 'stepper__item';
      li.innerHTML = `
        <button class="stepper__btn${isActive ? ' active' : ''}${isDone ? ' done' : ''}"
                data-flow="4" data-step="${i}"
                aria-current="${isActive ? 'step' : 'false'}">
          <span class="stepper__num">${isDone ? '✓' : '·'}</span>
          <span>${step.title}</span>
        </button>
      `;
      list.appendChild(li);
    }
  });
}

function renderStepper(flowId) {
  const list = document.getElementById('stepper-list');
  if (!list) return;

  if (flowId === 2) {
    const allSteps = getFlow2Steps();
    const ranges = getGroupRanges();
    const current = state.steps[2];

    FLOW2_GROUPS.forEach(group => {
      const [start, end] = ranges[group.id];
      const isExpanded = state.flow2Groups[group.id];
      const isGroupActive = current >= start && current <= end;

      const headerLi = document.createElement('li');
      headerLi.className = 'stepper__group-header' + (isGroupActive ? ' active' : '');
      headerLi.innerHTML = `
        <button class="stepper__group-btn${isExpanded ? ' expanded' : ''}" data-group="${group.id}" aria-expanded="${isExpanded}">
          <span class="stepper__group-label"><span class="stepper__group-icon">${group.icon}</span>${group.label}</span>
          <span class="stepper__group-arrow">▸</span>
        </button>
      `;
      list.appendChild(headerLi);

      const wrapLi = document.createElement('li');
      wrapLi.className = 'stepper__group-items-li';
      const wrap = document.createElement('div');
      wrap.className = 'stepper__group-items';
      wrap.dataset.group = group.id;
      const inner = document.createElement('ul');
      inner.className = 'stepper__group-items-inner';

      for (let i = start; i <= end; i++) {
        const step = allSteps[i];
        const localNum = i - start + 1;
        const isDone = i < current;
        const isActive = i === current;
        const li = document.createElement('li');
        li.className = 'stepper__item stepper__item--sub';
        li.innerHTML = `
          <button class="stepper__btn${isActive ? ' active' : ''}${isDone ? ' done' : ''}"
                  data-flow="2" data-step="${i}" data-local-num="${localNum}"
                  aria-current="${isActive ? 'step' : 'false'}">
            <span class="stepper__num">${isDone ? '✓' : localNum}</span>
            <span>${step.title}</span>
          </button>
        `;
        inner.appendChild(li);
      }

      wrap.appendChild(inner);
      wrapLi.appendChild(wrap);
      list.appendChild(wrapLi);

      if (isExpanded) {
        requestAnimationFrame(() => wrap.classList.add('expanded'));
      }
    });
    return;
  }

  if (flowId === 4) {
    renderStepper4(list);
    return;
  }

  const flow = FLOWS[flowId];
  const current = state.steps[flowId];
  flow.steps.forEach((step, i) => {
    const li = document.createElement('li');
    li.className = 'stepper__item';
    const isDone = i < current;
    const isActive = i === current;
    li.innerHTML = `
      <button class="stepper__btn${isActive ? ' active' : ''}${isDone ? ' done' : ''}"
              data-flow="${flowId}" data-step="${i}"
              aria-current="${isActive ? 'step' : 'false'}">
        <span class="stepper__num">${isDone ? '✓' : i + 1}</span>
        <span>${step.title}</span>
      </button>
    `;
    list.appendChild(li);
  });
}

function updateProgress(flowId) {
  const steps = flowId === 2 ? getFlow2Steps() : FLOWS[flowId].steps;
  const current = state.steps[flowId];
  const pct = steps.length > 1 ? Math.round((current / (steps.length - 1)) * 100) : 0;
  document.getElementById('flow-progress').style.width = pct + '%';
  document.getElementById('flow-prev').disabled = current === 0;
  const nextBtn = document.getElementById('flow-next');
  nextBtn.textContent = current === steps.length - 1 ? '✓ Done' : 'Next →';
  nextBtn.disabled = current === steps.length - 1;
}

function updateStepperInPlace(flowId, stepIndex) {
  document.querySelectorAll(`#stepper-list .stepper__btn[data-flow="${flowId}"]`).forEach(btn => {
    const s = Number.parseInt(btn.dataset.step);
    const isDone = s < stepIndex;
    const isActive = s === stepIndex;
    btn.classList.toggle('active', isActive);
    btn.classList.toggle('done', isDone);
    btn.setAttribute('aria-current', isActive ? 'step' : 'false');
    const numEl = btn.querySelector('.stepper__num');
    if (numEl) numEl.textContent = isDone ? '✓' : (btn.dataset.localNum || String(s + 1));
  });

  if (flowId === 4) {
    const ranges = getFlow4GroupRanges();
    FLOW4_GROUPS.forEach(g => {
      const [start, end] = ranges[g.id];
      const header = document.querySelector(`.stepper__group-btn[data-group4="${g.id}"]`)?.closest('.stepper__group-header');
      if (header) header.classList.toggle('active', stepIndex >= start && stepIndex <= end);
    });
  }

  if (flowId === 2) {
    const ranges = getGroupRanges();
    FLOW2_GROUPS.forEach(g => {
      const [start, end] = ranges[g.id];
      const header = document.querySelector(`.stepper__group-btn[data-group="${g.id}"]`)?.closest('.stepper__group-header');
      if (header) header.classList.toggle('active', stepIndex >= start && stepIndex <= end);
    });
  }

  // Scroll active button into view
  const activeBtn = document.querySelector(`#stepper-list .stepper__btn[data-flow="${flowId}"][data-step="${stepIndex}"]`);
  if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateBreadcrumb(flowId, stepIndex) {
  const nav = document.getElementById('breadcrumb');
  if (!nav) return;
  const steps = flowId === 2 ? getFlow2Steps() : FLOWS[flowId]?.steps;
  const step = steps?.[stepIndex];
  const flowLabel = FLOW_LABELS_NAV[flowId] || '';
  const groupInfo = getGroupInfo(flowId, stepIndex);
  const sep = '<span class="breadcrumb__sep" aria-hidden="true">›</span>';

  let html = `<a href="#${FLOW_SLUGS[1]}" class="breadcrumb__home" data-bc="home" aria-label="Home"><i class="fa-solid fa-house" aria-hidden="true"></i></a>${sep}`;
  html += `<a href="#${FLOW_SLUGS[flowId]}" class="breadcrumb__item" data-bc-flow="${flowId}">${flowLabel}</a>`;
  if (groupInfo) {
    html += `${sep}<a href="${stepHash(flowId, groupInfo.firstStep)}" class="breadcrumb__item" data-bc-flow="${flowId}" data-bc-step="${groupInfo.firstStep}">${groupInfo.label}</a>`;
  }
  if (step?.title) {
    html += `${sep}<span class="breadcrumb__item breadcrumb__item--current" aria-current="page">${step.title}</span>`;
  }
  nav.innerHTML = html;

  nav.querySelector('[data-bc="home"]')?.addEventListener('click', e => {
    e.preventDefault();
    switchFlow(1);
    goToStep(1, 0);
  });
  nav.querySelectorAll('[data-bc-flow]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const fid = Number.parseInt(e.currentTarget.dataset.bcFlow);
      const sid = e.currentTarget.dataset.bcStep === undefined ? 0 : Number.parseInt(e.currentTarget.dataset.bcStep);
      switchFlow(fid);
      goToStep(fid, sid);
    });
  });
}
