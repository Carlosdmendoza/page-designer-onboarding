function collapseAllMobileNavSections(nav) {
  nav.querySelectorAll('.mobile-nav-steps').forEach(s => s.classList.remove('open'));
  nav.querySelectorAll('.mobile-nav-section').forEach(s => {
    s.classList.remove('active');
    s.setAttribute('aria-expanded', 'false');
  });
}

function buildMobileStepList(flowId, steps, stepsList) {
  steps.forEach((step, i) => {
    if (!step.title) return;
    const stepBtn = document.createElement('button');
    stepBtn.className = 'mobile-nav-step';
    stepBtn.textContent = step.title;
    stepBtn.addEventListener('click', () => { switchFlow(flowId); goToStep(flowId, i); if (globalThis._closeMobileNav) globalThis._closeMobileNav(); });
    stepsList.appendChild(stepBtn);
  });
}

function initMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  if (!btn || !nav || !backdrop) return;

  const FLOW_ORDER = [1, 2, 4, 3, 5];
  const FLOW_NUMS  = { 1: 1, 2: 2, 4: 3, 3: 4, 5: 5 };
  const FLOW_LABELS = {
    1: 'Feature Tour',
    2: 'Component Library',
    3: 'Build Your First Page',
    4: 'Site Settings',
    5: 'Tips & FAQs'
  };

  function buildNav() {
    nav.innerHTML = '';
    FLOW_ORDER.forEach(flowId => {
      const steps = stepsForFlow(flowId);
      const isActive = state.activeFlow === flowId;

      const item = document.createElement('div');
      item.className = 'mobile-nav-item';
      item.dataset.flow = flowId;

      const header = document.createElement('button');
      header.className = 'mobile-nav-section' + (isActive ? ' active' : '');
      header.setAttribute('aria-expanded', isActive);
      header.innerHTML = `
        <span class="flow-tab__num">${FLOW_NUMS[flowId]}</span>
        <span class="mobile-nav-section__label">${FLOW_LABELS[flowId]}</span>
        <svg class="mobile-nav-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

      const stepsList = document.createElement('div');
      stepsList.className = 'mobile-nav-steps' + (isActive ? ' open' : '');
      buildMobileStepList(flowId, steps, stepsList);

      header.addEventListener('click', () => {
        const isOpen = stepsList.classList.contains('open');
        collapseAllMobileNavSections(nav);
        if (!isOpen) {
          stepsList.classList.add('open');
          header.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          switchFlow(flowId);
        }
      });

      item.appendChild(header);
      item.appendChild(stepsList);
      nav.appendChild(item);
    });
  }

  function syncActiveSection(flowId) {
    nav.querySelectorAll('.mobile-nav-section').forEach(s => {
      const fid = Number.parseInt(s.closest('.mobile-nav-item').dataset.flow);
      const active = fid === flowId;
      s.classList.toggle('active', active);
      s.setAttribute('aria-expanded', active);
    });
    nav.querySelectorAll('.mobile-nav-steps').forEach(s => {
      const fid = Number.parseInt(s.closest('.mobile-nav-item').dataset.flow);
      s.classList.toggle('open', fid === flowId);
    });
  }

  function openMobileNav() {
    btn.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    nav.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('open');
  }

  function closeMobileNav() {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('open');
  }

  buildNav();

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMobileNav() : openMobileNav();
  });

  backdrop.addEventListener('click', closeMobileNav);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

  globalThis._closeMobileNav = closeMobileNav;
  globalThis._syncMobileNavActive = syncActiveSection;
}
