/* ============================================================
   DATA — all tutorial content lives here
   ============================================================ */

const FLOWS = {
  1: {
    id: 'flow-1',
    steps: [
      {
        title: 'The Toolbar',
        screenshot: { id: 'ss_toolbar_zoom', caption: 'The Page Designer toolbar with all icons labeled' },
        content: `
          <p>The toolbar at the top of the Page Designer gives you quick access to every major action. Here's what each icon does:</p>
          <table class="icon-table">
            <thead><tr><th></th><th>Label</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>⊞</td><td>Select Template</td><td>Opens the Choose a Template modal</td></tr>
              <tr><td>≡</td><td>Site Settings</td><td>Opens the full site settings panel</td></tr>
              <tr><td>💾</td><td>Save</td><td>Manually saves the current layout</td></tr>
              <tr><td>↩</td><td>Undo</td><td>Steps back through history (up to 30 entries)</td></tr>
              <tr><td>🕐</td><td>History</td><td>Opens the change history panel with timestamps</td></tr>
              <tr><td>↪</td><td>Redo</td><td>Re-applies an undone action</td></tr>
              <tr><td>♿</td><td>Accessibility Scan</td><td>Runs a WCAG contrast/alt-text/heading check (BETA)</td></tr>
              <tr><td>🌐</td><td>Translation Wizard</td><td>Manage multi-language translations for your page content</td></tr>
              <tr><td>👁</td><td>Preview</td><td>Hides the editor chrome — shows the live page</td></tr>
              <tr><td>🔗</td><td>Event Page</td><td>Opens the published event page in a new tab</td></tr>
              <tr><td>🖥 / ⬜ / 📱</td><td>Device Views</td><td>Switches canvas between Desktop / Tablet / Mobile</td></tr>
            </tbody>
          </table>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The banner at the top of the canvas tells you whether you're editing a shared layout (changes affect all events using it) or a layout private to this event only.</span></div>
        `
      },
      {
        title: 'Shared Layout Dialog',
        screenshot: { id: 'ss_7635nm8vx', caption: 'The Shared Layout Awareness dialog — choose how your edits will apply' },
        content: `
          <p>When you open the Page Designer for an event that shares a layout with other events, this dialog appears first.</p>
          <table class="icon-table">
            <thead><tr><th></th><th>Option</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>✏️</td><td><strong>Edit shared Design</strong></td><td>All events using this layout will see your changes</td></tr>
              <tr><td>📄</td><td><strong>Make a copy for this event</strong></td><td>Duplicates the layout — only this event is affected</td></tr>
              <tr><td>⊞</td><td><strong>Use a pre-made template</strong></td><td>Starts fresh and opens the template picker</td></tr>
            </tbody>
          </table>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Not sure which to pick? Click <strong>"Why am I seeing this?"</strong> in the dialog for a plain-English explanation of shared vs. event-specific layouts.</span></div>
        `
      },
      {
        title: 'Choose a Template',
        screenshot: { id: 'ss_273560h86', caption: 'The BT Templates tab showing 8 built-in starting points' },
        content: `
          <p>The template picker has two tabs: <strong>BT Templates</strong> (8 built-in designs) and <strong>My Templates</strong> (layouts you've saved).</p>
          <p>Each BT template card shows a wireframe preview, a theme badge, and the sections included. Available templates:</p>
          <ul>
            <li><strong>Start from Scratch</strong> — blank canvas or custom layout</li>
            <li><strong>Bold Conference</strong> — Hero, Speakers, Schedule, Tickets, Venue, FAQ, CTA</li>
            <li><strong>Tabbed Conference</strong> — full tabbed layout with Schedule, Speakers, FAQ, and more</li>
            <li><strong>AI Event Webinar</strong> — Info Cards, Schedule, Speakers, Pricing, Location</li>
            <li><strong>Healthcare Research Conference</strong> — Schedule, Speakers, Event Details, FAQ</li>
            <li><strong>Simple Checkout Modern Design</strong> — Image, Sessions, Sponsors, FAQ, Footer</li>
            <li><strong>Charity Gala</strong> — Hero, Sponsors, Info Cards, Schedule, Speakers, Pricing</li>
            <li><strong>Octoberlights Fest</strong> — Pricing, Sponsors, Schedule, Info Cards, Speakers</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span><strong>My Templates</strong> shows layouts you've saved from the schema header. It's the fastest way to reuse a design you've already perfected for a previous event.</span></div>
        `
      },
      {
        title: 'Empty Canvas & Sections',
        screenshot: { id: 'ss_1464dk5ul', caption: 'Section settings panel showing Content, Style, and Spacing tabs' },
        content: `
          <p>When your canvas is empty you'll see two CTAs: <strong>Add New Section</strong> (blank) and <strong>Browse Templates</strong> (picks a starting layout).</p>
          <p>Once a section exists, the right sidebar shows the <strong>Page Structure</strong> tree — every section, column, and component in your layout.</p>
          <p>Each section has three settings tabs in the sidebar:</p>
          <ul>
            <li><strong>Content</strong> — Section name, column count (1–5), and column distribution (50/50, 67/33, etc.)</li>
            <li><strong>Style</strong> — Background (solid / gradient / image / video), border, shadow</li>
            <li><strong>Spacing</strong> — Padding on each side with linked-toggle option</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The <strong>"+ Add new section"</strong> button always appears at the very bottom of the canvas. You can add as many sections as you need — there's no limit.</span></div>
        `
      },
      {
        title: 'Page Structure Panel',
        screenshot: { id: 'ss_page_structure', caption: 'Page Structure tree showing sections, columns, and components with action icons' },
        content: `
          <p>The <strong>Page Structure</strong> panel on the right side of the canvas gives you a bird's-eye view of your entire layout as a collapsible tree: Sections → Columns → Components.</p>
          <p>From the Page Structure panel you can:</p>
          <ul>
            <li><strong>Reorganize sections</strong> — drag the handle (⠿) next to any section or component to reorder it without touching the canvas directly</li>
            <li><strong>Open component settings</strong> — click the gear icon next to any component to jump straight to its settings panel</li>
            <li><strong>Duplicate</strong> — click the duplicate icon to instantly clone a section or component with all its configuration preserved</li>
            <li><strong>Delete</strong> — click the trash icon to remove a section or component</li>
            <li><strong>Add new sections</strong> — use the <strong>+ Add new section</strong> button at the bottom of the tree</li>
            <li><strong>Collapse / Expand all</strong> — use the "Collapse All" toggle in the panel header to clean up the view when working with large layouts</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The Page Structure tree is especially useful for complex layouts with many nested sections. Instead of scrolling through a long canvas to find a component, just click it in the tree and its settings open immediately.</span></div>
        `
      },
      {
        title: 'Add Component Panel',
        screenshot: { id: 'ss_1293ccg2p', caption: 'The Add Component panel — BASIC, EVENT DETAILS, REGISTRATION tabs' },
        content: `
          <p>Click any <strong>"Empty — Add component"</strong> placeholder in a column to open the component selector. Components are organized in three tabs:</p>
          <div class="comp-grid">
            <span class="comp-chip">Button</span><span class="comp-chip">Footer</span><span class="comp-chip">Header</span>
            <span class="comp-chip">Hero</span><span class="comp-chip">Icon</span><span class="comp-chip">Icon List</span>
            <span class="comp-chip">Icon-Text Group</span><span class="comp-chip">Image</span><span class="comp-chip">Paragraph</span>
            <span class="comp-chip">Rich Text</span><span class="comp-chip">Social Share</span><span class="comp-chip">Tabs</span>
            <span class="comp-chip">Title</span><span class="comp-chip">Video</span>
          </div>
          <div class="comp-grid">
            <span class="comp-chip comp-chip--event">About Event</span><span class="comp-chip comp-chip--event">Date &amp; Time</span>
            <span class="comp-chip comp-chip--event">Event Banner</span><span class="comp-chip comp-chip--event">Countdown</span>
            <span class="comp-chip comp-chip--event">FAQ</span><span class="comp-chip comp-chip--event">Info Cards</span>
            <span class="comp-chip comp-chip--event">Session Schedule</span><span class="comp-chip comp-chip--event">Simple Location</span>
            <span class="comp-chip comp-chip--event">Simple Pricing</span><span class="comp-chip comp-chip--event">Speakers</span>
            <span class="comp-chip comp-chip--event">Sponsors</span>
          </div>
          <div class="comp-grid">
            <span class="comp-chip comp-chip--reg">Checkout Form</span><span class="comp-chip comp-chip--reg">Register Button</span>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use the <strong>search bar</strong> at the top of the panel to find any component instantly across all three tabs.</span></div>
        `
      },
      {
        title: 'Site Settings — Color Scheme',
        screenshot: { id: 'ss_0235srkis', caption: 'Site Settings open on the Color Scheme panel' },
        content: `
          <p>Click the <strong>sliders icon</strong> in the toolbar to open Site Settings. The left nav has 10 sections — start with <strong>Color Scheme</strong>.</p>
          <p>At the top is the <strong>Theme Creator</strong> button — a wizard that fills all color tokens from just 3–4 brand colors. Below it, you can expand and override individual tokens:</p>
          <ul>
            <li><strong>Theme Colors</strong> — Primary, Secondary, Accent, Base layers (100–300), Neutral</li>
            <li><strong>Link &amp; List Elements</strong> — Hyperlink, hover, list item colors</li>
            <li><strong>Button Colors</strong> — Per-type overrides (Primary / Secondary / Accent)</li>
            <li><strong>Gradients</strong> — Site, Title, and Button gradients (3-stop + direction)</li>
          </ul>
          <p>The <strong>Color Preview panel</strong> on the right shows live swatches so you can check contrast before saving.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Click <strong>"Expand all"</strong> at the top of the Color Scheme panel to open every accordion at once — great when you need to audit all tokens together.</span></div>
        `
      },
      {
        title: 'Site Settings — Typography & Stylings',
        screenshot: { id: 'ss_9624jt0gz', caption: 'Typography settings with live preview panel on the right' },
        content: `
          <p><strong>Typography</strong> controls font families, sizes, weights, and semantic colors:</p>
          <ul>
            <li>Font Colors Primary / Secondary / Muted</li>
            <li>Semantic colors: Success, Warning, Error, Info (with on-color variants)</li>
            <li>Font Families: UI Font (body), Title Font (H1–H3), Paragraph Font</li>
            <li>Custom Fonts via <code>@font-face</code> upload</li>
            <li>Size tokens for h1–h3, bodyLarge, bodySmall, caption</li>
          </ul>
          <p><strong>Stylings</strong> controls global defaults for shadows, borders, spacing, and layout width (Full / Expanded / Boxed / Custom).</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The live <strong>Typography Preview</strong> panel updates in real time as you change settings — no need to save and refresh to check how headings and body text look together.</span></div>
        `
      },
      {
        title: 'Version History',
        screenshot: { id: 'ss_7866205gl', caption: 'The History panel showing 30 timestamped entries' },
        content: `
          <p>Click the <strong>clock icon</strong> in the toolbar to open the History panel. It stores up to <strong>30 entries</strong> — each labeled with the action taken and a timestamp (e.g. "Added Column — just now", "New layout — 3 min ago").</p>
          <p>The <strong>ACTIVE</strong> badge marks where you are right now. Click any earlier entry to restore to that exact state.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>History is your safety net. Before making a big change like switching templates or deleting a section, check the history panel so you know you can get back to where you were.</span></div>
        `
      },
      {
        title: 'Accessibility Scan',
        screenshot: { id: 'ss_8026yz7ek', caption: 'Accessibility Scan showing contrast issues with Auto-fix options' },
        content: `
          <p>Click the <strong>wheelchair icon</strong> to run the Layout Accessibility Scan (BETA). It checks your page for:</p>
          <ul>
            <li>Contrast ratio failures (text vs. background color)</li>
            <li>Missing alt text on images</li>
            <li>Empty links or buttons</li>
            <li>Incorrect heading order (e.g. H3 before H2)</li>
          </ul>
          <p>Issues can be <strong>auto-fixed individually</strong> or all at once with <strong>Fix All</strong>. A green checkmark and "No accessibility issues found!" means you're good to publish.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Run the accessibility scan as your last step before publishing. It takes seconds and protects visitors who rely on screen readers or have low vision.</span></div>
        `
      },
      {
        title: 'Embed on Your Website',
        screenshot: { id: 'ss_embed', caption: 'Site Settings → Embed — configure page target and layout preset, then copy the snippet' },
        content: `
          <p>Go to <strong>Site Settings → Embed</strong> to generate a ready-to-paste code snippet that embeds your Blackthorn Events page directly on any external website — no redirect, no separate tab, no custom development needed.</p>
          <p>Choose which page to embed under <strong>Page Target</strong>:</p>
          <ul>
            <li><strong>Event Overview</strong> — embeds your full event landing page (the one you designed in Page Designer)</li>
            <li><strong>Event Group</strong> — embeds your group's public event listing using the <code>g/&lt;groupKey&gt;</code> route</li>
            <li><strong>Cart (Dynamic)</strong> — embeds the checkout experience directly, so visitors can register without ever leaving your site</li>
          </ul>
          <p>Choose a <strong>Layout Preset</strong> to control how the embed fills space:</p>
          <ul>
            <li><strong>Auto Height</strong> (recommended) — the iframe grows with the content, no scrollbars</li>
            <li><strong>Full Viewport (100vh)</strong> — fills the entire browser height, best for standalone embed pages</li>
            <li><strong>Fixed Size</strong> — set a specific pixel width and height; adds a scrollbar if content overflows</li>
          </ul>
          <p>Once configured, a code snippet is generated at the bottom of the panel. Copy and paste it into any webpage — WordPress, Webflow, a custom site, or anywhere that accepts HTML.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Cart (Dynamic)</strong> embed to drop a registration form directly into a marketing landing page — visitors complete the checkout without ever being redirected to a Blackthorn-hosted URL.</span></div>
        `
      },
      {
        title: 'Custom CSS',
        screenshot: { id: 'ss_custom_css', caption: 'Site Settings → Custom CSS — paste any valid CSS to apply page-wide' },
        content: `
          <p>Go to <strong>Site Settings → Custom CSS</strong> to write or paste any valid CSS. It applies immediately to your entire published page.</p>
          <p><strong>You probably won't need this often.</strong> The Page Designer gives you granular visual control over every component — colors, spacing, fonts, borders, shadows, corner radius, and more are all configurable directly in each component's settings panel without writing a single line of CSS.</p>
          <p>But for those edge cases where you need to target a very specific element or override a style that isn't exposed in the UI, Custom CSS is your escape hatch. Previously in Blackthorn Events, applying custom styles required hosting a separate CSS file externally and referencing it. Now you can simply paste your CSS here and it applies everywhere — no file hosting, no URLs, no waiting.</p>
          <p>Common legitimate uses:</p>
          <ul>
            <li>Targeting a very specific nested element the settings panel doesn't expose</li>
            <li>Adding a CSS animation or transition not available in the UI</li>
            <li>Overriding a third-party embed's default styles</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">⚠️</span><span>CSS here overrides everything on the page — including theme tokens. Changes can be hard to debug. Always prefer using the component settings panel first, and treat Custom CSS as a last resort.</span></div>
        `
      },
      {
        title: 'Export Layout JSON',
        screenshot: { id: 'ss_export_json', caption: 'Layout JSON export dialog — Download or Copy to Clipboard' },
        content: `
          <p>Go to <strong>Site Settings → Export</strong> to export your entire page layout as a <code>.json</code> file. The JSON captures everything that defines the visual structure of your page:</p>
          <ul>
            <li><strong>Layout structure</strong> — every section, column, and component in order</li>
            <li><strong>Component configuration</strong> — settings, styles, and content for each component</li>
            <li><strong>Site settings</strong> — theme, colors, typography, spacing, custom CSS</li>
          </ul>
          <p><strong>What is NOT stored in the JSON:</strong> No sensitive or personal data is ever included. Ticket prices, registrant information, Salesforce record IDs, payment data, and attendee records all live in Salesforce — not in the layout file. The JSON is safe to share.</p>
          <p>Use it to <strong>back up</strong> a layout before big changes, <strong>share a design</strong> with your team, or <strong>version-control</strong> your page layouts.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Copy to Clipboard</strong> to paste the JSON directly into a support ticket, Slack message, or a GitHub gist — no file download required.</span></div>
        `
      },
      {
        title: 'Import Layout JSON',
        screenshot: { id: 'ss_import_json', caption: 'Import Layout JSON dialog — paste JSON or upload a file, with live validation' },
        content: `
          <p>Go to <strong>Site Settings → Import JSON</strong> to load a previously exported layout into the current event. You can import in two ways:</p>
          <ul>
            <li><strong>Paste JSON</strong> — copy a layout JSON and paste it directly into the text area. The dialog validates it in real time and shows <em>✓ Valid JSON</em> when it's ready.</li>
            <li><strong>Upload a file</strong> — drag and drop a <code>.json</code> file or browse your computer.</li>
          </ul>
          <p>Click <strong>Import Layout</strong> to apply. This <em>replaces</em> the current layout entirely, so export a backup first if you want to keep what you have.</p>
          <p>Common use cases:</p>
          <ul>
            <li>Apply a design from a previous event to a new one instantly</li>
            <li>Share a layout between orgs or from a Blackthorn template</li>
            <li>Restore from a JSON backup after unwanted changes</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The character count shown below the paste area gives you a quick sanity check — a typical full-page layout is 50,000–100,000 characters.</span></div>
        `
      },
      {
        title: 'Multi-language Translations',
        screenshot: { id: 'ss_translations', caption: 'Translation panel — source language English, target Spanish, auto-filled strings' },
        content: `
          <p>Click the <strong>AB icon</strong> in the toolbar to open the Translations panel. This lets you create fully translated versions of your event page without duplicating your layout or relying on DD (Dynamic Data) field values.</p>
          <p>To set up translations:</p>
          <ol>
            <li>Set the <strong>Source Language</strong> — the language your page content is written in (e.g. English)</li>
            <li>Add one or more <strong>Target Languages</strong> using the dropdown (e.g. Spanish, French)</li>
            <li>Click <strong>Auto-fill translations</strong> — the system fills in all component strings automatically using AI translation</li>
          </ol>
          <p>Every text string on your page (header nav items, button labels, section headings, FAQ answers) appears as an editable field grouped by component.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Auto-translate first to get a solid baseline, then manually overwrite any strings that need a more precise or branded translation. Toggle <strong>Overwrite existing</strong> off to protect strings you've already hand-edited.</span></div>
        `
      },
      {
        title: 'Media Library',
        screenshot: { id: 'ss_media_library', ext: 'png', caption: 'Asset Library modal — Media Library with filter by type (Image, Video, Document, Font) and Upload Media option' },
        content: `
          <p>Click the <strong>image icon</strong> in the toolbar (or any media upload field inside a component) to open the <strong>Asset Library</strong>. It's a centralised media store for your entire org — upload once, reuse across any event page without having to re-upload or manage external URLs.</p>
          <p>You can store any of these file types:</p>
          <ul>
            <li><strong>Images</strong> — JPG, PNG, GIF, SVG, WebP — used in Image components, Hero backgrounds, Sponsor logos, Speaker photos</li>
            <li><strong>Videos</strong> — MP4 and other formats — used in Video components and Hero background videos</li>
            <li><strong>Documents</strong> — PDFs and other files you want to link from your page</li>
            <li><strong>Fonts</strong> — custom font files that appear in <strong>Site Settings → Typography → Custom Fonts</strong></li>
          </ul>
          <p>All assets are stored in <strong>Cloudinary</strong> — they do <em>not</em> count against your Salesforce Files storage quota.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Max file size</div>
                <div class="field-desc">100 MB per file</div>
              </div>
              <div class="field-row">
                <div class="field-name">Auto-optimised</div>
                <div class="field-desc">Images are automatically compressed and resized on upload — no manual optimisation needed before using them on your page</div>
              </div>
              <div class="field-row">
                <div class="field-name">Org-wide</div>
                <div class="field-desc">Assets are shared across your entire org — any user in your org can access and reuse them across any event's Page Designer</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Upload your brand logo, event banner, and speaker headshots to the Asset Library before you start building — they'll be available instantly wherever you need a media picker without leaving the designer.</span></div>
        `
      },
      {
        title: 'Device Preview & Publish',
        screenshot: { id: 'ss_4548p0lhk', caption: 'Toolbar right-side: device view buttons, Preview, and Event Page' },
        content: `
          <p>Before publishing, use the <strong>three device buttons</strong> in the top-right toolbar to preview your layout at each breakpoint:</p>
          <ul>
            <li><strong>🖥 Desktop</strong> — full-width canvas (default editor view)</li>
            <li><strong>⬜ Tablet</strong> — ~820px canvas width</li>
            <li><strong>📱 Mobile</strong> — ~390px canvas width</li>
          </ul>
          <p>All sections and components reflow responsively — check each view before going live.</p>
          <p>Click <strong>Preview</strong> to hide all editor chrome and see the page exactly as a visitor would. A floating <strong>"Back to Editor"</strong> pill appears in the corner when you're done.</p>
          <p>The layout <strong>autosaves every 5 seconds</strong>. When you're ready, click <strong>Event Page</strong> in the toolbar to open the live published page in a new tab.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Run the <strong>Accessibility Scan</strong> before clicking Event Page — a quick check for contrast issues and missing alt text protects all your visitors.</span></div>
        `
      }
    ]
  },

  2: {
    id: 'flow-2',
    steps: [

      /* ── LAYOUT CONTAINERS ─────────────────────────────── */
      {
        title: 'Section',
        category: 'Layout',
        screenshot: { id: 'ss_1464dk5ul', caption: 'Section settings panel — Content, Style, and Spacing tabs' },
        content: `
          <p class="comp-category-badge comp-category-badge--layout">Layout Container</p>
          <p>A <strong>Section</strong> is the top-level horizontal row that makes up your page. Every page is a stack of sections. Each section holds one or more columns, which in turn hold your content components.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Section Name</strong> — internal label (not visible to visitors)</li>
            <li><strong>Column Count</strong> — 1 to 6 columns per section</li>
            <li><strong>Layout Preset</strong> — distribution of column widths (50/50, 67/33, 75/25, etc.)</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Background: color, image, video, gradient</li>
            <li>Border: width, style, color, per-side control</li>
            <li>Shadow, corner radius, transparent background</li>
            <li>Gradient border and animated gradient background</li>
          </ul>
          <h4>Responsive Background</h4>
          <p>Each section can have a different background per device. In the Style tab you'll find three background slots — <strong>Desktop</strong>, <strong>Tablet</strong>, and <strong>Mobile</strong>. Only Desktop is required. If Tablet or Mobile backgrounds are left unset, the page automatically falls back to the Desktop background on those screen sizes.</p>
          <p>This lets you do things like use a wide landscape photo on desktop and a tighter portrait crop on mobile — without any custom CSS.</p>
          <h4>Spacing Settings</h4>
          <p>Padding and margin are controlled per side (top, right, bottom, left) with a unit selector (px, %, rem). Spacing is also <strong>device-aware</strong> — each section has independent spacing values for Desktop, Tablet, and Mobile.</p>
          <p>If Tablet or Mobile values are not explicitly set, they inherit from Desktop and are automatically scaled down: <strong>70% on tablet</strong> and <strong>50% on mobile</strong> by default. You can override those at any time by switching to the tablet or mobile device view in the toolbar and adjusting spacing there.</p>
          <p><strong>This same per-device spacing applies to every component on the page.</strong> Whenever you see a Margin or Padding field inside a component's settings panel, you can switch device views and set different values for each breakpoint independently.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The <strong>Header</strong> and <strong>Footer</strong> sections are locked — they cannot be reordered using the drag handle. All other sections can be freely dragged up or down.</span></div>
        `
      },
      {
        title: 'Column',
        category: 'Layout',
        content: `
          <p class="comp-category-badge comp-category-badge--layout">Layout Container</p>
          <p>A <strong>Column</strong> is a vertical subdivision inside a section. Columns hold your content components. Each section can have 1–6 columns, and columns can have their own background, spacing, and alignment independent of the section.</p>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Width / Width Unit</strong> — fixed or percentage width</li>
            <li><strong>Height / Height Unit</strong> — fixed or auto height</li>
            <li><strong>Minimum Width / Minimum Height</strong> — guardrails for responsive scaling</li>
            <li><strong>Component Spacing</strong> — gap between components stacked inside the column</li>
            <li><strong>Self-Alignment</strong> — align the column within its parent section (start, center, end, stretch)</li>
            <li><strong>Responsive Background</strong> — adjust background behavior per device</li>
          </ul>
          <h4>Responsive Spacing</h4>
          <p>Like sections, columns have independent spacing values for <strong>Desktop</strong>, <strong>Tablet</strong>, and <strong>Mobile</strong>. Switch to the tablet or mobile device view in the toolbar and adjust the column's padding or margin — those values only apply to that device size and don't affect the others.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>On tablet and mobile, multi-column sections automatically collapse to fewer columns (and a single column on mobile). You can override any auto-scaled value with a per-viewport-specific setting.</span></div>
        `
      },

      /* ── EVENT-RELATED COMPONENTS ──────────────────────── */
      {
        title: 'About Event',
        category: 'Event-Related',
        screenshot: { id: 'ss_44286xjqb', caption: 'EVENT DETAILS tab in the Add Component panel' },
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>About Event</strong> component displays the event's description field pulled directly from the Salesforce Event record. To update the copy, edit the Event record in Salesforce — no changes needed in Page Designer.</p>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Background Color</strong> — background of the description block</li>
            <li><strong>Text Color</strong> — overrides the global body text color</li>
            <li><strong>Font Weight</strong> — controls text boldness</li>
            <li><strong>Margin / Padding</strong> — controls spacing around the block</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Keep your Salesforce Event description formatted and complete before designing — About Event renders exactly what is in the record, including line breaks and basic formatting.</span></div>
        `
      },
      {
        title: 'Date & Time',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Date &amp; Time</strong> component displays event schedule information pulled from the Salesforce Event record — start date, end date, and session names.</p>
          <h4>Display Controls</h4>
          <ul>
            <li><strong>Show Title</strong> — toggle section heading visibility</li>
            <li><strong>Show Session Names</strong> — display individual session names</li>
            <li><strong>Show Schedule</strong> — display the full agenda</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Font Family, Text Size, Title Size, Text Alignment</li>
            <li>Text Color, Icon Color, Title Color, Time Color</li>
            <li>Background Color, Background Image, Transparent Background</li>
            <li>Glass Mode, Gradient Border</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>If your event spans multiple days, use <strong>Show Session Names</strong> to display each day's sessions separately — much cleaner than a single date range for multi-day conferences.</span></div>
        `
      },
      {
        title: 'Event Banner',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Event Banner</strong> displays a main image for the event. It reads the image from the Event record: the <code>Image URL</code> field for desktop and <code>Thumbnail and Mobile Image URL</code> for mobile. If only the <code>Image URL</code> field is populated, that same image is used across all devices.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Image Width / Height</strong> — set displayed dimensions</li>
            <li><strong>Width Mode</strong> — fixed or responsive width</li>
            <li><strong>Image Fit</strong> — cover, contain, fill, or none</li>
            <li><strong>Image Position</strong> — focal point (center, top, bottom-left, etc.)</li>
            <li><strong>Corner Radius</strong> — rounds image corners</li>
            <li><strong>Opacity</strong> — controls image transparency (useful for overlay effects)</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use a 16:9 image for desktop and a 2:1 image for mobile for best results. Populate both image fields on the Event record so Page Designer can serve the right size per device automatically.</span></div>
        `
      },
      {
        title: 'Event Countdown',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Event Countdown</strong> shows a live timer counting down to the event's start date and time, pulled automatically from the Salesforce Event record. The timer updates in real time for visitors.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Countdown Format</strong> — choose which units to display (days, hours, minutes, seconds)</li>
            <li><strong>Background Color</strong> — container background</li>
            <li><strong>Text Color</strong> — main number text color</li>
            <li><strong>Box Background</strong> — background for each time unit box</li>
            <li><strong>Box Text Color</strong> — color inside the time unit boxes</li>
            <li><strong>Label Color / Label Size</strong> — style the "days", "hours" labels</li>
            <li><strong>Font Size</strong> — size of the countdown numbers</li>
            <li><strong>Corner Radius</strong> — rounds the time unit boxes</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Place a <strong>Register Button</strong> directly below the Countdown to convert urgency into action — visitors who see "3 days left" are primed to register immediately.</span></div>
        `
      },
      {
        title: 'Event Title',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Event Title</strong> renders the event's name (the <code>Name</code> field on the Salesforce Event record) as a prominent heading on the page. To change the displayed title, update the Event record in Salesforce.</p>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Text Color</strong> — sets title color</li>
            <li><strong>Background Color</strong> — sets the background behind the title</li>
            <li><strong>Transparent Background</strong> — removes background fill</li>
            <li><strong>Gradient Text</strong> — applies a gradient color effect to the title text</li>
            <li><strong>Font Weight</strong> — controls boldness</li>
            <li><strong>Margin / Padding</strong> — controls spacing around the title</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Combine <strong>Gradient Text</strong> with a large font size for a bold hero-style event title that instantly communicates your event's brand.</span></div>
        `
      },
      {
        title: 'FAQ',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>FAQ</strong> component displays frequently asked questions in an expandable accordion. Questions and answers are configured directly in the component's settings panel.</p>
          <h4>Data Settings</h4>
          <ul>
            <li><strong>Category Default State</strong> — controls whether categories start expanded or collapsed</li>
            <li><strong>Question Default State</strong> — controls whether individual questions start expanded or collapsed</li>
            <li><strong>Auto Expand</strong> — automatically expands questions on page load</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Question Color / Size and Answer Color / Size</li>
            <li>Icon Color — style the expand/collapse toggle icons</li>
            <li>Background Color, Card Background</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Keep FAQs collapsed by default so visitors can scan questions quickly. Use <strong>Auto Expand</strong> only for short FAQ sections where seeing all answers at once is helpful.</span></div>
        `
      },
      {
        title: 'Session Schedule',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Session Schedule</strong> component displays the full event agenda, grouped by date and time. Data is pulled live from the Session records linked to the Salesforce Event. Adding or updating sessions in Salesforce updates the component on the page automatically.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Show Year</strong> — includes the year in displayed dates (useful for multi-year event series)</li>
            <li><strong>Primary Text Color</strong> — main text color for session names and times</li>
            <li><strong>Secondary Text Color</strong> — secondary styling for supporting text</li>
            <li><strong>Transparent Container</strong> — makes the component background transparent</li>
            <li><strong>Glass Effect</strong> — applies a frosted glass visual style</li>
            <li><strong>Margin / Padding</strong> — controls spacing</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The Session Schedule works best when your Salesforce session records have complete data: session names, start/end times, and speaker assignments. The richer your SF data, the richer this component looks.</span></div>
        `
      },
      {
        title: 'Simple Location',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Simple Location</strong> component displays the venue and address information from the Salesforce Event record in a clean, lightweight format. Ideal for placing location info alongside other details without building a full section around it.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Show Title</strong> — toggle the location section heading</li>
            <li><strong>Title Color / Title Size / Title Icon Color</strong> — style the heading</li>
            <li><strong>Text Color / Text Size</strong> — style the address text</li>
            <li><strong>Button Controls</strong> — configure the optional "View on Map" button (style, label, link behavior)</li>
            <li><strong>Background Color</strong>, Transparent Background, Gradient Border</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Simple Location</strong> in a sidebar column next to your registration form — visitors can confirm the venue without leaving the checkout area.</span></div>
        `
      },
      {
        title: 'Simple Pricing',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Simple Pricing</strong> component displays a lightweight list of ticket options and pricing pulled from Salesforce Ticket records. It is a compact alternative to the full <strong>Ticket Pricing</strong> card grid — good for sidebars or summary sections.</p>
          <h4>Visibility Toggles</h4>
          <ul>
            <li><strong>Hide Guest Tickets</strong> — removes guest ticket types</li>
            <li><strong>Hide Product Tickets</strong> — removes product/add-on tickets</li>
            <li><strong>Hide Donation Tickets</strong> — removes donation options</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Show Title, Title Color / Size / Icon Color</li>
            <li>Text Color / Text Size</li>
            <li>Button Controls — customize the ticket action button</li>
            <li>Background Color, Transparent Background, Gradient Border</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Simple Pricing</strong> in a narrow column alongside event details. Reserve the full <strong>Ticket Pricing</strong> card component for a dedicated pricing section where you want visual emphasis on each ticket tier.</span></div>
        `
      },
      {
        title: 'Speakers',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Speakers</strong> component displays a grid of speaker profile cards — photo, name, title, bio, and social links — pulled from Speaker/Contact records linked to the Salesforce Event. Update speakers in Salesforce and the component reflects the changes immediately.</p>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Text Color / Secondary Text Color</strong> — control name and subtitle colors</li>
            <li><strong>Social Icon Color</strong> — color for Twitter, LinkedIn, etc. icons</li>
            <li><strong>Bio Button Color</strong> — color of the "View Bio" button</li>
            <li><strong>Card Background</strong> — background color for each speaker card</li>
            <li><strong>Transparent Cards</strong> — removes card background fill</li>
            <li><strong>Glass Effect / Gradient Border</strong> — visual effects for cards</li>
            <li><strong>Corner Radius</strong> — rounds card edges</li>
            <li><strong>Background Color / Background Image</strong> — section-level background</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Make sure Speaker records in Salesforce have profile photos uploaded — the cards look significantly better with headshots than with placeholder avatars.</span></div>
        `
      },
      {
        title: 'Sponsors',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Sponsors</strong> component displays sponsor logos organized by tier, pulled from Sponsor/Account records linked to the Salesforce Event. Supports both a static grid layout and a scrolling carousel.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Display Mode</strong> — List (static grid) or Carousel (auto-scrolling)</li>
            <li><strong>Tier Font Size / Tier Color</strong> — style the sponsor tier labels (e.g. "Gold", "Silver")</li>
            <li><strong>Logo Shadow</strong> — adds a drop shadow to sponsor logos</li>
            <li><strong>Glass Effect / Corner Radius</strong> — visual effects</li>
            <li><strong>Background Color</strong>, Transparent Background</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Carousel</strong> mode when you have many sponsors at similar tiers — it keeps the section compact while still giving every logo equal visibility.</span></div>
        `
      },
      {
        title: 'Ticket Pricing',
        category: 'Event-Related',
        content: `
          <p class="comp-category-badge comp-category-badge--event">Event-Related</p>
          <p>The <strong>Ticket Pricing</strong> component displays full ticket cards with pricing, descriptions, images, and a register action — pulled from Ticket records linked to the Salesforce Event. It provides the richest visual presentation of your ticket tiers.</p>
          <h4>Visibility Toggles</h4>
          <ul>
            <li>Hide Quantity Remaining, Hide Ticket Images, Hide Ticket Description</li>
            <li>Hide Guest / Product / Donation ticket types individually</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Background Color, Background Image, Transparent Background, Glass Effect</li>
            <li>Corner Radius, 3D Effect, Gradient Border</li>
            <li>Button Style, Secondary Color</li>
            <li>Card Content Background, Transparent Content, Read More Color</li>
            <li>Text Color, Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Enable <strong>3D Effect</strong> and <strong>Gradient Border</strong> together for premium-looking ticket cards that stand out — especially effective for VIP or early-bird tiers you want to highlight.</span></div>
        `
      },

      /* ── PAGE DESIGNER COMPONENTS ──────────────────────── */
      {
        title: 'Button',
        category: 'Page Designer',
        screenshot: { id: 'ss_1293ccg2p', caption: 'BASIC components tab in the Add Component panel' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Button</strong> component is a standalone, clickable call-to-action. Use it anywhere you want to drive visitors to a link — external URLs, anchors on the page, or other resources.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Button Label</strong> — text displayed on the button</li>
            <li><strong>Button Link</strong> — URL the button navigates to</li>
            <li><strong>Open in New Tab</strong> — opens the link without leaving the event page</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Button Style</strong> — Primary, Secondary, or Accent (inherits colors from Site Settings)</li>
            <li><strong>Button Icon</strong> — icon displayed alongside the label</li>
            <li>Icon position, icon size, and spacing controls</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>anchor links</strong> (e.g. <code>#register</code>) in the Button Link field to scroll visitors to a specific section on the same page — no page reload needed.</span></div>
        `
      },
      {
        title: 'Contact Us',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Contact Us</strong> component is a call-to-action block with a title, subtitle, and button. It is designed for pages where you want to give visitors an easy way to reach the event organizer or ask questions.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Title</strong> — main heading text</li>
            <li><strong>Subtitle</strong> — supporting description below the title</li>
            <li><strong>Button Text</strong> — call-to-action label</li>
            <li><strong>Button Style</strong> — visual variation (Primary / Secondary / Accent)</li>
            <li><strong>Button Alignment</strong> — left, center, or right</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Title Color, Subtitle Color, Label Color</li>
            <li>Margin / Padding</li>
          </ul>
        `
      },
      {
        title: 'Footer',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Footer</strong> component sits at the bottom of the page and provides branding, navigation links, social media icons, and a copyright statement. All content is manually configured in the settings panel — no Salesforce data is pulled.</p>
          <p>Only one Footer is allowed per page layout.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Logo Text / Logo Image / Logo Link</strong> — brand identity at the bottom of the page</li>
            <li><strong>Description</strong> — short organization or event description</li>
            <li><strong>Link Columns</strong> — groups of labeled links (e.g. "Venue", "Contact", "Accessibility")</li>
            <li><strong>Social Links</strong> — social media icon links</li>
            <li><strong>Copyright</strong> — copyright notice text</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Background Color, Text Color, Transparent Background, Glass Effect</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use the same logo in both Header and Footer for brand consistency. If you update the logo image URL later, remember to update it in both components.</span></div>
        `
      },
      {
        title: 'Header — Visibility',
        category: 'Page Designer',
        screenshot: { id: 'f3-header-visibility', caption: 'Header component — Visibility settings tab' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p class="field-section-intro">The Header component adds a navigation bar to the top of your page. Only one Header is allowed per page — keep it in its own section at the very top of the canvas.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Sticky Header</div>
                <div class="field-desc">The header follows the visitor as they scroll down the page, keeping navigation always accessible. Recommended for long pages with multiple sections.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Auto-hide on Scroll</div>
                <div class="field-desc">Header slides out of view when scrolling down and reappears when scrolling up. Saves viewport space while keeping the nav reachable. Works best combined with Sticky.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Glass Effect</div>
                <div class="field-desc">Applies a frosted-glass backdrop blur behind the header. Creates depth on pages with colorful or image-heavy backgrounds without fully hiding the content behind it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Mobile Bottom Bar</div>
                <div class="field-desc">On mobile viewports, moves the nav links to a fixed bottom tab bar (the familiar iOS/Android pattern). The top header keeps the logo and buttons; navigation moves to the bottom edge.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hide Desktop Navigation Menu</div>
                <div class="field-desc">Removes the nav links from the desktop header entirely. Useful when the page is a single-screen registration form and you don't need navigation.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hide Language Selector</div>
                <div class="field-desc">Removes the language switcher from the header. Enable this if your event is single-language and you want a cleaner header.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hide the Back to Event Group</div>
                <div class="field-desc">Removes the "← Back" link that appears when the event belongs to a group. Useful when you want visitors to stay on the event page without a way back to the group listing.</div>
              </div>
            </div>
          </div>
        `
      },
      {
        title: 'Header — Navigation',
        category: 'Page Designer',
        screenshot: { id: 'f3-header-navigation', ext: 'png', caption: 'Header Navigation tab — Label, URL, Icon picker, Available sections & tabs dropdown' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p class="field-section-intro">Each nav item has a <strong>Label</strong>, a <strong>URL</strong>, and an optional <strong>Icon</strong>. Click <strong>+</strong> in the Navigation panel to add items, then click the edit icon on any item to expand its fields.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Label</div>
                <div class="field-desc">The visible text for the nav item — e.g. "Home", "Schedule", "Tickets". Keep labels short so they fit comfortably on tablet viewports.</div>
              </div>
              <div class="field-row">
                <div class="field-name">URL — Link to a page section</div>
                <div class="field-desc">Set a <strong>Section ID</strong> on the target section (Section → Content tab → "Section ID" field, e.g. <code>register</code>), then enter <code>#register</code> as the URL. Clicking scrolls the visitor to that section.</div>
              </div>
              <div class="field-row">
                <div class="field-name">URL — Link to a tab inside a Tabs component</div>
                <div class="field-desc">Use the format <code>#section-name:tab-id</code> — for example <code>#agenda:schedule</code>. The Tabs component must have a matching Section ID and tab ID. Clicking activates that tab and scrolls to it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">URL — Link to an external website</div>
                <div class="field-desc">Paste any full URL (e.g. <code>https://yoursite.com</code>). Use <strong>Open in new tab</strong> to avoid navigating visitors away from the event page.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Available sections &amp; tabs</div>
                <div class="field-desc">A dropdown that lists every section with a Section ID and every tab on the page. Select one to auto-fill the URL field with the correct anchor format — no need to type it manually.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Icon</div>
                <div class="field-desc">Each nav item can display a leading icon from the icon picker. Icons appear in the desktop nav, the hamburger dropdown, and the mobile bottom bar. Use them to make links quicker to scan.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Set as Active</div>
                <div class="field-desc">Marks this nav item as the currently active page link (applies the active highlight style). Useful for multi-page sites where you want to indicate which section the visitor is on.</div>
              </div>
            </div>
          </div>
        `
      },
      {
        title: 'Header — Logo',
        category: 'Page Designer',
        screenshot: { id: 'f3-header-logo', ext: 'png', caption: 'Header component — Logo settings tab' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p class="field-section-intro">The Logo section controls what appears on the left side of the header. You can use an image, text, or both together.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Logo Image URL</div>
                <div class="field-desc">Upload an image file or paste a URL. SVG and PNG with transparent backgrounds work best — they adapt cleanly to both light and dark header backgrounds without a white box around them. Recommended size: 240 × 80 px (3:1 ratio).</div>
              </div>
              <div class="field-row">
                <div class="field-name">Logo Text</div>
                <div class="field-desc">Text displayed if no logo image is set, or alongside the image. Styled with your theme's heading font and primary color. Useful as a fallback or for text-based brand marks.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Logo Link URL</div>
                <div class="field-desc">URL the logo navigates to when clicked. Leave empty to link to the top of the event page, or enter your company homepage URL to let visitors navigate back to your main site.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Remove Logo</div>
                <div class="field-desc">When enabled, the event name will be displayed instead of the logo (unless Hide Event Name is also on).</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hide Event Name</div>
                <div class="field-desc">When enabled, the live event title is not shown in the header — including when the logo is removed or no logo image or text is set.</div>
              </div>
            </div>
          </div>
        `
      },
      {
        title: 'Header — Buttons',
        category: 'Page Designer',
        screenshot: { id: 'f3-header-buttons', ext: 'png', caption: 'Header component — Buttons settings tab' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p class="field-section-intro">The Buttons section adds one or two CTA buttons directly inside the header bar — separate from the nav items and always visible.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Register Button (toggle)</div>
                <div class="field-desc">Show or hide a prominent CTA button in the header. Link it to <code>#register</code> (the Section ID of your Checkout Form section) so clicking scrolls visitors directly to registration without leaving the page.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Register Button Label</div>
                <div class="field-desc">Text on the button. Short labels work best — "Register", "Get Tickets", "Join Us", or "Buy Tickets" are common choices that fit comfortably in the header.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Register Button Variation</div>
                <div class="field-desc">Choose <strong>Primary</strong>, <strong>Secondary</strong>, <strong>Accent</strong>, <strong>Gradient</strong>, or <strong>Full-width</strong>. Primary is the most visually prominent and recommended for a single register CTA.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Enable Secondary Button</div>
                <div class="field-desc">Adds a second button alongside the Register button — useful for "Learn More" paired with "Register". Style it as Secondary to create a clear visual hierarchy.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Button URL / Available sections &amp; tabs</div>
                <div class="field-desc">Link the secondary button to a page section, a tab, or an external URL using the same anchor format as nav items (<code>#section-name</code> or <code>#section-name:tab-id</code>).</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Link the Register button to <code>#register</code> so clicking it scrolls visitors directly to your Checkout Form without leaving the page.</span></div>
        `
      },
      {
        title: 'Header — Mobile Navigation',
        category: 'Page Designer',
        screenshot: { id: 'f2-header-mobile-nav', ext: 'png', caption: 'Mobile bottom navigation bar — Register button, Home/About/Tickets nav items with icons' },
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p class="field-section-intro">On mobile viewports, the Header can switch from a top hamburger menu to a <strong>fixed bottom navigation bar</strong> — the familiar iOS/Android pattern that keeps key actions one thumb-tap away.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Enable mobile bottom navigation <span style="font-size:11px;color:#7c3aed;font-weight:600;">(Visibility tab)</span></div>
                <div class="field-desc">The toggle that activates the bottom bar. When <strong>on</strong>, nav items and the Register button move to a fixed tab bar pinned to the bottom edge of the screen on mobile. The top of the header retains only the logo and language selector — no hamburger icon.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hide navigation icons on desktop <span style="font-size:11px;color:#7c3aed;font-weight:600;">(Visibility tab)</span></div>
                <div class="field-desc">Icons assigned to nav items still appear in the mobile bottom bar even when this toggle hides them on desktop. This lets you show a clean text-only nav on desktop while keeping the icon-driven bottom bar on mobile.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Nav item icons</div>
                <div class="field-desc">Each nav item can have its own icon (set in the Navigation tab → Icon picker). In the mobile bottom bar, the icon appears above the label — this is the primary visual that visitors tap. Choose icons that match the destination: a house for Home, a calendar for Schedule, a ticket for Tickets.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Register button in the bottom bar</div>
                <div class="field-desc">When the bottom bar is active, the Register button moves into the bar as a full-width prominent button above the nav items (as shown in the screenshot). It remains visually distinct from the nav tabs so visitors always know where to go to sign up.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Active item highlight</div>
                <div class="field-desc">The currently active nav item is underlined and tinted with your primary color. Set which item is active using the <strong>Set as Active</strong> toggle on each nav item (Navigation tab).</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Always assign icons to your nav items before enabling the mobile bottom bar — the icon is the main visual cue on small screens, and text-only bottom bars feel incomplete.</span></div>
        `
      },
      {
        title: 'Hero',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Hero</strong> component is a large, immersive opening section with a headline, supporting text, background (image or video), and call-to-action buttons. It is typically the first content visitors see on the event page.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Title</strong> — main headline text</li>
            <li><strong>Description</strong> — supporting paragraph</li>
            <li><strong>Primary Button</strong> — label, link, style, icon, open-in-new-tab</li>
            <li><strong>Secondary Button</strong> — optional second action</li>
            <li><strong>Register Button</strong> — dedicated registration CTA with nested configuration</li>
            <li><strong>Background Image / Video</strong> — autoplay, loop, mute controls for video</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Title Color, Description Color, Heading Size, Paragraph Size</li>
            <li>Font Family, Font Weight</li>
            <li>Gradient Title, Gradient Description</li>
            <li>Glass Effect, Transparent Background</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>A background video set to autoplay + loop + mute creates a cinematic first impression. Keep the video short (15–30 seconds) so it loops seamlessly without becoming distracting.</span></div>
        `
      },
      {
        title: 'Icon',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Icon</strong> component displays a single icon from the built-in icon library. Use it as a standalone visual accent, a status indicator, or a decorative element within a column.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Icon</strong> — select from the built-in icon picker</li>
            <li><strong>Icon Color</strong> — color of the icon</li>
            <li><strong>Icon Size</strong> — controls the display size</li>
            <li><strong>Background Color</strong> — background behind the icon (e.g. a circle)</li>
            <li><strong>Transparent Background</strong> — removes the background fill</li>
            <li><strong>Margin / Padding</strong> — controls spacing</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use a large centered Icon at the top of a column to give each column in a multi-column section a distinct visual identity — much more scannable than text headers alone.</span></div>
        `
      },
      {
        title: 'Icon List',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Icon List</strong> component displays a list of items, each with a leading icon and a text label. It is ideal for "what's included", "why attend", or feature-comparison sections.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>List Items</strong> — collection of text + icon pairs</li>
            <li><strong>Item Text</strong> — label for each item</li>
            <li><strong>Item Icon</strong> — icon for each item (can vary per item)</li>
            <li><strong>Layout Behavior</strong> — controls whether the list is vertical or horizontal</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Text Color</strong> — color of each item's label</li>
            <li><strong>Icon Color</strong> — color of each item's icon</li>
            <li><strong>Font Weight</strong> — controls text boldness</li>
            <li><strong>Item Gap</strong> — spacing between list items</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Icon Lists are far more scannable than paragraphs. A list like "✓ 3 full days · ✓ 50+ speakers · ✓ Networking lunch included" communicates value faster than a sentence does.</span></div>
        `
      },
      {
        title: 'Icon-Text Group',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Icon-Text Group</strong> component combines an icon, a heading, and a supporting description in a single block. Use it to present features, benefits, or highlights in a structured, visually consistent format.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Icon</strong> — icon displayed at the top of the block</li>
            <li><strong>Heading</strong> — title text for the group</li>
            <li><strong>Description</strong> — supporting body text</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Icon Color / Icon Size</li>
            <li>Heading Color, Text Color</li>
            <li>Background Color, Transparent Background</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Place three Icon-Text Group components side-by-side in a 3-column section to create a clean "value props" row — a classic layout that works for virtually any event type.</span></div>
        `
      },
      {
        title: 'Image',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Image</strong> component displays a static image. Use it for sponsor logos, event photos, speaker headshots, venue shots, or any custom graphic on the page.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Image URL</strong> — source of the image (upload from Asset Library or paste a URL)</li>
            <li><strong>Alt Text</strong> — accessibility description (required for the Accessibility Scan to pass)</li>
            <li><strong>Width / Height / Width Mode</strong> — display dimensions and responsive behavior</li>
            <li><strong>Image Fit</strong> — cover, contain, fill, or none</li>
            <li><strong>Image Position</strong> — focal point (center, top, left, etc.)</li>
            <li><strong>Corner Radius</strong> — rounds image edges</li>
            <li><strong>Opacity</strong> — adjusts transparency</li>
            <li><strong>3D Effect</strong> — adds a depth tilt effect on hover</li>
            <li>Background Color, Transparent Background</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Always fill in <strong>Alt Text</strong>. The Accessibility Scan flags images without it, and screen reader users rely on it to understand image content.</span></div>
        `
      },
      {
        title: 'Info Cards',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Info Cards</strong> component displays structured cards, each with an icon, title, description, and optional count. Use it to highlight key stats, features, or highlights in a visually consistent grid.</p>
          <h4>Content Settings (per card)</h4>
          <ul>
            <li><strong>Card Type</strong> — defines card format</li>
            <li><strong>Card Icon</strong> — icon displayed on the card</li>
            <li><strong>Card Title</strong> — heading text</li>
            <li><strong>Card Description</strong> — body text</li>
            <li><strong>Card Count</strong> — numeric value (e.g. "500+" attendees)</li>
            <li><strong>Layout Behavior</strong> — controls how cards are arranged in the grid</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Text Color, Icon Color / Size, Count Color</li>
            <li>Card Background, Border Color / Style, Corner Radius</li>
            <li>Remove Shadow, Gradient Border, Icon Animation, Glass Effect, Transparent Background</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Enable <strong>Icon Animation</strong> to make the icons animate on scroll — a small detail that adds polish and encourages visitors to engage with the stats section.</span></div>
        `
      },
      {
        title: 'Paragraph',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Paragraph</strong> component displays a simple block of plain text. Use it for short body copy, descriptions, or any text that doesn't need the full formatting power of Rich Text.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Text Content</strong> — the paragraph text displayed on the page</li>
            <li><strong>Text Color</strong> — overrides the global body text color</li>
            <li><strong>Gradient Text</strong> — applies gradient color to the paragraph text</li>
            <li><strong>Font Weight</strong> — controls text boldness</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Paragraph</strong> for short, single-purpose text blocks. For multi-paragraph formatted content with links, bullet points, or HTML — use <strong>Rich Text</strong> instead.</span></div>
        `
      },
      {
        title: 'Rich Text',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Rich Text</strong> component displays fully formatted HTML content using a WYSIWYG editor. It is the most flexible text component — use it for multi-paragraph copy, bulleted lists, inline links, tables, or any content that needs HTML formatting.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>HTML Content</strong> — enter and format content in the WYSIWYG editor, or paste raw HTML</li>
            <li><strong>Text Color</strong> — color applied to the content</li>
            <li><strong>Gradient Text</strong> — applies gradient styling to text</li>
            <li><strong>Font Weight</strong> — controls boldness</li>
            <li><strong>Margin / Padding</strong> — controls spacing around the content block</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Rich Text is your best choice when you need links inside a block of copy, or when you want to paste formatted content from a document. For simple body text without links or lists, <strong>Paragraph</strong> is faster to work with.</span></div>
        `
      },
      {
        title: 'Social Share Button',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Social Share Button</strong> lets visitors share the event page on their social media platforms with one click. The share URL is automatically derived from the current page, so no configuration is needed beyond styling.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Button Style</strong> — Primary, Secondary, or Accent (inherits from Site Settings)</li>
            <li><strong>Button Icon</strong> — icon representing the social platform</li>
            <li>Icon position, icon size controls</li>
            <li><strong>Share Behavior</strong> — enables the social sharing functionality</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Place the Social Share Button near the top of the page (in the Hero or just below it) to capture visitors who are excited about the event before they scroll to checkout.</span></div>
        `
      },
      {
        title: 'Tabs',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Tabs</strong> component organizes page content into switchable tab panels. Each tab can contain multiple components arranged in a multi-column layout. Use Tabs to present a large amount of content (Schedule, Speakers, FAQ, Pricing) without overwhelming visitors with a very long page.</p>
          <p><strong>Layout rules:</strong> Tabs cannot be nested inside other Tabs. The Header and Footer components cannot be placed inside a Tabs component.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Tab Items</strong> — add, remove, and reorder tabs</li>
            <li><strong>Tab Label</strong> — text displayed on each tab</li>
            <li><strong>Tab Icon</strong> — optional icon shown alongside the label</li>
            <li><strong>Tab Management</strong> — assign components to specific tabs from the tab settings panel</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li><strong>Tab Variation</strong> — Default, Vertical, or Ink Bar style</li>
            <li>Background Color, Hover Background Color</li>
          </ul>
          <h4>Keyboard Navigation</h4>
          <p>Arrow keys cycle through tabs, Home/End jump to first/last tab, Escape closes overflow menus — fully accessible by default.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The <strong>Tabbed Conference</strong> template is pre-built with a Tabs component covering Schedule, Speakers, FAQ, Pricing, and more — the fastest starting point for multi-session events.</span></div>
        `
      },
      {
        title: 'Title',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Title</strong> component displays a standalone heading element. Use it to introduce sections, label content blocks, or create visual hierarchy on the page.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Title Text</strong> — content of the heading</li>
            <li><strong>Text Color</strong> — overrides the global heading color</li>
            <li><strong>Icon</strong> — optional icon displayed alongside the title</li>
            <li><strong>Background Color</strong> — background behind the title</li>
            <li><strong>Transparent Background</strong> — removes background fill</li>
            <li><strong>Gradient Text</strong> — applies gradient color to the title text</li>
            <li><strong>Font Weight</strong> — controls boldness</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Gradient Text</strong> on section titles to add a branded color effect that ties visually to your Primary and Accent colors — without changing the heading structure of the page.</span></div>
        `
      },
      {
        title: 'Video',
        category: 'Page Designer',
        content: `
          <p class="comp-category-badge comp-category-badge--basic">Page Designer</p>
          <p>The <strong>Video</strong> component embeds a video from YouTube, Vimeo, or a direct URL. Use it for event recaps, speaker previews, sponsor videos, or promotional content.</p>
          <h4>Content Settings</h4>
          <ul>
            <li><strong>Video URL</strong> — YouTube, Vimeo, or direct video link</li>
            <li><strong>Width / Width Mode</strong> — fixed pixel width or responsive (Full Width fills the column)</li>
            <li><strong>Autoplay / Loop / Muted</strong> — playback behavior (note: autoplay requires muted in most browsers)</li>
            <li><strong>Controls</strong> — show or hide the video player controls</li>
          </ul>
          <h4>Overlay Settings</h4>
          <ul>
            <li><strong>Overlay Mode</strong> — shows a cover image before the video plays</li>
            <li><strong>Overlay Image</strong> — thumbnail shown before playback starts</li>
            <li><strong>Overlay Text / Overlay Text Color</strong> — optional text on the overlay</li>
          </ul>
          <h4>Style Settings</h4>
          <ul>
            <li>Background Color, Transparent Background</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Go to the <strong>Styling tab</strong> and select <strong>Full Width (100%)</strong> to make the video fill the entire column — especially impactful in a 2-column layout where the video anchors one side and registration details anchor the other.</span></div>
        `
      },

      /* ── CHECKOUT COMPONENTS ───────────────────────────── */
      {
        title: 'Checkout Form',
        category: 'Checkout',
        screenshot: { id: 'ss_5630bxk4n', caption: 'REGISTRATION tab with Checkout Form and Register Button' },
        content: `
          <p class="comp-category-badge comp-category-badge--reg">Checkout</p>
          <p>The <strong>Checkout Form</strong> component embeds the full registration and ticket purchase experience directly on the event page. It automatically pulls ticket options, fields, and pricing from the Salesforce Event record — no manual data entry is needed.</p>
          <p><strong>Important:</strong> The Checkout Form can only be used for events with a single free ticket. For events with paid tickets or multiple ticket types, use the <strong>Register Button</strong> component instead.</p>
          <h4>Style Settings</h4>
          <ul>
            <li>Background Color, Background Image, Transparent Background, Glass Mode</li>
            <li><strong>Header Image / Header Gradient / Header Glass Effect</strong> — style the top of the form</li>
            <li><strong>Hide Header</strong> — removes the form header entirely</li>
            <li><strong>Hide Ticket Name</strong> — removes the ticket title from the form</li>
            <li>Question Text Color, Field Background Color</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Set the containing Section's ID (in Section → Content → Section ID) to <code>register</code>, then link your Header's Register button to <code>#register</code> — visitors scroll directly to the form with one click.</span></div>
        `
      },
      {
        title: 'Register Button',
        category: 'Checkout',
        content: `
          <p class="comp-category-badge comp-category-badge--reg">Checkout</p>
          <p>The <strong>Register Button</strong> is a dedicated CTA that redirects attendees to the Dynamic UI checkout experience when clicked. Use it as the primary registration action for events with paid tickets, multiple ticket types, or complex checkout flows — anything beyond a single free ticket.</p>
          <h4>Settings</h4>
          <ul>
            <li><strong>Button Style</strong> — Primary, Secondary, or Accent (inherits from Site Settings)</li>
            <li><strong>Button Icon</strong> — icon displayed inside the button</li>
            <li>Icon position, icon size controls</li>
            <li>Margin / Padding</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Place the Register Button above the fold and again near the bottom of the page. Visitors who read through all your content before deciding to register shouldn't have to scroll back up to find the button.</span></div>
        `
      }

    ]
  },

  3: {
    id: 'flow-3',
    steps: [
      {
        title: 'Open the Theme Wizard',
        screenshot: { id: 'ss_0235srkis', caption: 'Site Settings → Color Scheme with Theme Creator button visible' },
        content: `
          <p>Before adding any content, let's give your page your brand's look and feel. Open <strong>Site Settings</strong> (sliders icon in the toolbar), then click <strong>Color Scheme</strong> in the left nav, then click the <strong>Theme Creator</strong> button at the top.</p>
          <p>The Theme Wizard ("Smart fill across Site Settings") opens in a modal. It takes just a few brand colors and fills in all derived tokens automatically — hover states, gradients, semantic colors.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>You only need 4 inputs: Background, Text on base, Primary color, and Accent color. The wizard handles everything else — you can fine-tune individual tokens afterwards.</span></div>
        `
      },
      {
        title: 'Set Brand Colors in the Theme Wizard',
        screenshot: { id: 'ss_1517kxvmc', caption: 'Theme Wizard filled with brand colors ready to save' },
        content: `
          <p>Fill in the wizard fields:</p>
          <table class="icon-table">
            <thead><tr><th></th><th>Field</th><th>What it sets</th></tr></thead>
            <tbody>
              <tr><td></td><td><strong>Theme name</strong></td><td>Unique identifier (lowercase letters only, e.g. <code>mybrand</code>)</td></tr>
              <tr><td></td><td><strong>Background</strong></td><td>Page base background — use your lightest brand color or <code>#ffffff</code></td></tr>
              <tr><td></td><td><strong>Text on base</strong></td><td>Default body text — <code>#1f2937</code> (near-black) works for light backgrounds</td></tr>
              <tr><td></td><td><strong>Primary</strong></td><td>Main action color — buttons, links, highlights</td></tr>
              <tr><td></td><td><strong>Accent</strong></td><td>Secondary accent — complementary brand color</td></tr>
              <tr><td></td><td><strong>Button radius</strong></td><td><code>0.375rem</code> for subtle, <code>1rem</code> for pill-shaped</td></tr>
            </tbody>
          </table>
          <p>Click <strong>"Save &amp; Auto-Fill the rest"</strong>. The wizard propagates all tokens across Site Settings.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Your saved theme appears under <strong>Your Org Themes</strong> and can be reused for any future event — you'll never need to set up the same brand colors twice.</span></div>
        `
      },
      {
        title: 'Choose Your Building Approach',
        screenshot: { id: 'ss_273560h86', caption: 'BT Templates — 8 pre-built templates ready to use as a starting point' },
        content: `
          <p class="field-section-intro">With your theme set, it's time to build the page. You have two starting points — pick the one that matches how much control you want from the start.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0;">
            <div style="border:2px solid var(--primary,#7C3AED);border-radius:12px;padding:20px;background:var(--gray-50,#f9fafb);">
              <div style="font-size:32px;margin-bottom:8px;">⊞</div>
              <div style="font-weight:700;font-size:15px;margin-bottom:6px;color:var(--primary,#7C3AED);">Choose a Template</div>
              <div style="font-size:13px;color:var(--gray-600,#4b5563);line-height:1.5;">Start from a fully-built layout. Pick one of 8 pre-designed templates, apply your theme, and customize from there. Best if you want a complete structure quickly.</div>
            </div>
            <div style="border:2px solid var(--gray-300,#d1d5db);border-radius:12px;padding:20px;background:var(--gray-50,#f9fafb);">
              <div style="font-size:32px;margin-bottom:8px;">✦</div>
              <div style="font-weight:700;font-size:15px;margin-bottom:6px;">Start from Scratch</div>
              <div style="font-size:13px;color:var(--gray-600,#4b5563);line-height:1.5;">Build section by section, adding only the components you need. Best if you have a specific layout in mind or want full control from the first pixel.</div>
            </div>
          </div>
          <p>The next two steps walk through each option — read both, then follow the path that fits your event.</p>
        `
      },
      {
        title: 'Option A — Choose a Template',
        screenshot: { id: 'f3-template-imported', ext: 'png', caption: 'Tabbed Conference template applied — canvas populated with Tabs, video, Date & Time, Pricing, Location, About, and Footer sections' },
        belowScreenshot: `
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span><strong>Applying a template overwrites your Site Settings — including the theme you just set with the Theme Wizard.</strong> After clicking "Use This Template", go to <strong>Site Settings → Theme → Your Org Themes</strong> and re-select your saved theme. It was saved during the wizard step, so it will always be there.</span>
          </div>
          <div class="pro-tip">
            <span class="pro-tip__icon">💡</span>
            <span>To edit any element, just <strong>click it on the canvas</strong> — the corresponding settings panel auto-focuses in the right sidebar. Click a component to edit that component, a column to adjust column settings, a section to control the section layout, or a tab to manage tab content.</span>
          </div>
        `,
        content: `
          <p>Click the <strong>⊞ grid icon</strong> (Select Template) in the toolbar, pick a layout from the <strong>BT Templates</strong> tab, and click <strong>Use This Template</strong>. Three things happen immediately:</p>
          <ol>
            <li><strong>The layout JSON is imported</strong> — every section, column, and component is placed on the canvas exactly as designed in the template.</li>
            <li><strong>The theme is updated</strong> — the template's built-in theme is applied to Site Settings. Components like Tabs, Speakers, and Pricing cards automatically reflect the new color tokens.</li>
            <li><strong>Event data auto-wires</strong> — components like Date &amp; Time, Pricing, Speakers, and Session Schedule immediately pull live data from your Salesforce event record — no manual linking needed.</li>
          </ol>
          <p><strong>Available templates:</strong></p>
          <ul style="font-size:13px;line-height:2;">
            <li><strong>Bold Conference</strong> — Hero · Speakers · Schedule · Tickets · Venue · FAQ · CTA</li>
            <li><strong>Tabbed Conference</strong> — Tabbed layout with Schedule · Speakers · FAQ · Pricing · Sponsors</li>
            <li><strong>AI Event / Webinar</strong> — Info Cards · Schedule · Speakers · Pricing · Location · FAQ</li>
            <li><strong>Healthcare Research Conference</strong> — Schedule · Speakers · Pricing · Location · About · FAQ</li>
            <li><strong>Simple Checkout Modern Design</strong> — Image · Sessions · Checkout form · Sponsors · FAQ</li>
            <li><strong>Charity Gala</strong> — Hero imagery · Sponsors · Info cards · Schedule · Location</li>
            <li><strong>Octoberlights Fest</strong> — Pricing · Sponsors · Schedule · Info Cards · Speakers · FAQ</li>
          </ul>
        `
      },
      {
        title: 'Edit and Re-arrange the Existing Template',
        screenshot: { id: 'f3-component-editing', ext: 'png', caption: 'Event Title component selected — settings panel with font sizing, gradient text, and text alignment controls' },
        belowScreenshot: `
          <div class="step-card__screenshot" data-ss="f3-copy-settings" data-ext="png" data-caption="Component settings menu — Copy content and settings, Copy settings & styles only, Paste component settings" role="button" tabindex="0" aria-label="Click to enlarge: Component copy settings menu" style="margin-top:0;">
            <img src="screenshots/f3-copy-settings.png" alt="Component settings menu showing Copy content and settings, Copy settings and styles only, and Paste component settings options" loading="lazy" style="border-radius:8px;width:100%;">
            <div class="step-card__screenshot-caption">The ⋮ menu in the top-right of any component settings panel</div>
            <button class="step-card__screenshot-zoom" tabindex="-1" aria-hidden="true">⤢ Enlarge</button>
          </div>
          <div class="pro-tip">
            <span class="pro-tip__icon">💡</span>
            <span>The Copy / Paste Settings workflow is also useful for reusing a styled component across multiple sections — configure it once, then paste the settings into as many copies as you need.</span>
          </div>
        `,
        content: `
          <p>Click any component, column, section, or tab on the canvas and its settings panel auto-focuses in the right sidebar. From there you have full control over content, style, and spacing.</p>
          <h4>Rearranging components</h4>
          <ul>
            <li><strong>Drag within a section</strong> — grab the drag handle (the grid icon that appears when a component is hovered or selected) and drag it up or down to reorder components within the same column or section.</li>
            <li><strong>Duplicate</strong> — use the <strong>Duplicate</strong> button at the bottom right of the settings panel to copy a component, column, or section in place. Works for all three levels: components, columns, and sections.</li>
            <li><strong>Delete</strong> — the <strong>Delete</strong> button (red, bottom right of the settings panel) removes the selected element. Sections and columns remove everything nested inside them.</li>
          </ul>
          <h4>Copying settings between components</h4>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span><strong>Known limitation: components cannot be dragged across sections.</strong> If you need to move a component to a different section, add a new component of the same type in the target section, then use <strong>Copy Settings</strong> (the ⋮ icon in the top-right corner of the component settings panel) on the original, and <strong>Paste Settings</strong> on the new one. This transfers all configuration — content, style, and spacing — without retyping anything.</span>
          </div>
        `
      },
      {
        title: 'Option B — Start from Scratch',
        screenshot: { id: 'f3-scratch-empty-canvas', ext: 'png', caption: 'Empty canvas — "Add New Section" and "Browse Templates" CTAs with Page Structure panel on the right' },
        belowScreenshot: `
          <div class="pro-tip">
            <span class="pro-tip__icon">💡</span>
            <span>You can switch to a template at any time via <strong>Site Settings → Select Template</strong> — it replaces the current canvas. So it's safe to start from scratch, experiment, and then switch to a template if you decide you want a pre-built structure after all.</span>
          </div>
        `,
        content: `
          <p>Starting from scratch gives you a blank canvas. You add each section and component yourself — full control over structure and content from the beginning.</p>
          <p><strong>How to build from scratch:</strong></p>
          <ol>
            <li>On an empty canvas, click <strong>Add New Section</strong> (the button in the center or at the bottom of the canvas).</li>
            <li>In the <strong>Section → Content</strong> tab on the right sidebar, set the <strong>Column Distribution</strong> — how many columns and what width split (1 column full-width, 2 columns 50/50, 67/33, etc.).</li>
            <li>Click <strong>Empty — Add component</strong> inside any column to open the component selector. Browse BASIC, EVENT DETAILS, or REGISTRATION categories, or search by name.</li>
            <li>Repeat: add another section at the bottom, set its columns, add components.</li>
          </ol>
          <p><strong>Recommended section order for a first page:</strong></p>
          <ul style="font-size:13px;line-height:2;">
            <li><strong>Section 1</strong> — Header component (navigation bar)</li>
            <li><strong>Section 2</strong> — Hero or Event Banner (opening visual)</li>
            <li><strong>Section 3</strong> — 2-column: event details left, Checkout Form right</li>
            <li><strong>Section 4</strong> — Speakers or Schedule (optional)</li>
            <li><strong>Section 5</strong> — Footer component</li>
          </ul>
        `
      },
      {
        title: 'Add a Header',
        screenshot: { id: 'f3-header-overview', ext: 'png', caption: 'Header component selected — Navigation, Style, and Spacing tabs in the settings panel' },
        content: `
          <p>Add a Header by creating a section at the very top of your canvas, then clicking <strong>Empty — Add component → BASIC → Header</strong>.</p>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;margin-bottom:16px;">
            <span class="pro-tip__icon">⚠️</span>
            <span><strong>Only one Header is allowed per page.</strong> Adding a second Header replaces the existing one. Keep it in its own dedicated section at the very top of your canvas.</span>
          </div>
          <p>The Header settings panel has three tabs:</p>
          <ul>
            <li><strong>Navigation</strong> — add nav items with labels, URLs, and icons. Link to page sections (<code>#register</code>), tabs (<code>#agenda:schedule</code>), or external URLs. See the <strong>Component Library</strong> for full settings detail.</li>
            <li><strong>Style</strong> — navbar background, glass effect, gradient animation, nav item colors, hamburger icon.</li>
            <li><strong>Spacing</strong> — padding and layout controls.</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Enable <strong>Sticky Header</strong> so navigation follows visitors as they scroll, and link the Register button to <code>#register</code> for a smooth scroll-to-checkout experience.</span></div>
        `
      },
      {
        title: 'Add the Page Content',
        screenshot: { id: 'ss_1464dk5ul', caption: 'Section settings panel — Content tab showing column distribution options' },
        content: `
          <p>With the Header in place, start building the body of your page by adding sections. Each section is a full-width row that holds one or more columns, and each column holds one or more components.</p>
          <p>Click <strong>+ Add new section</strong> at the bottom of the canvas to insert a section, then open the <strong>Content</strong> tab in the right sidebar to configure it:</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Column Distribution</div>
                <div class="field-desc">Choose how many columns the section has (1–5) and how the width is split — Full width, 50/50, 67/33, 33/67, 75/25, and more. Pick the layout that best matches the content you'll place in it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Desktop vs. Mobile / Tablet</div>
                <div class="field-desc">On <strong>Desktop</strong>, the page respects the exact column distribution you set. On <strong>Mobile and Tablet</strong>, all sections default to a single-column stacked layout — columns flow vertically, top to bottom. This ensures every page is responsive out of the box without any extra configuration.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Adding components to a column</div>
                <div class="field-desc">Click <strong>Empty — Add component</strong> inside any column to open the component selector. You can add <strong>one or multiple components</strong> to the same column — they stack vertically within it. For example, a column might hold a Title, then a Paragraph, then a Button, all stacked in order.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>A common pattern for registration pages: a <strong>2-column section (67/33)</strong> with event details (Title + Date &amp; Time + Info Cards) on the left and the Checkout Form on the right — visitors can read and register without scrolling.</span></div>
        `
      },
      {
        title: 'Customize Your Components',
        content: `
          <p>Every component you add automatically inherits the active theme — colors, typography, button styles, borders, and spacing tokens all apply without any manual configuration. Your page looks on-brand from the moment a component lands on the canvas.</p>
          <p>But every component also has its own settings panel with <strong>granular overrides</strong> for when you need a specific element to stand out or behave differently. Click any component to access:</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Content tab</div>
                <div class="field-desc">Edit the component's data or copy — for event-data components (Speakers, Schedule, Pricing) this controls which Salesforce fields are shown and what labels to use. For custom components (Hero, Title, Button) this is where you write the content directly.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Style tab</div>
                <div class="field-desc">Override the theme defaults for this specific component — background color, text color, border, corner radius, shadow, glass effect, gradient. Changes here apply only to this instance and do not affect other components or global theme tokens.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Spacing tab</div>
                <div class="field-desc">Set padding on each side of the component independently. Use the linked-toggle to apply the same value to all sides at once, or unlock it to fine-tune each side.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Component-level style overrides take precedence over the theme. If you change your org theme later, components with manual overrides will <strong>not</strong> automatically update — you'll need to clear or re-apply those overrides manually. Use component-level styles sparingly and prefer theme tokens when possible.</span>
          </div>
          <div class="pro-tip">
            <span class="pro-tip__icon">💡</span>
            <span>To reset a component back to pure theme defaults, remove any style overrides you've set in the Style tab. The component will immediately reflect whatever the active theme defines for that token.</span>
          </div>
        `
      },
      {
        title: 'Try a Different Theme',
        screenshot: { id: 'ss_3470uz1mc', caption: 'Synthwave theme applied — instant full-page reskin with dark navy and pink/cyan accents' },
        content: `
          <p>Regardless of which path you took, you can instantly reskin your entire page just by switching themes — no redesign needed. Open <strong>Site Settings → Theme</strong> and click any theme in the <strong>Built-in Themes</strong> grid to apply it instantly.</p>
          <p>Try these for different event types:</p>
          <ul>
            <li><strong>Night</strong> — dark navy with muted tones, great for tech events</li>
            <li><strong>Synthwave</strong> — deep purple with pink/cyan neon, bold and modern</li>
            <li><strong>Nord</strong> — cool grey-blue, clean and professional</li>
            <li><strong>Coffee</strong> — warm earth tones, great for networking events</li>
          </ul>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Your custom org theme (from the Theme Wizard) is always at the top under <strong>Your Org Themes</strong> and is never overwritten when you try built-in themes — just click it to restore your brand.</span></div>
        `
      },
      {
        title: 'Save Your Changes',
        screenshot: { id: 'f3-save-layout', ext: 'png', caption: 'Save Layout button in the toolbar — hover tooltip reads "Save your layout with a name"' },
        content: `
          <p>Click the <strong>Save Layout</strong> button (floppy disk icon) in the top toolbar. The first time you save, you'll be prompted to give the layout a name — choose something descriptive like "Annual Conference 2025" or "Charity Gala Template".</p>
          <p><strong>After the first save, every change auto-saves.</strong> The Page Designer debounces saves automatically — any edit you make is persisted within seconds without needing to click Save again.</p>
        `
      },
      {
        title: 'Viewing All Your Saved Layouts',
        screenshot: { id: 'f3-save-layout', ext: 'png', caption: 'Floppy disk icon in the toolbar — click it then select "Back to my Layouts" to open the layouts manager' },
        belowScreenshot: `
          <div class="step-card__screenshot" data-ss="f3-your-layouts" data-ext="png" data-caption="Your Layouts modal — showing saved layouts with Default status, In Use indicator, and Create a new Layout button" role="button" tabindex="0" aria-label="Click to enlarge: Your Layouts modal" style="margin-top:0;">
            <img src="screenshots/f3-your-layouts.png" alt="Your Layouts modal showing saved layouts with Default YES badge, In Use status, duplicate and delete actions" loading="lazy" style="border-radius:8px;width:100%;">
            <div class="step-card__screenshot-caption">Your Layouts modal — all saved layouts in your org</div>
            <button class="step-card__screenshot-zoom" tabindex="-1" aria-hidden="true">⤢ Enlarge</button>
          </div>
        `,
        content: `
          <p>Click the <strong>floppy disk icon</strong> in the top toolbar and select <strong>"Back to my Layouts"</strong> to open the Your Layouts modal. From here you can see every layout saved in your org, with four key columns:</p>
          <ul>
            <li><strong>Layout</strong> — the name you gave it when saving</li>
            <li><strong>Default</strong> — <span style="background:#7c3aed;color:#fff;padding:1px 6px;border-radius:4px;font-size:11px;font-weight:700;">YES</span> means this layout is used by all events that haven't picked a specific one. Only one layout can be the default at a time.</li>
            <li><strong>Status</strong> — <strong>In Use</strong> means the current event is actively using this layout</li>
            <li><strong>Actions</strong> — duplicate or delete a layout</li>
          </ul>
          <p>Click <strong>"Create a new Layout"</strong> to start a fresh layout from the template picker without affecting any existing layout.</p>
          <h4>How layouts are shared across events</h4>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Single layout in your org</div>
                <div class="field-desc">If your org has only one saved layout, it becomes the <strong>default</strong> — all events tagged with the <strong>"Page-Designer"</strong> label will automatically use it. Any change you make to that layout is reflected across every event sharing it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Multiple layouts</div>
                <div class="field-desc">You can create as many layouts as you need. Each layout can be assigned to specific events, letting you reuse a design across a group of events (e.g. all webinars use one layout, all in-person conferences use another) without duplicating work.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Editing a shared layout</div>
                <div class="field-desc">When you open the Page Designer for an event that shares a layout with other events, you'll see the <strong>Shared Layout dialog</strong> — it lets you choose whether to edit the shared layout (affects all events using it) or make a private copy just for this event.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Editing a shared layout changes the page for <strong>every event</strong> using it. If you only want to change one event's page, choose <strong>"Make a copy for this event"</strong> in the Shared Layout dialog before editing.</span>
          </div>
        `
      },
      {
        title: 'Create a Reusable Template',
        screenshot: { id: 'f3-layout-detail', ext: 'png', caption: 'Layout detail modal — Save as Template button (top right), plus edit, duplicate, and delete actions' },
        content: `
          <p>When you click on a saved layout from the Your Layouts modal, it opens a <strong>layout detail view</strong> with a full preview and several actions available in the top-right corner:</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Save as Template</div>
                <div class="field-desc">Converts the layout into a <strong>reusable template</strong> stored under <em>My Templates</em> in the template selector. Templates are event-agnostic — they aren't assigned to any specific event, so they can be freely reused as a starting point for future events across your org. When you open the Choose a Template modal, your saved templates appear alongside Blackthorn's built-in ones.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Layouts vs. Templates</div>
                <div class="field-desc"><strong>Layouts</strong> are live and attached to one or more events — when you edit a layout, changes appear on those event pages immediately. <strong>Templates</strong> are blueprints: applying one creates a fresh copy of the layout for the new event. Editing a template doesn't affect any existing events that were built from it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Duplicate</div>
                <div class="field-desc">Creates an identical copy of the layout as a new, independent layout. Useful for building a variation without affecting the original — for example, copying a conference layout to adapt it for a smaller workshop event.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Delete</div>
                <div class="field-desc">Permanently removes the layout. Events that were actively using this layout will lose their custom page design, so make sure no live events depend on it before deleting.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Build a polished layout for one event, save it as a template, and every future event in your org can start from that same foundation — brand colors, structure, and components all pre-configured. It's the fastest way to keep consistent design across a large event calendar.</span></div>
        `
      },
      {
        title: 'Preview Your Page',
        screenshot: { id: 'ss_4548p0lhk', caption: 'Preview mode — exactly how your event page will look to visitors on a website' },
        content: `
          <p>Click the <strong>Preview</strong> button in the toolbar to see exactly how your event page will look to visitors. The editor chrome disappears and you get a clean, full-width view of the live design — the same experience an attendee would have when they land on your event website.</p>
          <p>Happy with what you see? You can keep editing at any time — your layout autosaves as you work. When you're ready to go live, publishing is done from the Event Record in Salesforce.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use the <strong>tablet</strong> and <strong>mobile</strong> device buttons in the toolbar to preview how your page reflows at smaller screen sizes before publishing.</span></div>
        `
      },
      {
        title: 'Publish Your Event',
        screenshot: { id: 'f3-published-banner', ext: 'png', caption: 'Published event page — authenticated Salesforce users see the "Back to Page Designer" banner; attendees never see this' },
        content: `
          <p>When you're ready to go live, <strong>publishing is done from the Event Record in Salesforce</strong> — not from the Page Designer itself. Once published, attendees can see and interact with your event page: register, browse speakers, view the schedule, and more.</p>
          <p>As an authenticated Salesforce user visiting your own live event page, you'll see a dark banner at the top that reads <strong>"You're viewing this event outside the Page Designer"</strong> with a <strong>Back to Page Designer</strong> button — a handy shortcut to jump straight back into editing without navigating through Salesforce.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>That editor banner is <strong>only visible to you</strong> when you're logged into Salesforce. Your attendees will never see it — they get the clean event page with no editor UI whatsoever.</span></div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Attendees won't see any of your design changes until the event is <strong>published</strong> from the Event Record in Salesforce. The Page Designer preview is only visible to you while you're building.</span>
          </div>
        `
      },
      {
        title: 'Your Branding Follows to Checkout',
        screenshot: { id: 'f3-checkout-branding', ext: 'png', caption: 'Dynamic UI checkout — ticket selection page inheriting brand colors, typography, and button styles from Site Settings' },
        content: `
          <p>The checkout flow your attendees go through to register is powered by <strong>Dynamic UI</strong> — and it automatically inherits the branding you configured in Site Settings. Your colors, typography, and button styles carry through seamlessly into the registration experience without any extra setup.</p>
          <p>The key Site Settings tokens that flow into the checkout:</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Primary (<code>--p</code>)</div>
                <div class="field-desc">Drives the <strong>Continue</strong> button, selected ticket highlight, active state indicators, and quantity controls (+/− buttons)</div>
              </div>
              <div class="field-row">
                <div class="field-name">Base colors (<code>--b1</code>, <code>--b2</code>, <code>--b3</code>)</div>
                <div class="field-desc">Sets the page background, card surfaces (ticket cards, order summary panel), and input field backgrounds</div>
              </div>
              <div class="field-row">
                <div class="field-name">Font colors (<code>--bc</code>)</div>
                <div class="field-desc">Controls all body text — ticket names, descriptions, prices, and form labels</div>
              </div>
              <div class="field-row">
                <div class="field-name">Border radius</div>
                <div class="field-desc">The button corner radius from Site Settings applies to the Continue button and ticket card borders for a consistent shape language</div>
              </div>
              <div class="field-row">
                <div class="field-name">Typography</div>
                <div class="field-desc">The UI font family set in Site Settings → Typography is used for all checkout text</div>
              </div>
            </div>
          </div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Granular control over individual checkout components or adding custom flows within the checkout is <strong>not supported in v1 of the Page Designer</strong>. Branding is applied globally via Site Settings tokens — per-component overrides inside the checkout are not yet available.</span>
          </div>
        `
      },
      {
        title: 'Your Branding Follows to Event Groups',
        screenshot: { id: 'f3-event-group-branding', ext: 'png', caption: 'Event Group listing — theme inherited from the default Page Designer layout when Caching 2.0 is enabled' },
        content: `
          <p>Your Page Designer theme also flows into <strong>Event Group listing pages</strong>. When an event group contains at least one event that has a Page Designer layout, the group listing automatically adopts the <strong>default theme</strong> set on that Page Designer event — the same colors, typography, and button styles your attendees already see on the event page itself.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Requirement</div>
                <div class="field-desc">The event group must contain <strong>at least one Page Designer–tagged event</strong> and the <strong>Caching 2.0 flag</strong> must be enabled in your org. Both conditions must be true for the theme to apply.</div>
              </div>
              <div class="field-row">
                <div class="field-name">No Page Designer events</div>
                <div class="field-desc">If the event group has no Page Designer events, it falls back to the default Dynamic UI styling — no custom Page Designer theme is applied.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Granular control over individual Event Group page elements is <strong>not currently supported</strong> in v1 of the Page Designer. Full Event Group customisation is planned for a post-MVP release.</span>
          </div>
          <div class="pro-tip" style="border-color:#ef4444;background:#fef2f2;">
            <span class="pro-tip__icon">🚫</span>
            <span><strong>Avoid mixing Page Designer events with other event types in the same Event Group.</strong> When a group contains both Page Designer and non-Page Designer events, the Page Designer theme can leak into the styling of the non-Page Designer events. This is a known issue in the MVP and will be addressed in a future release.</span>
          </div>
        `
      }
    ]
  },

  4: {
    id: 'flow-4',
    steps: [

      /* ── COLOR SCHEME: THEME COLORS ────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Theme Colors',
        screenshot: { id: 'f4-01-theme-colors', ext: 'png', caption: 'Site Settings → Color Scheme → Theme Colors: Primary, Secondary, Accent and Base token fields with live color preview' },
        content: `
          <p class="field-section-intro">Theme Colors are the 12 foundational CSS tokens that drive every color decision on your event page. When you select a built-in theme or run the Theme Creator, these are auto-populated. You can override any of them individually without touching the rest.</p>

          <details class="field-group" open>
            <summary>Primary & Secondary</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Primary<span class="field-token">--p</span></div>
                <div class="field-desc">Your dominant brand color. Drives <strong>primary buttons</strong>, active tab underlines, selected navigation items, focus rings, and progress indicators across the page. The most visible color on the canvas.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Primary Content<span class="field-token">--pc</span></div>
                <div class="field-desc">Text and icon color rendered <strong>on top of Primary backgrounds</strong>. Used as the label color inside primary buttons. Must contrast strongly against Primary — choose white for dark primaries, dark for light primaries.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary<span class="field-token">--s</span></div>
                <div class="field-desc">A supporting brand color for <strong>secondary buttons</strong> and secondary UI elements. Works best as a complement to Primary — not a duplicate of it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Content<span class="field-token">--sc</span></div>
                <div class="field-desc">Text and icon color on <strong>Secondary backgrounds</strong>. Used as the label color inside secondary buttons. Same contrast rules as Primary Content.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Accent</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Accent<span class="field-token">--a</span></div>
                <div class="field-desc">Your highlight and emphasis color. Appears on <strong>accent buttons</strong>, badges, countdown box highlights, active list items, and hover states on certain interactive elements. Best used sparingly for maximum visual impact.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent Content<span class="field-token">--ac</span></div>
                <div class="field-desc">Text and icon color on <strong>Accent backgrounds</strong>. Used as the label color inside accent buttons. Must contrast against Accent.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Neutral</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Neutral<span class="field-token">--n</span></div>
                <div class="field-desc">A dark neutral surface color. Used for <strong>dark card backgrounds</strong>, dark navigation bars (when Glass Effect is off), neutral-style buttons, and any component where a dark-but-not-quite-black surface is needed.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Neutral Content<span class="field-token">--nc</span></div>
                <div class="field-desc">Text and icon color on <strong>Neutral backgrounds</strong>. Used for nav link text and icons on dark headers, and for label text inside neutral-style buttons.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Base Layers</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Base 100<span class="field-token">--b1</span></div>
                <div class="field-desc">The <strong>primary page background</strong>. Every section's default background color. Also the starting color for the Site Gradient when enabled. On light themes this is typically white or very light grey; on dark themes it's the darkest surface.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Base 200<span class="field-token">--b2</span></div>
                <div class="field-desc">A <strong>slightly elevated surface</strong>. Used for card backgrounds, input field fills, panel backgrounds, and any surface that sits one layer above the page background. The ending color for the Site Gradient.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Base 300<span class="field-token">--b3</span></div>
                <div class="field-desc">The <strong>darkest base surface</strong>. Used for borders, dividers, pressed/active states on interactive surfaces, and deeply nested backgrounds. Provides visual separation without using a full Neutral color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Base Content<span class="field-token">--bc</span></div>
                <div class="field-desc">The <strong>default body text color</strong> for content rendered on Base 100. Applied to paragraphs, form labels, list text, and general copy throughout the page. Should contrast strongly against Base 100.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── COLOR SCHEME: LINKS, LISTS & BUTTONS ───────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Link & List Elements',
        screenshot: { id: 'f4-02-links-lists-buttons', ext: 'png', caption: 'Site Settings → Color Scheme → Link & List Elements: hyperlink, hover, and list colors with live preview' },
        content: `
          <details class="field-group" open>
            <summary>Link & List Elements</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">Colors for <code>&lt;a&gt;</code> hyperlinks and unordered list markers inside Rich Text, Paragraph, and other content components. Default to Accent color — override here when your Accent doesn't work as a link color.</p>
              <div class="field-row">
                <div class="field-name">Hyperlink Color</div>
                <div class="field-desc">Color of clickable links in content blocks. Appears in <strong>Rich Text</strong> and <strong>Paragraph</strong> components wherever you've added an anchor tag. Defaults to Accent.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Hyperlink Hover Color</div>
                <div class="field-desc">Color of a link when a visitor hovers over it. Should be visibly different from the default link color to confirm interactivity — typically a slightly darker or lighter shade.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Unordered List Color</div>
                <div class="field-desc">The bullet marker color for <code>&lt;ul&gt;</code> list items in Rich Text content. Defaults to Accent. Change this if your Accent color clashes with the surrounding text color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Unordered List Active Color</div>
                <div class="field-desc">The marker color for the currently active or selected list item in interactive list components. Defaults to Primary.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── COLOR SCHEME: BUTTON COLORS ────────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Button Colors',
        screenshot: { id: 'f4-03-button-colors', ext: 'png', caption: 'Site Settings → Color Scheme → Button Colors: per-type overrides for Primary, Secondary, and Accent button default and hover states' },
        content: `
          <details class="field-group" open>
            <summary>Button Colors</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">Per-type overrides for Primary, Secondary, and Accent buttons — default and hover states independently. These auto-populate from your theme's Primary/Secondary/Accent tokens. Only override here when you need a specific hex that differs from those tokens (e.g. a brand button color slightly different from Primary).</p>
              <div class="field-row">
                <div class="field-name">Primary Button Color</div>
                <div class="field-desc">Background fill of <strong>Primary-style buttons</strong> in their default (non-hovered) state. Applies to: Register Button, primary Hero CTAs, and any Button component set to "Primary" style.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Primary Button Text Color</div>
                <div class="field-desc">Label text color on Primary buttons. Must contrast against Primary Button Color. Usually white on dark primaries, dark on light primaries.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Primary Button Hover Color</div>
                <div class="field-desc">Background of Primary buttons when a visitor hovers. Typically a darker or lighter variant of Primary Button Color to signal interactivity.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Primary Button Hover Text Color</div>
                <div class="field-desc">Label text color on Primary buttons during hover. Can match Primary Button Text Color or shift for extra visual feedback.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Button Color</div>
                <div class="field-desc">Background of <strong>Secondary-style buttons</strong> at rest. Applies to any Button component set to "Secondary" style, and the optional secondary action in Hero and Header.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Button Text Color</div>
                <div class="field-desc">Label text color on Secondary buttons. Must contrast against Secondary Button Color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Button Hover Color</div>
                <div class="field-desc">Background of Secondary buttons on hover.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary Button Hover Text Color</div>
                <div class="field-desc">Label text on Secondary buttons during hover.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent Button Color</div>
                <div class="field-desc">Background of <strong>Accent-style buttons</strong> at rest. Use Accent buttons to draw extra attention to a specific CTA — e.g. a "Limited Spots" ticket tier button.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent Button Text Color</div>
                <div class="field-desc">Label text on Accent buttons. Must contrast against Accent Button Color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent Button Hover Color</div>
                <div class="field-desc">Background of Accent buttons on hover.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent Button Hover Text Color</div>
                <div class="field-desc">Label text on Accent buttons during hover.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── COLOR SCHEME: SITE GRADIENT ───────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Site Gradient',
        screenshot: { id: 'f4-04-site-gradient', ext: 'png', caption: 'Site Settings → Color Scheme → Site Gradient: 3-stop background gradient with direction style picker' },
        content: `
          <p class="field-section-intro">The Site Gradient replaces your flat Base 100 background with a 3-stop gradient that flows behind all sections on the page. Best used on dark themes where depth across a long-scroll page adds visual richness.</p>

          <details class="field-group" open>
            <summary>Site Gradient</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Enable Gradient Background</div>
                <div class="field-desc"><strong>Toggle.</strong> When on, the page background becomes a 3-stop gradient instead of a flat Base 100 fill. When off, all three color stops are saved but have no effect until re-enabled.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Start (Base 100 –b1)</div>
                <div class="field-desc">First gradient stop. Defaults to <strong>Base 100</strong> — your primary page background. The gradient originates here (top-left for linear, center/corner for radial).</div>
              </div>
              <div class="field-row">
                <div class="field-name">Middle (neutral-tinted surface)</div>
                <div class="field-desc">Midpoint stop. Defaults to a neutral-tinted surface between Base 100 and Base 200. Light themes: subtle blend between surfaces. Dark themes: soft neutral shift. Move it closer to Start or End to reduce the mid-color pop.</div>
              </div>
              <div class="field-row">
                <div class="field-name">End (Base 200 –b2)</div>
                <div class="field-desc">Final stop. Defaults to <strong>Base 200</strong>. On dark themes this creates visible depth across the scroll; on light themes it's often nearly invisible unless you push it toward a contrasting color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Style</div>
                <div class="field-desc">Direction of the gradient: <strong>Linear 90°</strong> (left → right), <strong>180°</strong> (top → bottom), <strong>135°</strong> / <strong>45°</strong> (diagonal), <strong>Radial center</strong>, or <strong>Radial corners</strong>. For full-page scroll, Linear 180° (top → bottom) is the most natural.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── COLOR SCHEME: TITLE GRADIENT ───────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Title Gradient',
        screenshot: { id: 'f4-05-title-gradient', ext: 'png', caption: 'Site Settings → Color Scheme → Title Gradient: 3-stop gradient applied to heading text' },
        content: `
          <p class="field-section-intro">The Title Gradient is applied to heading text when <strong>Gradient Text</strong> is enabled on a Title, Event Title, or Hero title component. It turns a flat-colored heading into a multi-color gradient fill — great for making a primary headline pop on dark-theme pages.</p>

          <details class="field-group" open>
            <summary>Title Gradient</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Start</div>
                <div class="field-desc">First color in the text gradient fill. Defaults to <strong>Primary Button Color</strong> — the left edge of gradient headings. For a two-tone look, set Start to your Primary and End to your Accent.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Middle</div>
                <div class="field-desc">Mid-color in the text gradient. Defaults to <strong>Primary ~25% lighter</strong>. Creates a visible shift across longer headings. Set this close to Start or End to make the gradient nearly linear between just two colors.</div>
              </div>
              <div class="field-row">
                <div class="field-name">End</div>
                <div class="field-desc">Final color in the text gradient. Defaults to a further derivation of Primary. For a vibrant headline, try setting End to your Accent color.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Style</div>
                <div class="field-desc">Direction of the gradient across the text: Linear 90° is standard for left-to-right color shift on headings. Radial options create a spotlight effect emanating from the center or corners of the text.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Gradient text is enabled per-component — set colors here globally, then toggle <strong>Gradient Text</strong> on in the individual Title, Event Title, or Hero component settings.</span></div>
        `
      },

      /* ── COLOR SCHEME: BUTTON GRADIENT ──────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Button Gradient',
        screenshot: { id: 'f4-06-button-gradient', ext: 'png', caption: 'Site Settings → Color Scheme → Button Gradient: 3-stop gradient fill for gradient-style buttons' },
        content: `
          <p class="field-section-intro">The Button Gradient fills button backgrounds when a <strong>gradient style</strong> is selected on a Button, Register Button, or Hero CTA component. Same 3-stop structure as Site and Title gradients — but applied to button surfaces instead of page background or text.</p>

          <details class="field-group" open>
            <summary>Button Gradient</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Start</div>
                <div class="field-desc">First stop on the button background gradient. Defaults to <strong>Primary Button Color</strong>. This is the color at the leading edge of the button.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Middle</div>
                <div class="field-desc">Midpoint stop. Defaults to <strong>Primary ~25% lighter</strong>. Widen the gap between Start and Middle for a dramatic gradient; keep them close for a subtle sheen.</div>
              </div>
              <div class="field-row">
                <div class="field-name">End</div>
                <div class="field-desc">Final stop. For a two-tone brand gradient button, set Start to Primary and End to Accent — this is a common and high-impact combination.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Style</div>
                <div class="field-desc">Direction of the gradient across the button surface. Linear 90° (left → right) is the most common for buttons. Radial creates a circular glow effect from the center of the button.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Gradient fill on buttons is enabled per-component — set the colors here globally, then select <strong>"Gradient"</strong> as the button style in the individual Button or Register Button component settings.</span></div>
        `
      },

      /* ── COLOR SCHEME: THEME CREATOR ────────────────────── */
      {
        _group: 'color-scheme',
        title: 'Color Scheme — Theme Creator',
        screenshot: { id: 'f4-07-theme-creator', ext: 'png', caption: 'Theme Creator wizard — foundation colors, text-on pairs, button radius, and live preview panel' },
        content: `
          <p class="field-section-intro">The Theme Creator generates a complete, consistent color system from a small set of foundation inputs. Fill in these fields and click <strong>Save &amp; Auto-Fill the rest</strong> — the wizard propagates your choices across all of Color Scheme, Typography font colors, and button styles automatically. Font families stay as-is.</p>

          <details class="field-group" open>
            <summary>Identity & Foundation</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Theme Name</div>
                <div class="field-desc">Internal identifier for the saved theme. <strong>Lowercase letters a–z only, 2–48 characters, no spaces or numbers.</strong> Once saved, the theme appears under <em>Your Org Themes</em> and can be applied to any future event without re-entering colors.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Background<span class="field-token">--b1</span></div>
                <div class="field-desc">Sets <strong>Base 100</strong> — the primary page background. The wizard derives Base 200 and Base 300 automatically by darkening this value. Use your lightest brand color or <code>#ffffff</code> for a clean white canvas.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Text on base<span class="field-token">--bc</span></div>
                <div class="field-desc">Sets <strong>Base Content</strong> — the default body text color. Must contrast strongly against Background. <code>#1f2937</code> (near-black) works for most light backgrounds; use a light color like <code>#e5e7eb</code> for dark backgrounds.</div>
              </div>
            </div>
          </details>

          <details class="field-group" open>
            <summary>Brand Colors</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Primary</div>
                <div class="field-desc">Your main brand color. Sets <strong>--p</strong> and drives the derived button colors, gradient starts, and link colors across the entire Site Settings. This is the most impactful field in the wizard.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Text on primary</div>
                <div class="field-desc">Sets <strong>Primary Content (--pc)</strong>. The label color inside all Primary-style buttons and elements. Choose white for dark primaries, dark for light primaries.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Secondary</div>
                <div class="field-desc">Sets <strong>--s</strong>. A complementary brand color for secondary buttons and supporting UI elements. Works best when it reads clearly alongside Primary without competing with it.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Text on secondary</div>
                <div class="field-desc">Sets <strong>Secondary Content (--sc)</strong>. Label text inside Secondary buttons.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Accent</div>
                <div class="field-desc">Sets <strong>--a</strong>. Your highlight color for badges, accent buttons, countdown highlights, and hover states. Best used as a bold third color that stands out from both Primary and Secondary.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Text on accent</div>
                <div class="field-desc">Sets <strong>Accent Content (--ac)</strong>. Label text inside Accent buttons and on Accent-colored surfaces.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Button Radius</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Default Button Radius</div>
                <div class="field-desc">Sets the <code>border-radius</code> applied globally to <strong>all buttons</strong> on the page — Primary, Secondary, Accent, Register Button, and Social Share. Same setting as <em>Site Settings → Stylings → Button radius</em>, synced both ways. Common values: <code>0rem</code> for sharp/square, <code>0.375rem</code> for subtle rounding, <code>0.75rem</code> for rounded, <code>9999px</code> for full pill shape.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── TYPOGRAPHY: FONT COLORS & THEMING ──────────────── */
      {
        _group: 'typography',
        title: 'Typography — Font Colors',
        screenshot: { id: 'f4-08-typography-font-colors', ext: 'png', caption: 'Site Settings → Typography → Font Colors: Primary, Secondary, and Muted color fields with live Typography Preview' },
        content: `
          <details class="field-group" open>
            <summary>Font Colors</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">These three colors control the text hierarchy across your entire event page. They work alongside Base Content (<code>--bc</code>) but are applied specifically within content components rather than at the raw token level.</p>
              <div class="field-row">
                <div class="field-name">Font Color Primary</div>
                <div class="field-desc">The main foreground text color for <strong>paragraphs, body copy, card descriptions, form labels, and most visible text</strong> in content components. This is what your visitors read most — choose a color with strong contrast against your Base 100 background.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Font Color Secondary</div>
                <div class="field-desc">A softer text color for <strong>supporting descriptions, subtitles, metadata, and helper text</strong>. Appears on speaker bios, event sub-headings, and any text that should be visible but recede behind the primary copy.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Muted Color</div>
                <div class="field-desc">The dimmest text color for <strong>placeholder text, disabled states, captions, and fine print</strong>. Should still be legible but clearly less prominent than Secondary. Run the Accessibility Scan after adjusting — Muted is the color most likely to fail contrast checks.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── TYPOGRAPHY: FONT THEMING ────────────────────────────── */
      {
        _group: 'typography',
        title: 'Typography — Font Theming',
        screenshot: { id: 'f4-09-typography-font-theming', ext: 'png', caption: 'Site Settings → Typography → Font Theming: Title Font and Paragraph Font family, weight, and size controls' },
        content: `
          <details class="field-group" open>
            <summary>Title Font</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">Controls the typeface and scale for all <strong>H1, H2, and H3 headings</strong> across the page — Hero titles, section headings, card headings, FAQ questions, and any component using a heading element.</p>
              <div class="field-row">
                <div class="field-name">Family</div>
                <div class="field-desc">The font applied to all headings. Choose from 1,945+ Google Fonts or any custom font you've added below. <strong>Display and serif fonts</strong> (Playfair Display, Bebas Neue, Cormorant) work well for headings; save the readable sans-serifs for body text.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Weight</div>
                <div class="field-desc">The font weight for all headings globally. <strong>700 (Bold)</strong> is the default. Go higher (800, 900) for impact-heavy conference branding; go lower (300, 400) for editorial or luxury event aesthetics — but verify the font supports those weights.</div>
              </div>
              <div class="field-row">
                <div class="field-name">H1 Size</div>
                <div class="field-desc">Size of H1 elements in <code>em</code>. Used in <strong>Hero titles, Event Title, and top-level page headings</strong>. Default <code>2.5em</code>. Increase for bold above-the-fold impact; reduce if your event name is long and wraps awkwardly on mobile.</div>
              </div>
              <div class="field-row">
                <div class="field-name">H2 Size</div>
                <div class="field-desc">Size of H2 elements. Used in <strong>section headings and major content headings</strong>. Default <code>2em</code>. Should be noticeably smaller than H1 to maintain clear visual hierarchy.</div>
              </div>
              <div class="field-row">
                <div class="field-name">H3 Size</div>
                <div class="field-desc">Size of H3 elements. Used in <strong>card headings, FAQ question labels, speaker names, and sub-section titles</strong>. Default <code>1.5em</code>.</div>
              </div>
            </div>
          </details>

          <details class="field-group" open>
            <summary>Paragraph Font</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">Controls the typeface and scale for all <strong>body text</strong> — paragraphs, button labels, form fields, navigation items, card descriptions, list text, and any non-heading copy.</p>
              <div class="field-row">
                <div class="field-name">Family</div>
                <div class="field-desc">The font for all body text. Prioritize <strong>readability at small sizes</strong> — Inter, Poppins, DM Sans, and Nunito are popular choices. Avoid display or decorative fonts here; they hurt legibility in long paragraphs and form fields.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Weight</div>
                <div class="field-desc">Font weight for body text globally. <strong>400 (Regular)</strong> is standard. Use <strong>500 (Medium)</strong> if your base font feels too thin on certain backgrounds.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Large</div>
                <div class="field-desc">Size for large body text — <strong>lead paragraphs, feature descriptions, Hero subtitles</strong>. Default <code>1.15em</code>.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Body</div>
                <div class="field-desc">The base size for <strong>standard paragraphs, card descriptions, and all general copy</strong>. Default <code>1em</code>. Increase to <code>1.05em</code>–<code>1.1em</code> to improve readability for older audiences.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Caption</div>
                <div class="field-desc">Smallest text size for <strong>image captions, timestamps, metadata, and fine print</strong>. Default <code>0.875em</code>. Don't go below <code>0.75em</code> — anything smaller fails WCAG readability guidelines.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── TYPOGRAPHY: GOOGLE FONTS ───────────────────────────── */
      {
        _group: 'typography',
        title: 'Typography — Available Google Fonts',
        screenshot: { id: 'f4-10-google-fonts', ext: 'png', caption: 'Font picker showing 1,945 Google Fonts browseable by name with live preview samples' },
        content: `
          <p class="field-section-intro">When you click the <strong>Family</strong> field on either Title Font or Paragraph Font, a full font picker opens. It gives you access to <strong>1,945 Google Fonts</strong> — all loaded on demand, no hosting required on your end.</p>

          <details class="field-group" open>
            <summary>Google Fonts Library</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">1,945 fonts available</div>
                <div class="field-desc">Every font in the Google Fonts catalog is available instantly — <strong>Sans-serif</strong> (Inter, Poppins, Manrope), <strong>Serif</strong> (Playfair Display, Cormorant, Lora), <strong>Display</strong> (Bebas Neue, Abril Fatface), and <strong>Monospace</strong> (Roboto Mono, Inconsolata). Each card shows a live preview at multiple weights.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Search</div>
                <div class="field-desc">Type any part of a font name to filter the grid instantly. Showing 400 of 1,945 by default — search is the fastest way to get to a specific font without scrolling.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Selected font</div>
                <div class="field-desc">The currently active font is highlighted with a purple border and checkmark. Clicking any other card swaps the font live in the Typography Preview panel — no need to save before you can see the result.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Font categories</div>
                <div class="field-desc">Each card shows a <strong>category badge</strong> (SANS-SERIF, SERIF, MONOSPACE, DISPLAY) so you can quickly identify the right style for headings vs. body copy. Monospace fonts are generally not recommended for body text on event pages.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Your own uploaded fonts (Custom Fonts, next step) appear at the top of this picker above the Google Fonts grid — so they're always easy to find.</span></div>
        `
      },

      /* ── TYPOGRAPHY: CUSTOM FONTS & SEMANTIC COLORS ─────── */
      {
        _group: 'typography',
        title: 'Typography — Custom Fonts',
        screenshot: { id: 'f4-11-custom-fonts', ext: 'png', caption: 'Site Settings → Typography → Custom Fonts: Font URL, Font Name, Format fields with Browse Fonts and Add Font actions' },
        content: `
          <p class="field-section-intro">Custom Fonts let you bring your brand typeface into the Page Designer. You can either <strong>reference a font via URL</strong> (from a CDN or font hosting service) or <strong>upload a WOFF/WOFF2 file directly</strong> using the Browse Fonts button. Once added, your custom font appears at the top of the font picker alongside all 1,945 Google Fonts — shared across every event in your organization.</p>

          <details class="field-group" open>
            <summary>Adding a Custom Font</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Font URL</div>
                <div class="field-desc">Paste a direct, publicly accessible URL to your font file (e.g. <code>https://cdn.example.com/brand-font.woff2</code>). The URL must be reachable by any browser without authentication — public CDN links work best. Private S3 buckets or localhost paths won't work.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Browse Fonts</div>
                <div class="field-desc">Click <strong>Browse Fonts</strong> to upload a font file directly from your computer instead of using a URL. Supported formats: WOFF2, WOFF, TTF. The file is hosted by Blackthorn and a URL is generated automatically.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Font Name</div>
                <div class="field-desc">The label that appears in the Family picker. Use your actual brand font name (e.g. <em>Acme Sans</em>). Avoid names that exactly match an existing Google Font — this can cause the picker to load the Google version instead of yours.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Format</div>
                <div class="field-desc">The file format of your font. <strong>WOFF2</strong> is strongly recommended — best compression, supported by all modern browsers. Fall back to <strong>WOFF</strong> or <strong>TTF</strong> only if your font provider doesn't offer WOFF2.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Add Font</div>
                <div class="field-desc">Saves the font to your organization. Once added, it's immediately available in the Family picker for Title Font and Paragraph Font across all events. You can add multiple custom fonts — each appears as its own entry.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Custom fonts are <strong>org-wide</strong> — add your brand font once and it's instantly available on every event page in your organization without re-uploading.</span></div>
        `
      },

      /* ── TYPOGRAPHY: SEMANTIC COLORS ─────────────────────────── */
      {
        _group: 'typography',
        title: 'Typography — Semantic Colors',
        screenshot: { id: 'f4-12-semantic-colors', ext: 'png', caption: 'Site Settings → Typography → Semantic Colors: Info, Success, Warning, and Error color fields' },
        content: `
          <p class="field-section-intro">Semantic Colors are the status and feedback colors that appear throughout the checkout flow, form validation, and system messages — independent of your brand palette. They're auto-populated by your theme but can be overridden here.</p>

          <details class="field-group" open>
            <summary>Semantic Colors</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Info<span class="field-token">--in</span></div>
                <div class="field-desc">Color for <strong>informational messages and neutral status indicators</strong>. Appears in info banners, help text tooltips, and status badges that communicate context without urgency. Typically blue.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Info Content<span class="field-token">--inc</span></div>
                <div class="field-desc">Text and icon color rendered on Info-colored backgrounds. Must contrast against Info.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Success<span class="field-token">--su</span></div>
                <div class="field-desc">Color for <strong>success states</strong> — registration confirmation messages, valid form field indicators, completed payment confirmations, and "ticket added" feedback. Typically green.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Success Content<span class="field-token">--suc</span></div>
                <div class="field-desc">Text and icon color on Success-colored backgrounds.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Warning<span class="field-token">--wa</span></div>
                <div class="field-desc">Color for <strong>warning states</strong> — limited ticket availability alerts, approaching registration deadlines, and anything that needs attention without being an error. Typically amber or yellow.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Warning Content<span class="field-token">--wac</span></div>
                <div class="field-desc">Text and icon color on Warning-colored backgrounds. Yellow Warning backgrounds often require dark text to pass contrast — check with the Accessibility Scan.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Error<span class="field-token">--er</span></div>
                <div class="field-desc">Color for <strong>error states</strong> — failed form validation, payment processing errors, and system error messages. Typically red. This color appears prominently during checkout — make sure it's clearly distinguishable from Primary and Accent.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Error Content<span class="field-token">--erc</span></div>
                <div class="field-desc">Text and icon color on Error-colored backgrounds.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── STYLINGS: SHADOWS ──────────────────────────────────── */
      {
        _group: 'stylings',
        title: 'Stylings — Shadows',
        screenshot: { id: 'f4-13-stylings-shadows', ext: 'png', caption: 'Site Settings → Stylings → Shadows: Component Shadow dropdown with all preset options listed' },
        content: `
          <p class="field-section-intro">The Shadows setting controls the <code>box-shadow</code> applied globally to every card-style component on the page — Info Cards, Speaker cards, Sponsor logo tiles, FAQ panels, and any section using a card layout.</p>

          <details class="field-group" open>
            <summary>Shadows</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Component Shadow</div>
                <div class="field-desc">Choose from 11 presets ranging from <strong>No shadow (none)</strong> through to <strong>Very strong</strong>. Each preset maps to a specific CSS <code>box-shadow</code> value. Presets in order: No shadow · Very subtle · Subtle · Light · Soft · Medium light · Medium · Moderate · Elevated · Prominent · Strong · Very strong. A subtle or light shadow lifts cards off the background and improves scannability; no shadow works best when you're already using borders or glass effects.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Shadow and border work well together at low intensities — try <strong>Very subtle shadow + 1px border</strong> for a clean card look, or <strong>Elevated shadow + no border</strong> for a floating effect. Avoid using both at high values simultaneously.</span></div>
        `
      },

      /* ── STYLINGS: COMPONENT BORDERS ────────────────────────── */
      {
        _group: 'stylings',
        title: 'Stylings — Component Borders',
        screenshot: { id: 'f4-14-stylings-borders', ext: 'png', caption: 'Site Settings → Stylings → Component Borders: Border Width, Style, Color, and Button Radius fields' },
        content: `
          <p class="field-section-intro">Component Borders controls the border applied to card-style components across the entire page — the same components that receive the Component Shadow. These settings work independently of per-component border overrides.</p>

          <details class="field-group" open>
            <summary>Component Borders</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Border Width</div>
                <div class="field-desc">Thickness of the border on card components. <code>0px</code> removes all borders; <code>1px</code> is the standard hairline used in most themes. Increasing width adds visual weight — use sparingly alongside shadows.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Border Style</div>
                <div class="field-desc">The CSS border style: <strong>Solid</strong> (most common), Dashed, Dotted, or None. Only visible when Border Width > 0px.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Border Color</div>
                <div class="field-desc">Color of the border. Typically set to <code>--b3</code> (Base 300) so it automatically shifts when you change themes. Override with any color — a soft neutral or brand tint both work well.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Components Radius</div>
                <div class="field-desc">Corner radius applied to <strong>card-style components</strong> — Info Cards, Speaker cards, Sponsor tiles, FAQ panels, and section backgrounds. Common values: <code>0rem</code> (sharp), <code>0.5rem</code> (default 8px), <code>1rem</code> (rounded), <code>1.5rem</code> (very rounded). This is separate from Button Radius — you can have pill-shaped buttons alongside sharp-cornered cards, or vice versa.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Button Radius</div>
                <div class="field-desc">Corner radius applied to <strong>all buttons</strong> across the page — synced with the same field in the Theme Creator. Common values: <code>0rem</code> (sharp square), <code>0.375rem</code> (subtle), <code>0.75rem</code> (rounded), <code>9999px</code> (full pill). Affects Primary, Secondary, Accent, Register Button, and Social Share Button.</div>
              </div>
            </div>
          </details>
        `
      },

      /* ── STYLINGS: SPACING ──────────────────────────────────── */
      {
        _group: 'stylings',
        title: 'Stylings — Default Internal Spacing',
        screenshot: { id: 'f4-15-stylings-spacing', ext: 'png', caption: 'Site Settings → Stylings → Default Internal Spacing: global padding slider and per-side controls with px/em/rem/%  unit switcher' },
        content: `
          <p class="field-section-intro">These are the <strong>global default spacing values applied to new sections</strong> when you add them to the canvas. Think of it as your page-wide baseline — but every individual section can override these values in its own settings panel. Changes here do not retroactively affect sections already on the canvas.</p>

          <details class="field-group" open>
            <summary>Default Internal Spacing</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">All (slider)</div>
                <div class="field-desc">A single slider that sets the same padding on all four sides simultaneously. Drag to increase or decrease. Unit can be switched between <strong>px, em, rem, or %</strong>. Useful for quickly setting a uniform inset before fine-tuning individual sides.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Top / Right / Bottom / Left</div>
                <div class="field-desc">Individual controls for each side of the section padding. The four icons to the left of each value represent Top, Right, Bottom, and Left edges. Unlock the sides to set them independently — for example <code>48px</code> top/bottom and <code>0px</code> left/right for a full-bleed horizontal section with vertical breathing room.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>This sets the <strong>default for new sections only</strong>. To change spacing on a section already on the canvas, select that section and go to <strong>Section settings → Spacing tab</strong> — where you'll find the same controls plus per-device overrides for Desktop, Tablet, and Mobile.</span></div>
        `
      },

      /* ── STYLINGS: LAYOUT ───────────────────────────────────── */
      {
        _group: 'stylings',
        title: 'Stylings — Layout',
        screenshot: { id: 'f4-16-stylings-layout', ext: 'png', caption: 'Site Settings → Stylings → Layout: Default Column Gap and Content Width selector with scaled visual previews for each option' },
        content: `
          <p class="field-section-intro">Layout controls two things: the <strong>gap between columns</strong> inside sections, and the <strong>maximum width</strong> of all page content on desktop. These are among the highest-impact settings in the Page Designer — a single switch can transform a page from edge-to-edge immersive to a clean centered article layout.</p>

          <p class="field-section-intro" style="margin-top:8px;">Each content width option shows a <strong>scaled preview</strong> — a stand-in for a 1600px-wide desktop, where the bar width shows exactly how much horizontal space your content uses in that viewport.</p>

          <details class="field-group" open>
            <summary>Default Column Gap</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Column Gap</div>
                <div class="field-desc">The default horizontal space between columns inside every section. Dropdown presets range from <code>0px</code> to <code>48px</code>. Default is <code>10px</code>. This applies to all new sections — existing sections can override it under their individual Section settings.</div>
              </div>
            </div>
          </details>

          <details class="field-group" open>
            <summary>Content Width Options</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Full Width</div>
                <div class="field-desc">Content uses the full viewport width with no max-width cap on the page container. Best for immersive designs where sections and backgrounds bleed edge-to-edge — great for dark-theme pages with full-width hero images and background videos.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Expanded</div>
                <div class="field-desc">Content is limited to <strong>98vw</strong> on desktop — a subtle margin appears at the edges, but mobile stays full width. Gives a slight frame without the strict constraint of a boxed layout.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Boxed (1280px)</div>
                <div class="field-desc">Content is capped at <strong>1280px</strong> and centered. The most common choice for professional event pages — keeps line lengths readable and prevents overly wide text columns on ultra-wide monitors.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Full-width header, boxed content</div>
                <div class="field-desc">Header sections span edge-to-edge; all other sections use a 1280px centered column. Ideal for a spanning navigation bar with a structured content area below — the most popular hybrid layout for event pages.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Full-width header & footer, boxed body</div>
                <div class="field-desc">Header and Footer sections span the full viewport; all body sections use a 1280px centered column. Use when you want both your navigation and footer to feel full-bleed while keeping the middle content structured.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Custom max width</div>
                <div class="field-desc">Set any valid CSS max-width (e.g. <code>1100px</code>, <code>72rem</code>, <code>90vw</code>). Applied to the page content container on desktop. Use when your brand guidelines specify a non-standard grid width.</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span><strong>Why this matters:</strong> choosing Full Width on a light-theme page with narrow text columns makes paragraphs stretch uncomfortably wide on 4K monitors. Switching to <strong>Boxed (1280px)</strong> immediately solves readability — lines stay under 80 characters and the page feels intentionally designed rather than stretched.</span></div>
        `
      },

      /* ── THEME ──────────────────────────────────────────────── */
      {
        title: 'Theme',
        screenshot: { id: 'f4-17-theme', ext: 'png', caption: 'Site Settings → Theme — Built-in Themes grid with color chip previews and Selected Theme Preview panel' },
        content: `
          <p class="field-section-intro">The Theme section is the fastest way to apply a complete color palette to your page in one click. It works alongside Color Scheme — think of it as the starting point, and Color Scheme as the fine-tuning layer.</p>

          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span><strong>Applying a theme resets all component-level color overrides.</strong> If you've gone into individual components and set custom colors (a specific background on a Hero section, a custom border on Info Cards, a unique button color on a Register Button), switching themes will overwrite those granular settings with the new theme's values. Set your theme <em>first</em>, then fine-tune individual components.</span>
          </div>

          <details class="field-group" open>
            <summary>The "unsaved changes" banner</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">What it means</div>
                <div class="field-desc">When you see <em>"Site settings differ from the last saved version. Save them to the layout with autosave, or store a reusable org theme from the card below."</em> — it means your current Site Settings (colors, typography, stylings) are <strong>not yet written to the saved layout</strong>. The Page Designer autosaves the layout every 5 seconds, but theme changes only commit when autosave fires. If you navigate away before autosave completes, your color changes may be lost.</div>
              </div>
              <div class="field-row">
                <div class="field-name">What to do</div>
                <div class="field-desc">Either wait a moment for autosave to fire (watch for the floppy disk icon to pulse in the toolbar), click the <strong>Save</strong> button manually, or use the <strong>Save as Org Theme</strong> card below the message to persist your color settings as a reusable theme independent of the layout file.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Your Org Themes</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Saved Org Themes</div>
                <div class="field-desc">Themes created with the <strong>Theme Creator</strong> (in Color Scheme) are stored here as reusable org themes. Click any org theme to apply it instantly — it sets all Color Scheme tokens to your branded colors. Your org themes are available across <em>all events</em> in your organization, so you can maintain brand consistency without re-configuring colors each time.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Built-in Themes</summary>
            <div class="field-group__body">
              <p class="field-section-intro" style="padding:12px 16px 4px;">33 DaisyUI themes are built in. Each is a complete color system — clicking one sets all 12 base tokens (Primary, Secondary, Accent, Neutral, Base 100/200/300, and their content variants) at once. These are great for exploring styles quickly or as a starting point before overriding individual colors in Color Scheme.</p>
              <div class="field-row">
                <div class="field-name">Theme Dropdown</div>
                <div class="field-desc">Select from the full list of 33 themes. The dropdown and the grid below are synchronized — selecting in either updates the other. Current theme is shown at the top.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Theme Grid</div>
                <div class="field-desc">Visual chip previews showing Primary, Secondary, Accent, and Base colors for every built-in theme. Click any chip to preview it instantly on the canvas behind the panel. Notable themes: <strong>Night</strong> (dark navy, great for tech), <strong>Synthwave</strong> (neon purple/pink, bold &amp; modern), <strong>Nord</strong> (cool grey-blue, clean &amp; professional), <strong>Lofi</strong> (muted monochrome), <strong>Coffee</strong> (warm browns), <strong>Autumn</strong> (warm reds and oranges).</div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Trying built-in themes never overwrites your saved org theme. Your custom org theme stays listed under <strong>Your Org Themes</strong> — click it any time to restore your brand palette after exploring.</span></div>
        `
      },

      /* ── CUSTOM CSS ─────────────────────────────────────────── */
      {
        title: 'Custom CSS',
        screenshot: { id: 'f4-18-custom-css', ext: 'png', caption: 'Site Settings → Custom CSS editor — write any valid CSS to override the entire page' },
        content: `
          <p class="field-section-intro">Custom CSS gives you a direct escape hatch to the published page's stylesheet. Any valid CSS you enter here is injected into the event page at publish time — after all component and theme styles, so your rules take precedence.</p>

          <details class="field-group" open>
            <summary>CSS Editor</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">CSS Input</div>
                <div class="field-desc">A freeform code editor. Write any valid CSS targeting elements on your event page. Changes apply to the <strong>entire published page</strong> — header, footer, checkout form, and all components. Use browser DevTools on the preview or published page to find the correct selectors before writing rules here.</div>
              </div>
            </div>
          </details>

          <details class="field-group">
            <summary>Common Use Cases</summary>
            <div class="field-group__body">
              <div class="field-row">
                <div class="field-name">Hide an element</div>
                <div class="field-desc"><code>.bt-some-element { display: none; }</code> — Use when a component doesn't have a built-in toggle for a specific sub-element.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Custom font-size override</div>
                <div class="field-desc"><code>h1 { font-size: 3.5rem !important; }</code> — Override a specific heading size beyond what the Typography sliders allow.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Target a specific section</div>
                <div class="field-desc">Add a <strong>Section ID</strong> in the Section → Content tab (e.g. <code>hero-section</code>), then target it: <code>#hero-section { background: linear-gradient(...); }</code></div>
              </div>
            </div>
          </details>

          <div class="pro-tip"><span class="pro-tip__icon">⚠️</span><span>Custom CSS is applied to the <strong>entire page</strong>, including the checkout form. Broad selectors like <code>input { }</code> or <code>* { }</code> can break the registration experience. Test thoroughly in Preview mode before publishing.</span></div>
        `
      },

      /* ── EXPORT ────────────────────────────────────────────────── */
      {
        title: 'Export Layout JSON',
        screenshot: { id: 'ss_export_json', caption: 'Site Settings → Export — Download or Copy to Clipboard buttons' },
        content: `
          <p class="field-section-intro">Go to <strong>Site Settings → Export</strong> to download your entire page layout as a <code>.json</code> file. The export captures everything that defines your page visually:</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Export Layout JSON</div>
                <div class="field-desc">Downloads the current layout and all Site Settings as a <code>.json</code> file — every section, column, component config, theme, colors, typography, spacing, and custom CSS. <strong>Not included:</strong> Salesforce data such as tickets, sessions, speakers, and attendee records. The JSON is safe to share publicly.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Copy to Clipboard</div>
                <div class="field-desc">Copies the raw JSON to your clipboard instead of downloading a file. Useful for pasting directly into a support ticket, Slack message, or a GitHub gist.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span><strong>Export before big changes.</strong> Before selecting a new template, running a bulk import, or making sweeping color changes, export your current layout. It only takes a second and gives you a full restore point beyond what History provides.</span></div>
        `
      },

      /* ── IMPORT ────────────────────────────────────────────────── */
      {
        title: 'Import Layout JSON',
        screenshot: { id: 'ss_import_json', caption: 'Site Settings → Import JSON — paste JSON or upload a file with live validation' },
        content: `
          <p class="field-section-intro">Go to <strong>Site Settings → Import JSON</strong> to load a previously exported layout into the current event. <strong>This replaces your current layout entirely</strong> — export a backup first.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Paste JSON</div>
                <div class="field-desc">Copy a layout JSON from a file, Slack message, or another source and paste it directly into the text area. The dialog validates it in real time and shows <em>✓ Valid JSON</em> when it's ready to import.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Upload a File</div>
                <div class="field-desc">Drag and drop a <code>.json</code> file or browse your computer. The file is validated automatically before the Import button becomes active.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Import Layout</div>
                <div class="field-desc">Applies the JSON to the current event, replacing all sections, columns, components, and Site Settings. Use cases: applying a design from a previous event, sharing layouts between orgs, or restoring from a backup.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">⚠️</span><span>Import is <strong>destructive and immediate</strong>. The History panel lets you step back if you haven't navigated away — but always export a backup before importing.</span></div>
        `
      },

      /* ── PAGE CACHE ────────────────────────────────────────────── */
      {
        title: 'Page Cache',
        screenshot: { id: 'f4-19-page-cache', ext: 'png', caption: 'Site Settings → Page Cache — Clear Page Cache button with scope note' },
        content: `
          <p class="field-section-intro">Go to <strong>Site Settings → Page Cache</strong> when your published event page looks outdated even after saving layout changes — for example, updated colors, fonts, or component styles that aren't showing up on the live event URL.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Clear Page Cache</div>
                <div class="field-desc">Forces the public event page to immediately serve the latest Page Designer styles and layout by flushing the server-side cache. The public event URL is cached for performance — if attendees or colleagues report that your design changes aren't visible yet, use this to push them instantly.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span><strong>This only clears the Page Designer styles cache.</strong> It does not invalidate caches for Salesforce event data — tickets, sessions, speakers, sponsors, and other record data are managed separately by Salesforce and are not affected by this action. If event record data looks stale on the overview page, that is a Salesforce data sync issue, not a page cache issue.</span>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>The <strong>Page Designer preview</strong> is never cached — it always reflects your latest changes in real time. Only the public event URL served to attendees goes through the cache.</span></div>
        `
      },

      /* ── EMBED ────────────────────────────────────────────────── */
      {
        title: 'Embed on Your Website',
        screenshot: { id: 'ss_embed', caption: 'Site Settings → Embed — choose page target and copy the generated iframe snippet' },
        content: `
          <p class="field-section-intro">Go to <strong>Site Settings → Embed</strong> to generate a ready-to-paste <code>&lt;iframe&gt;</code> snippet that puts your Blackthorn Events page directly on any external website — no redirect, no separate tab.</p>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Page Target</div>
                <div class="field-desc">Choose what the iframe embeds:
                  <ul style="margin:6px 0 0 16px;font-size:12px;">
                    <li><strong>Event Overview</strong> — the full event landing page visitors see when they open the event link.</li>
                    <li><strong>Event Group</strong> — the group's public event listing page (uses the <code>g/&lt;groupKey&gt;</code> route).</li>
                    <li><strong>Cart (Dynamic)</strong> — embeds the checkout experience directly, so visitors can register without leaving your site.</li>
                  </ul>
                </div>
              </div>
              <div class="field-row">
                <div class="field-name">Layout Preset</div>
                <div class="field-desc">Controls how the iframe fills space:
                  <ul style="margin:6px 0 0 16px;font-size:12px;">
                    <li><strong>Auto Height</strong> (recommended) — the iframe grows with the content; no scrollbars.</li>
                    <li><strong>Full Viewport (100vh)</strong> — fills the entire browser height; best for standalone embed pages.</li>
                    <li><strong>Fixed Size</strong> — set a specific pixel width and height; adds a scrollbar if content overflows.</li>
                  </ul>
                </div>
              </div>
              <div class="field-row">
                <div class="field-name">Generated Snippet</div>
                <div class="field-desc">After selecting a target, a copy-ready <code>&lt;iframe&gt;</code> code block appears. Paste it into any HTML page, WordPress block, Webflow embed element, or any CMS that accepts raw HTML.</div>
              </div>
            </div>
          </div>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>Use <strong>Cart (Dynamic)</strong> to drop a registration form directly into a marketing landing page — visitors complete the checkout without ever being redirected to a Blackthorn-hosted URL.</span></div>
        `
      }

    ]
  },

  5: {
    id: 'flow-5',
    steps: [
      {
        title: 'Checkout Themes (Beta)',
        content: `
          <p>During the Beta release, theming extends to the checkout flow — your brand colors, typography, and button styles automatically carry through when attendees register. However, you won't have granular control over individual elements inside the checkout at this stage. Attendees experience the <strong>Dynamic UI</strong> during checkout, now styled with your Page Designer theme.</p>
          <div class="pro-tip"><span class="pro-tip__icon">💡</span><span>We are actively working on extending theme control deeper into the checkout experience. Soon, you'll have the flexibility to customize each element independently.</span></div>

          <h4 style="margin:1.5rem 0 0.5rem;">How It Works</h4>
          <div class="field-group" style="border:none;padding:0;margin:0;">
            <div class="field-group__body" style="border-top:none;">
              <div class="field-row">
                <div class="field-name">Theme loading</div>
                <div class="field-desc">The system loads the layout assigned to the event and applies its theme <strong>before rendering checkout pages</strong>.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Token precedence</div>
                <div class="field-desc">The layout's color variables <strong>take precedence</strong> over legacy Event Settings when a layout is present.</div>
              </div>
              <div class="field-row">
                <div class="field-name">Fallback</div>
                <div class="field-desc">If no layout is assigned, checkout falls back to the event's standard color and font settings.</div>
              </div>
            </div>
          </div>

          <h4 style="margin:1.5rem 0 0.5rem;">What Is Themed</h4>
          <ul>
            <li>Primary button colors, hover states, and text contrast throughout checkout</li>
            <li>Page and card background colors</li>
            <li>Text colors (primary, secondary, muted) on all checkout text</li>
            <li>Form field backgrounds, borders, and labels</li>
            <li>Font family across all checkout text</li>
            <li>Border radius on cards and buttons</li>
            <li>Order summary, success/failure pages, and Attendee link pages (check-in, Sessions, confirmation, cancellation)</li>
          </ul>
          <div class="pro-tip" style="border-color:#f59e0b;background:#fffbeb;">
            <span class="pro-tip__icon">⚠️</span>
            <span>Granular per-element control inside checkout is <strong>not available in v1</strong>. Branding applies globally via theme tokens — you cannot override individual checkout components yet.</span>
          </div>
        `
      },
      {
        title: 'Design Tips',
        content: `
          <ul class="tips-list">
            <li><strong>Start with a template, not a blank canvas.</strong> Choose a BT template close to your event type and customize from there — it's dramatically faster than building from scratch.</li>
            <li><strong>Set your brand theme first.</strong> Use Site Settings → Color Scheme → Theme Creator to establish your palette before touching individual components. Components inherit theme tokens automatically.</li>
            <li><strong>Preview on all three device sizes</strong> (desktop, tablet, mobile) before publishing. Columns stack on mobile by default — check that the stacking order makes sense for your content.</li>
            <li><strong>Run the accessibility checker</strong> before publishing. It flags contrast failures, missing alt text, and heading order issues in seconds.</li>
            <li><strong>Complete your Event record before designing.</strong> Page Designer pulls live data from Salesforce — populate your banner, description, sessions, speakers, and tickets first so you can see real content while you build.</li>
          </ul>
        `
      },
      {
        title: 'Performance Tips',
        content: `
          <ul class="tips-list">
            <li><strong>The Page Designer loads on demand.</strong> It only initialises when you navigate to it, keeping the rest of the Blackthorn app fast. Expect a brief load on first open.</li>
            <li><strong>Layouts are cached</strong> to speed up public page loads. If your published page looks stale after saving, go to <strong>Site Settings → Page Cache → Clear Page Cache</strong> to force an immediate refresh.</li>
            <li><strong>Optimise images before uploading.</strong> Compress large files and use appropriate dimensions before adding them to the Asset Library. While images are auto-optimised on upload, starting with a well-sized source file produces the best results.</li>
          </ul>
        `
      },
      {
        title: 'Workflow Tips',
        content: `
          <ul class="tips-list">
            <li><strong>Autosave kicks in after your first manual save.</strong> Press the floppy disk icon once to name and save your layout — from that point on, changes are saved automatically every five seconds.</li>
            <li><strong>Use Undo and Redo liberally.</strong> Up to 30 history steps are available and persist across page refreshes. The clock icon opens the full history panel with timestamps.</li>
            <li><strong>Use the Page Structure sidebar</strong> to navigate complex layouts quickly. It gives you a tree view of every section, column, and component — much faster than scrolling the canvas.</li>
            <li><strong>Use Export JSON as a backup</strong> before making big structural changes. You can re-import it instantly if something goes wrong.</li>
            <li><strong>Import JSON to apply layouts from other events.</strong> Great for creating consistent designs across a large event calendar without rebuilding from scratch each time.</li>
          </ul>
        `
      },
      {
        title: 'Frequently Asked Questions',
        content: `
          <table class="icon-table" style="width:100%;">
            <thead>
              <tr><th style="width:38%;">Issue</th><th>Suggestion</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>My webpage is blank.</strong></td>
                <td>This usually means the layout isn't assigned to an event, or no default layout exists yet. Assign a layout to the event or set a default layout from the Your Layouts modal.</td>
              </tr>
              <tr>
                <td><strong>I can't access the Page Designer.</strong></td>
                <td>Check with your Admin that the authentication process has been completed for your org.</td>
              </tr>
              <tr>
                <td><strong>My changes won't save.</strong></td>
                <td>Manually save the layout for the first save using the floppy disk icon. Autosave starts automatically after the initial save.</td>
              </tr>
              <tr>
                <td><strong>My webpage looks different on mobile.</strong></td>
                <td>This is expected. Columns stack to a single column on mobile by default. Use the tablet and mobile preview buttons in the toolbar to check and adjust your layout.</td>
              </tr>
              <tr>
                <td><strong>I switched from Dynamic, Tabbed, or Simple UI and my event page changed.</strong></td>
                <td>This is expected. The Flex UI is used for Page Designer layouts. Go to the Event record and switch the <strong>UI Experience</strong> field back to your previous setting if needed.</td>
              </tr>
              <tr>
                <td><strong>My theme colors won't apply to a component.</strong></td>
                <td>Some components have per-component color overrides that take precedence over global theme settings. Check the component's Style tab in the settings sidebar for any color overrides and clear them to restore theme inheritance.</td>
              </tr>
              <tr>
                <td><strong>Can I use the same layout for multiple events?</strong></td>
                <td>Yes — Page layouts are reusable. Go to each Event record and set <strong>UI Experience</strong> to "Page-Designer," or set the layout as the default layout so all Page Designer–tagged events use it automatically.</td>
              </tr>
            </tbody>
          </table>
        `
      }
    ]
  }
};


/* ============================================================
   COMPONENT LIBRARY SUB-FLOWS
   ============================================================ */
const SUBFLOW_INTROS = {
  '2b': {
    title: 'About Basic Components',
    content: `
      <div style="text-align:center;padding:16px 0 8px"><span style="font-size:56px">✏️</span></div>
      <h3 style="text-align:center;margin-bottom:16px">Your content, your words</h3>
      <p><strong>Basic components</strong> let you build page content entirely from your own text, images, videos, and links. They have no connection to Salesforce — what you type or configure is exactly what appears on the page.</p>
      <ul>
        <li><strong>Section &amp; Column</strong> — the layout containers that structure your page</li>
        <li><strong>Header &amp; Footer</strong> — navigation and page framing</li>
        <li><strong>Hero</strong> — immersive opening section with title, text, and background</li>
        <li><strong>Content blocks</strong> — Title, Paragraph, Rich Text, Image, Video, and more</li>
        <li><strong>Interactive</strong> — Tabs, Buttons, Icon components, FAQ, Info Cards</li>
      </ul>
      <p>There are <strong>18 Basic components</strong> in this library. Use Next / Previous or click any item in the left panel to jump directly to it.</p>
    `
  },
  '2c': {
    title: 'About Checkout Components',
    content: `
      <div style="text-align:center;padding:16px 0 8px"><span style="font-size:56px">🛒</span></div>
      <h3 style="text-align:center;margin-bottom:16px">The same checkout your attendees already trust</h3>
      <p><strong>Checkout components</strong> use the exact same registration and payment flow powering Blackthorn Events' Dynamic UI today. When attendees click Register or fill out the Checkout Form, they go through the same process they already know — just seamlessly embedded inside your custom-designed page.</p>
      <ul>
        <li>No new checkout flow to learn — it's the same logic your team already manages in Salesforce</li>
        <li>Ticket data, pricing, registration fields, and validation all come from Salesforce automatically</li>
        <li>Attendees never leave the page to complete registration (Checkout Form)</li>
        <li>Payment processing, confirmation emails, and Salesforce record creation work exactly as before</li>
      </ul>
      <p>There are <strong>2 Checkout components</strong>: <strong>Checkout Form</strong> (fully embedded inline) and <strong>Register Button</strong> (opens the standard checkout flow).</p>
    `
  },
  '2e': {
    title: 'About Event Components',
    content: `
      <div style="text-align:center;padding:16px 0 8px"><span style="font-size:56px">⚡</span></div>
      <h3 style="text-align:center;margin-bottom:16px">Salesforce data, live on your page</h3>
      <p><strong>Event components</strong> pull data directly from your Salesforce records. The Sessions, Speakers, Sponsors, Tickets, and other details you already have stored in Salesforce appear on the page automatically — no copy-pasting, no manual data entry in Page Designer.</p>
      <ul>
        <li>Data is always live — update a Salesforce record and the page reflects the change immediately</li>
        <li>Page Designer controls <em>how</em> the data is displayed (layout, colors, typography, spacing)</li>
        <li>To change the content itself, edit the underlying Salesforce records — not the page</li>
        <li>Works with Sessions, Speakers, Sponsors, Tickets, venue info, event description, and more</li>
      </ul>
      <p>There are <strong>12 Event components</strong>. Use Next / Previous or click any item in the left panel to browse them all.</p>
    `
  }
};

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

const FLOW2_GROUPS = [
  { id: 'basics',   label: 'Basics',           icon: '✏️', startTitle: SUBFLOW_INTROS['2b'].title },
  { id: 'event',    label: 'Event Components',  icon: '⚡', startTitle: SUBFLOW_INTROS['2e'].title },
  { id: 'checkout', label: 'Checkout',          icon: '🛒', startTitle: SUBFLOW_INTROS['2c'].title }
];

const FLOW4_GROUPS = [
  { id: 'color-scheme', label: 'Color Scheme', icon: '🎨' },
  { id: 'typography',   label: 'Typography',   icon: '🔤' },
  { id: 'stylings',     label: 'Stylings',     icon: '✦'  }
];


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


/* ============================================================
   STATE
   ============================================================ */
const state = {
  activeFlow: 1,
  flow2Groups: { basics: true, event: false, checkout: false },
  flow4Groups: { 'color-scheme': true, typography: false, stylings: false },
  steps: { 1: 0, 2: 0, 3: 0, 4: 0 }
};


/* ============================================================
   RENDER
   ============================================================ */
function makeStepCard(flowId, step, i) {
  const card = document.createElement('div');
  card.className = 'step-card' + (i === 0 ? ' active' : '');
  card.id = `flow-${flowId}-step-${i}`;
  const hasScreenshot = step.screenshot && step.screenshot.id;
  const bodyClass = hasScreenshot ? 'step-card__body' : 'step-card__body step-card__body--full';
  const screenshotHtml = hasScreenshot ? `
      <div class="step-card__screenshot" data-ss="${step.screenshot.id}" data-ext="${step.screenshot.ext || 'jpg'}" data-caption="${step.screenshot.caption}" role="button" tabindex="0" aria-label="Click to enlarge screenshot: ${step.screenshot.caption}">
        <img src="screenshots/${step.screenshot.id}.${step.screenshot.ext || 'jpg'}?v=${Date.now()}" alt="${step.screenshot.caption}" loading="lazy" onerror="this.parentElement.classList.add('step-card__screenshot--placeholder'); this.style.display='none'; this.parentElement.insertAdjacentHTML('afterbegin','<div style=\\'padding:40px 20px;text-align:center;color:var(--gray-400)\\'>📷<br><small>${step.screenshot.id}</small></div>')">
        <div class="step-card__screenshot-caption">${step.screenshot.caption}</div>
        <button class="step-card__screenshot-zoom" tabindex="-1" aria-hidden="true">⤢ Enlarge</button>
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

function renderStepper(flowId) {
  const list = document.getElementById('stepper-list');
  list.innerHTML = '';

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
    const steps = FLOWS[4].steps;
    const current = state.steps[4];
    const ranges = getFlow4GroupRanges();
    const renderedGroups = new Set();

    steps.forEach((step, i) => {
      if (step._group) {
        const gid = step._group;
        if (renderedGroups.has(gid)) return; // sub-items already added
        renderedGroups.add(gid);

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
          // Strip the group prefix from the label (e.g. "Color Scheme — Theme Colors" → "Theme Colors")
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

      } else {
        // Flat item (Theme, Custom CSS, Export, Import, Page Cache, Embed)
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
  document.getElementById(`flow-${flowId}-progress`).style.width = pct + '%';
  document.getElementById(`flow-${flowId}-prev`).disabled = current === 0;
  document.getElementById(`flow-${flowId}-next`).textContent =
    current === steps.length - 1 ? '✓ Done' : 'Next →';
  document.getElementById(`flow-${flowId}-next`).disabled = current === steps.length - 1;
}

function updateStepperInPlace(flowId, stepIndex) {
  document.querySelectorAll(`#stepper-list .stepper__btn[data-flow="${flowId}"]`).forEach(btn => {
    const s = parseInt(btn.dataset.step);
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
    const active = parseInt(btn.dataset.flow) === flowId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });
  document.querySelectorAll('.flow-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `flow-${flowId}-panel`);
  });
  state.activeFlow = flowId;
  renderStepper(flowId);
  updateProgress(flowId);
  if (window._syncMobileNavActive) window._syncMobileNavActive(flowId);
}


/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(ssId, caption, ext) {
  lightboxImg.src = `screenshots/${ssId}.${ext || 'jpg'}`;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


/* ============================================================
   EVENT DELEGATION
   ============================================================ */
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

  // Flow tab switch
  const flowTab = e.target.closest('.flow-tab');
  if (flowTab) {
    switchFlow(parseInt(flowTab.dataset.flow));
    return;
  }

  // Stepper step jump
  const stepBtn = e.target.closest('.stepper__btn');
  if (stepBtn) {
    goToStep(parseInt(stepBtn.dataset.flow), parseInt(stepBtn.dataset.step));
    return;
  }

  // Next / Prev buttons
  const nextBtn = e.target.closest('[id$="-next"]');
  if (nextBtn) {
    const flowId = parseInt(nextBtn.id.replace('flow-', '').replace('-next', ''));
    goToStep(flowId, state.steps[flowId] + 1);
    return;
  }
  const prevBtn = e.target.closest('[id$="-prev"]');
  if (prevBtn) {
    const flowId = parseInt(prevBtn.id.replace('flow-', '').replace('-prev', ''));
    goToStep(flowId, state.steps[flowId] - 1);
    return;
  }

  // Screenshot lightbox
  const ssEl = e.target.closest('.step-card__screenshot');
  if (ssEl) {
    openLightbox(ssEl.dataset.ss, ssEl.dataset.caption, ssEl.dataset.ext);
    return;
  }
});

// Keyboard support for screenshots
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const ssEl = document.activeElement.closest('.step-card__screenshot');
    if (ssEl) { e.preventDefault(); openLightbox(ssEl.dataset.ss, ssEl.dataset.caption, ssEl.dataset.ext); }
  }
});


