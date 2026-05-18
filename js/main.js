function handleScreenshotError(e) {
  const img = e.target;
  if (!img.matches('.step-card__screenshot img')) return;
  const parent = img.parentElement;
  const id = img.dataset.fallbackId || '';
  parent.classList.add('step-card__screenshot--placeholder');
  img.style.display = 'none';
  parent.insertAdjacentHTML('beforeend', `<div style="padding:40px 20px;text-align:center;color:var(--gray-400)">📷<br><small>${id}</small></div>`);
}

function setupEventDelegation() {
  document.addEventListener('click', e => {
    // Sidebar group toggle
    const groupBtn = e.target.closest('.stepper__group-btn');
    if (groupBtn) {
      if (groupBtn.dataset.group4) {
        toggleGroup4(groupBtn.dataset.group4);
      } else {
        toggleGroup(groupBtn.dataset.group);
      }
      return;
    }

    // Flow tab switch (header tabs on tablet)
    const flowTab = e.target.closest('.flow-tab');
    if (flowTab) {
      switchFlow(Number.parseInt(flowTab.dataset.flow));
      return;
    }

    // Stepper step jump
    const stepBtn = e.target.closest('.stepper__btn');
    if (stepBtn) {
      goToStep(Number.parseInt(stepBtn.dataset.flow), Number.parseInt(stepBtn.dataset.step));
      return;
    }

    // Next / Prev buttons
    if (e.target.closest('#flow-next')) {
      goToStep(state.activeFlow, state.steps[state.activeFlow] + 1);
      return;
    }
    if (e.target.closest('#flow-prev')) {
      goToStep(state.activeFlow, state.steps[state.activeFlow] - 1);
      return;
    }

    // Screenshot lightbox
    const ssEl = e.target.closest('.step-card__screenshot');
    if (ssEl) {
      openLightbox(ssEl.dataset.ss, ssEl.dataset.caption, ssEl.dataset.ext);
    }
  });

  // Keyboard support for screenshots
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const ssEl = document.activeElement.closest('.step-card__screenshot');
      if (ssEl) { e.preventDefault(); openLightbox(ssEl.dataset.ss, ssEl.dataset.caption, ssEl.dataset.ext); }
    }
  });
}

function init() {
  setupEventDelegation();
  document.addEventListener('error', handleScreenshotError, true);
  renderFlow(1);
  renderFlow(2);
  renderFlow(3);
  renderFlow(4);
  renderFlow(5);
  if (!parseAndNavigateHash()) switchFlow(1);
  initSearch();
  initMobileNav();
  initSidebarFlows();
  globalThis.addEventListener('popstate', parseAndNavigateHash);
}

init();
