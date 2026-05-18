function goToStep(flowId, stepIndex) {
  const steps = flowId === 2 ? getFlow2Steps() : FLOWS[flowId].steps;
  if (!steps || stepIndex < 0 || stepIndex >= steps.length) return;

  const prevStep = state.steps[flowId];
  state.steps[flowId] = stepIndex;

  // Auto-expand the correct group (in-place, no DOM rebuild)
  if (flowId === 2) {
    const newGrp = groupOfStep(stepIndex);
    const oldGrp = groupOfStep(prevStep);
    if (newGrp !== oldGrp || !state.flow2Groups[newGrp]) {
      toggleGroup(newGrp);
    }
  }
  if (flowId === 4) {
    const newGrp = flow4GroupOfStep(stepIndex);
    const oldGrp = flow4GroupOfStep(prevStep);
    if (newGrp && (newGrp !== oldGrp || !state.flow4Groups[newGrp])) {
      toggleGroup4(newGrp);
    }
  }

  // Update step cards (show/hide)
  const allCards = document.querySelectorAll(`#flow-${flowId}-steps .step-card`);
  allCards.forEach((card, i) => card.classList.toggle('active', i === stepIndex));

  // Update stepper states in-place (no DOM rebuild = no re-animation)
  updateStepperInPlace(flowId, stepIndex);
  updateProgress(flowId);
  if (globalThis._syncSidebarFlows) globalThis._syncSidebarFlows(flowId);
  updateBreadcrumb(flowId, stepIndex);
  updateHash(flowId, stepIndex);
}

function toggleGroup(groupId) {
  const activeGroup = groupOfStep(state.steps[2]);
  if (groupId === activeGroup && state.flow2Groups[groupId]) return;
  const opening = !state.flow2Groups[groupId];
  FLOW2_GROUPS.forEach(g => { state.flow2Groups[g.id] = false; });
  state.flow2Groups[groupId] = opening;

  FLOW2_GROUPS.forEach(g => {
    const wrap = document.querySelector(`.stepper__group-items[data-group="${g.id}"]`);
    const btn  = document.querySelector(`.stepper__group-btn[data-group="${g.id}"]`);
    if (wrap) wrap.classList.toggle('expanded', state.flow2Groups[g.id]);
    if (btn)  {
      btn.classList.toggle('expanded', state.flow2Groups[g.id]);
      btn.setAttribute('aria-expanded', state.flow2Groups[g.id]);
    }
  });
}

function toggleGroup4(groupId) {
  const activeGroup = flow4GroupOfStep(state.steps[4]);
  if (groupId === activeGroup && state.flow4Groups[groupId]) return;
  const opening = !state.flow4Groups[groupId];
  FLOW4_GROUPS.forEach(g => { state.flow4Groups[g.id] = false; });
  state.flow4Groups[groupId] = opening;

  FLOW4_GROUPS.forEach(g => {
    const wrap = document.querySelector(`.stepper__group-items[data-group4="${g.id}"]`);
    const btn  = document.querySelector(`.stepper__group-btn[data-group4="${g.id}"]`);
    if (wrap) wrap.classList.toggle('expanded', state.flow4Groups[g.id]);
    if (btn)  {
      btn.classList.toggle('expanded', state.flow4Groups[g.id]);
      btn.setAttribute('aria-expanded', state.flow4Groups[g.id]);
    }
  });
}

function switchFlow(flowId) {
  document.querySelectorAll('.flow-tab').forEach(btn => {
    const active = Number.parseInt(btn.dataset.flow) === flowId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });
  document.querySelectorAll('.flow-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `flow-${flowId}-panel`);
  });
  state.activeFlow = flowId;
  renderStepper(flowId);
  updateProgress(flowId);
  if (globalThis._syncMobileNavActive) globalThis._syncMobileNavActive(flowId);
  if (globalThis._syncSidebarFlows) globalThis._syncSidebarFlows(flowId);
  updateBreadcrumb(flowId, state.steps[flowId] || 0);
  updateHash(flowId, state.steps[flowId] || 0);
}

function parseAndNavigateHash() {
  const raw = location.hash.slice(1);
  if (!raw) return false;

  // Slug format: #feature-tour  or  #feature-tour/the-toolbar
  const slashIdx = raw.indexOf('/');
  const flowSlug = slashIdx === -1 ? raw : raw.slice(0, slashIdx);
  const stepSlug = slashIdx === -1 ? null : raw.slice(slashIdx + 1);
  const flowId = SLUG_TO_FLOW[flowSlug];

  if (flowId) {
    if (!stepSlug) {
      switchFlow(flowId);
      goToStep(flowId, state.steps[flowId] || 0);
      return true;
    }
    const steps = flowId === 2 ? getFlow2Steps() : FLOWS[flowId]?.steps;
    const idx = steps?.findIndex(s => s.title && slugify(s.title) === stepSlug) ?? -1;
    switchFlow(flowId);
    goToStep(flowId, Math.max(0, idx));
    return true;
  }

  // Legacy numeric format: #flow-1-step-0
  const m = /^flow-(\d+)-step-(\d+)$/.exec(raw);
  if (m) {
    const fid = Number.parseInt(m[1]);
    const sid = Number.parseInt(m[2]);
    if (FLOWS[fid]) { switchFlow(fid); goToStep(fid, sid); return true; }
  }

  return false;
}
