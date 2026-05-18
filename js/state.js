/* ============================================================
   STATE
   ============================================================ */
const state = {
  activeFlow: 1,
  flow2Groups: { basics: true, event: false, checkout: false },
  flow4Groups: { 'color-scheme': true, typography: false, stylings: false },
  steps: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
};

const FLOW_LABELS_NAV = {
  1: 'Feature Tour',
  2: 'Component Library',
  3: 'Build Your First Page',
  4: 'Site Settings',
  5: 'Tips & FAQs'
};

const FLOW_SLUGS = {
  1: 'feature-tour',
  2: 'component-library',
  3: 'build-your-first-page',
  4: 'site-settings',
  5: 'tips-and-faqs'
};

const SLUG_TO_FLOW = Object.fromEntries(
  Object.entries(FLOW_SLUGS).map(([k, v]) => [v, Number(k)])
);
