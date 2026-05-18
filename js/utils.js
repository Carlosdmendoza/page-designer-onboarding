function getFlow2Steps() {
  const basics   = FLOWS[2].steps.filter(s => s.category === 'Layout' || s.category === 'Page Designer');
  const events   = FLOWS[2].steps.filter(s => s.category === 'Event-Related');
  const checkout = FLOWS[2].steps.filter(s => s.category === 'Checkout');
  return [
    { ...SUBFLOW_INTROS['2b'], _group: 'basics' },
    ...basics.map(s => ({ ...s, _group: 'basics' })),
    { ...SUBFLOW_INTROS['2e'], _group: 'event' },
    ...events.map(s => ({ ...s, _group: 'event' })),
    { ...SUBFLOW_INTROS['2c'], _group: 'checkout' },
    ...checkout.map(s => ({ ...s, _group: 'checkout' }))
  ];
}

function getFlow4GroupRanges() {
  const steps = FLOWS[4].steps;
  const ranges = {};
  FLOW4_GROUPS.forEach(g => {
    const start = steps.findIndex(s => s._group === g.id);
    let end = start;
    while (end + 1 < steps.length && steps[end + 1]._group === g.id) end++;
    ranges[g.id] = [start, end];
  });
  return ranges;
}

function flow4GroupOfStep(stepIndex) {
  const ranges = getFlow4GroupRanges();
  return FLOW4_GROUPS.find(g => stepIndex >= ranges[g.id][0] && stepIndex <= ranges[g.id][1])?.id || null;
}

function getGroupRanges() {
  const steps = getFlow2Steps();
  const ranges = {};
  let idx = 0;
  FLOW2_GROUPS.forEach(g => {
    const start = idx;
    while (idx < steps.length && steps[idx]._group === g.id) idx++;
    ranges[g.id] = [start, idx - 1];
  });
  return ranges;
}

function groupOfStep(stepIndex) {
  const ranges = getGroupRanges();
  return FLOW2_GROUPS.find(g => stepIndex >= ranges[g.id][0] && stepIndex <= ranges[g.id][1])?.id || 'basics';
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function stepHash(flowId, stepIndex) {
  const steps = flowId === 2 ? getFlow2Steps() : FLOWS[flowId]?.steps;
  const title = steps?.[stepIndex]?.title;
  return title
    ? `#${FLOW_SLUGS[flowId]}/${slugify(title)}`
    : `#${FLOW_SLUGS[flowId]}`;
}

function getGroupInfo(flowId, stepIndex) {
  if (flowId === 2) {
    const ranges = getGroupRanges();
    const grp = FLOW2_GROUPS.find(g => stepIndex >= ranges[g.id][0] && stepIndex <= ranges[g.id][1]);
    return grp ? { label: grp.label, firstStep: ranges[grp.id][0] } : null;
  }
  if (flowId === 4) {
    const ranges = getFlow4GroupRanges();
    const grp = FLOW4_GROUPS.find(g => stepIndex >= ranges[g.id][0] && stepIndex <= ranges[g.id][1]);
    return grp ? { label: grp.label, firstStep: ranges[grp.id][0] } : null;
  }
  return null;
}

function updateHash(flowId, stepIndex) {
  history.replaceState(null, '', stepHash(flowId, stepIndex));
}

function stepsForFlow(flowId) {
  return flowId === 2 ? getFlow2Steps() : (FLOWS[flowId]?.steps || []);
}

function sidebarStepBadge(i, current) {
  if (i < current) return '<span class="stepper__num done-badge">✓</span>';
  return `<span class="stepper__num">${i + 1}</span>`;
}