/* ============================================================
   INIT
   ============================================================ */
function initMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  if (!btn || !nav || !backdrop) return;

  // Mirror the desktop flow-tabs into the mobile drawer
  const tabs = document.querySelectorAll('.flow-tabs .flow-tab');
  tabs.forEach(tab => {
    const mBtn = document.createElement('button');
    mBtn.className = 'mobile-nav-btn' + (tab.classList.contains('active') ? ' active' : '');
    mBtn.dataset.flow = tab.dataset.flow;
    mBtn.innerHTML = tab.innerHTML;
    mBtn.addEventListener('click', () => {
      const flowId = parseInt(mBtn.dataset.flow);
      switchFlow(flowId);
      closeMobileNav();
    });
    nav.appendChild(mBtn);
  });

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

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMobileNav() : openMobileNav();
  });

  backdrop.addEventListener('click', closeMobileNav);

  // Keep mobile nav active state in sync when flows switch via desktop tabs
  document.querySelectorAll('.flow-tabs .flow-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      nav.querySelectorAll('.mobile-nav-btn').forEach(mb => {
        mb.classList.toggle('active', mb.dataset.flow === tab.dataset.flow);
      });
    });
  });

  // Close drawer on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

  // Expose closeMobileNav so switchFlow can sync it
  window._closeMobileNav = closeMobileNav;
  window._syncMobileNavActive = (flowId) => {
    nav.querySelectorAll('.mobile-nav-btn').forEach(mb => {
      mb.classList.toggle('active', parseInt(mb.dataset.flow) === flowId);
    });
  };
}

function init() {
  renderFlow(1);
  renderFlow(2);
  renderFlow(3);
  renderFlow(4);
  renderFlow(5);
  switchFlow(1);
  initSearch();
  initMobileNav();
}

/* ============================================================
   SEARCH
   ============================================================ */
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
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
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
    const wordRe = new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
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
    const flowId = parseInt(item.dataset.flow);
    const stepIndex = parseInt(item.dataset.step);
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

init();
