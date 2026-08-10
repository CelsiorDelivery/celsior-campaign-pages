/* Celsior Campaign Shell
   Stable campaign copy derived from the Celsior website shell.
   Main website source remains independent and untouched.
*/
(function () {
  "use strict";

  const CONFIG = Object.assign({
    websiteBase: "https://celsiortech.com",
    campaignAssetBase: "/assets",
    logoPath: "/assets/brand/celsior-logo.svg",
    faviconPath: "/assets/brand/celsior-favicon.svg",
    injectHeader: true,
    injectFooter: true,
    preserveToolNavbar: true,
    removeToolFooter: false
  }, window.CelsiorShellConfig || {});

  const WEBSITE_BASE = CONFIG.websiteBase.replace(/\/+$/, "");
  const LOGO = CONFIG.logoPath;

  const activePage = null;
  const CHEVRON_SVG = `<svg class="chevron" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ARROW_SVG = `<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const navItems = [
    { key: 'solve', label: 'Our Focus', href: '/our-focus' },
    { key: 'how', label: 'Capabilities', href: '/capabilities' },
    { key: 'deliver', label: 'Solutions', href: '/solutions' },
    { key: 'ai', label: 'AI &amp; Innovation', href: '/ai-innovation/celsior-ai-lab' },
    { key: 'industries', label: 'Industries', href: '/industries' },
    { key: 'partners', label: 'Partner Network', href: '/partners' },
    { key: 'about', label: 'About', href: '/about' },
  ];

  const navLinksHTML = navItems.map(it => `
    <li class="nav-item${activePage === it.key ? ' nav-current' : ''}" data-menu="${it.key}">
      <a class="nav-link" role="button" tabindex="0" aria-haspopup="true" data-href="${it.href}">${it.label} ${CHEVRON_SVG}</a>
    </li>`).join('');

  const drawerDivHTML = `

    <!-- ═══════════════════════════════════════════════════════════
         MOBILE DRAWER  —  one <a href="..."> per line for easy editing
         Placeholder links point to the parent page.
         Search for "/* ← LINK */" to jump to any individual URL.
         ═══════════════════════════════════════════════════════════ -->

    <!-- ── OUR FOCUS ──────────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-solve">Our Focus<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-solve">

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Priorities</div>
          <a href="/our-focus/ai-first-digital-engineering">AI-First Digital Engineering</a>
          <a href="/our-focus/ai-adoption">AI Adoption</a>
          <a href="/our-focus/risk-and-compliance">Risk &amp; Compliance</a>
        </div>

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Outcomes</div>
          <a href="/our-focus/cost-and-efficiency">Cost &amp; Efficiency</a>
          <a href="/our-focus/digital-experience">Digital Experience</a>
        </div>

      </div>
    </div>

    <!-- ── CAPABILITIES ───────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-how">Capabilities<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-how">

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Engineering</div>
          <a href="/capabilities/ai-led-engineering">AI Led Engineering</a>
          <a href="/capabilities/cloud-and-infrastructure-engineering">Cloud &amp; Infrastructure Engineering</a>
          <a href="/capabilities/ai-and-data">AI &amp; Data</a>
        </div>

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Operations</div>
          <a href="/capabilities/digital-operations-and-security">Digital Operations &amp; Security</a>
          <a href="/capabilities/security-and-governance">Security &amp; Governance</a>
        </div>



      </div>
    </div>

    <!-- ── SOLUTIONS ──────────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-deliver">Solutions<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-deliver">

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Programs</div>
          <a href="/solutions/managed-programs">Managed Programs</a>
          <a href="/solutions/technology-consulting">Technology Consulting</a>
          <a href="/solutions/ai-upskilling">AI Upskilling</a>
        </div>

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Global Delivery</div>
          <a href="/solutions/gcc-and-nearshore">GCC &amp; Nearshore</a>
        </div>

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Talent Models</div>
          <a href="/solutions/teams-as-a-service">Teams-as-a-Service</a>
        </div>

      </div>
    </div>

    <!-- ── AI & INNOVATION ────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-ai">AI &amp; Innovation<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-ai">

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Products</div>
          <a href="/ai-innovation/synthetix">Synthetix</a>
          <a href="/ai-innovation/celsior-ai-lab">Celsior AI Lab</a>
          <a href="/ai-innovation/design-lab">Design Lab</a>
        </div>

        <div class="drawer-sub-group">
          <div class="drawer-sub-head">Programs</div>
          <a href="/ai-innovation/frameworks-accelerators">Frameworks &amp; Accelerators</a>
        </div>

      </div>
    </div>

    <!-- ── INDUSTRIES ─────────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-ind">Industries<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-ind">

        <div class="drawer-sub-group">
          <a href="/industries/banking-financial-services">Banking &amp; Financial Services</a>
          <a href="/industries/insurance">Insurance</a>
          <a href="/industries/healthcare">Healthcare</a>
        </div>

      </div>
    </div>

    <!-- ── PARTNER ECOSYSTEM ──────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-part">Partner Network<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-part">

        <div class="drawer-sub-group">
          <a href="/partners">Partner Network</a>
        </div>

      </div>
    </div>

    <!-- ── ABOUT ──────────────────────────────────────────────── -->
    <div class="drawer-item">
      <div class="drawer-link" data-drawer-toggle="d-about">About<svg class="drawer-chevron" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="drawer-sub" id="d-about">

        <div class="drawer-sub-group">
          <a href="/about/who-we-are">Who we are + Our Leadership</a>
          <a href="/about/ai-first-philosophy">AI-first Philosophy</a>
          <a href="/success-stories">Success Stories</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">Careers</a>
          <a href="/about">Events &amp; News</a>
        </div>

      </div>
    </div>

`;

  const FEATURE_IMG = 'https://res.cloudinary.com/dyhze7fmf/image/upload/f_auto,q_auto:good,w_1600/celsior-new-website/fd85d9f6b205b835d020b87cf50dfc5490c63510_ntepey.png';
  const ITEM_CHEV = `<svg viewBox="0 0 12 12" fill="none"><path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const IC_DOC = `<svg viewBox="0 0 24 24" fill="none"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 16.5h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const IC_CHART = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 4v15a1 1 0 0 0 1 1h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M9 14l3-3 2.5 2.5L19 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ASSESS_ICONS = [IC_DOC, IC_CHART];


  const shouldInjectNav = CONFIG.injectHeader !== false;
  const shouldInjectFooter = CONFIG.injectFooter !== false;

  function websiteUrl(value) {
    if (!value || typeof value !== "string") return value;

    if (
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("mailto:") ||
      value.startsWith("tel:") ||
      value.startsWith("#")
    ) {
      return value;
    }

    if (value.startsWith("/")) {
      return WEBSITE_BASE + value;
    }

    return value;
  }

  const MEGA_DATA = [
    {
      id: 'solve', label: 'Our Focus', title: 'AI-First Digital Engineering',
      desc: 'We build intelligent digital products and platforms that unlock efficiency, resilience, and growth.',
      explore: { label: 'Learn More', href: '/our-focus/ai-first-digital-engineering' },
      items: [
        { label: 'AI-First Digital Engineering', href: '/our-focus/ai-first-digital-engineering' },
        { label: 'AI Adoption', href: '/our-focus/ai-adoption' },
        { label: 'Risk &amp; Compliance', href: '/our-focus/risk-and-compliance' },
        { label: 'Cost &amp; Efficiency', href: '/our-focus/cost-and-efficiency' },
        { label: 'Digital Experience', href: '/our-focus/digital-experience' },
      ],
      feature: { cap: '<em>AI-First</em> digital engineering that evolves at the speed of your business.', title: 'AI-First Digital Engineering', desc: 'Build intelligent products, automate workflows, and modernize technology platforms with AI-driven engineering solutions.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781203449/our-focus-feature_awakwx.mp4' },
      assessTag: 'Pre Assessment',
      assess: [
        { title: 'Modernization Readiness Index', href: '/assessment-tools/modernization-readiness', desc: 'Score your modernization readiness with a prioritized roadmap.' },
        { title: '72 Hours Codebase Assessment', href: '/assessment-tools/codebase-assessment', desc: 'Automated review of your codebase delivered in 72 hours.' },
      ],
    },
    {
      id: 'how', label: 'Capabilities', title: 'Engineering &amp; Operations',
      desc: 'Modern engineering capabilities that move regulated enterprises faster, safer, and smarter.',
      explore: { label: 'Learn More', href: '/capabilities/ai-led-engineering' },
      items: [
        { label: 'AI Led Engineering', href: '/capabilities/ai-led-engineering' },
        { label: 'Cloud &amp; Infrastructure Engineering', href: '/capabilities/cloud-and-infrastructure-engineering' },
        { label: 'AI &amp; Data', href: '/capabilities/ai-and-data' },
        { label: 'Digital Operations &amp; Security', href: '/capabilities/digital-operations-and-security' },
        { label: 'Security &amp; Governance', href: '/capabilities/security-and-governance' },
      ],
      feature: { cap: '<em>Platform engineering</em> built for scale and resilience.', title: 'Platform Engineering at Scale', desc: 'Golden paths for global banks with 200+ engineering teams, delivered with governance built in from day one.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781206076/capabilities-feature_umennw.mp4' },
      assessTag: 'Pre Assessment',
      assess: [
        { title: 'GRC Maturity', href: '/assessment-tools/grc-assessment', desc: 'Assess governance, risk, and compliance maturity across your estate.' },
        { title: 'Guidewire Programme Health', href: '/assessment-tools/guidewire-programme-health', desc: 'Benchmark the health and delivery risk of your Guidewire programme.' },
      ],
    },
    {
      id: 'deliver', label: 'Solutions', title: 'Global Delivery Models',
      desc: 'Flexible operating models that match your scale, speed, and talent strategy.',
      explore: { label: 'Learn More', href: '/solutions/gcc-and-nearshore' },
      items: [
        { label: 'Managed Programs', href: '/solutions/managed-programs' },
        { label: 'Technology Consulting', href: '/solutions/technology-consulting' },
        { label: 'AI Upskilling', href: '/solutions/ai-upskilling' },
        { label: 'GCC &amp; Nearshore', href: '/solutions/gcc-and-nearshore' },
        { label: 'Teams-as-a-Service', href: '/solutions/teams-as-a-service' },
      ],
      feature: { cap: '<em>The right model</em> for your scale and goals.', title: 'GCC vs. Teams-as-a-Service', desc: 'Compare cost, control, and speed side by side to find the right operating model for your enterprise.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781205650/solutions-feature_bvxk2o.mp4' },
      assessTag: 'Pre Assessment',
      assess: [
        { title: '72 Hours Codebase Assessment', href: '/assessment-tools/codebase-assessment', desc: 'Automated review of your codebase delivered in 72 hours.' },
        { title: 'GRC Maturity', href: '/assessment-tools/grc-assessment', desc: 'Assess governance, risk, and compliance maturity across your estate.' },
      ],
    },
    {
      id: 'ai', label: 'AI &amp; Innovation', title: 'AI &amp; Innovation',
      desc: 'Products, labs, and frameworks that turn AI ambition into production reality.',
      explore: { label: 'Learn More', href: '/ai-innovation/synthetix' },
      items: [
        { label: 'Synthetix', href: '/ai-innovation/synthetix' },
        { label: 'Celsior AI Lab', href: '/ai-innovation/celsior-ai-lab' },
        { label: 'Design Lab', href: '/ai-innovation/design-lab' },
        { label: 'Frameworks &amp; Accelerators', href: '/ai-innovation/frameworks-accelerators' },
      ],
      feature: { cap: '<em>Synthetix</em> orchestrates policy, claims, and risk in real time.', title: 'Synthetix in Action', desc: 'See how our AI orchestration layer connects critical systems with enterprise-grade governance.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781204152/ai-innovation-feature_xmhaon.mp4' },
      assessTag: 'Live Demo',
      assess: [
        { title: 'AI Readiness Index', href: 'https://ai.celsiortech.us/', desc: 'Benchmark your AI maturity against industry peers.' },
        { title: 'GenAI Accelerators', href: '/ai-innovation/frameworks-accelerators', desc: 'Ship copilots and agentic workflows in weeks, not quarters.' },
      ],
    },
    {
      id: 'industries', label: 'Industries', title: 'Industries We Serve',
      desc: 'Deep domain expertise across the most regulated and complex sectors.',
      explore: { label: 'Learn More', href: '/blogs' },
      items: [
        { label: 'Banking &amp; Financial Services', href: '/industries/banking-financial-services' },
        { label: 'Insurance', href: '/industries/insurance' },
        { label: 'Healthcare', href: '/industries/healthcare' },
      ],
      feature: { cap: '<em>Modernize</em> without disruption.', title: 'Regulated Industry Playbook', desc: 'How leading banks, insurers, and health systems modernize critical systems with confidence.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781204851/industries-feature_paiw9p.mp4' },
      assessTag: 'Industry Brief',
      assess: [
        { title: 'Prior Authorization', href: '/assessment-tools/prior-auth-roi', desc: 'AI-driven prior authorization for faster, compliant approvals.' },
        { title: 'Risk &amp; Resilience Index', href: '/our-focus/risk-and-compliance', desc: 'Benchmark operational resilience against sector peers.' },
      ],
    },
    {
      id: 'partners', label: 'Partner Network', title: 'Partner Network',
      desc: 'A curated network of technology and implementation partners that amplify outcomes.',
      explore: { label: 'Learn More', href: '/partners' },
      items: [
        { label: 'Partner Network', href: '/partners' },
      ],
      partnerLogos: [
        { label: 'Jack Henry', href: '/jack-henry', src: 'https://res.cloudinary.com/dyhze7fmf/image/upload/celsior-new-website/25_qqbbin.png' },
        { label: 'ServiceNow', href: '/servicenow', src: 'https://res.cloudinary.com/dyhze7fmf/image/upload/celsior-new-website/26_pr8qv6.png' },
        { label: 'Guidewire', href: '/guidewire', src: '/assets/images/partners/GW_COE.svg', className: 'mega-logo--gw-coe' },
      ],
      feature: { cap: '<em>Join</em> the Celsior ecosystem.', title: 'Become a Partner', desc: 'Partner with Celsior to deliver AI-first transformation for regulated enterprises worldwide.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781205216/partner-ecosystem-feature_jz8fm1.mp4' },
      assessTag: 'Partnerships',
      assess: [
        { title: 'Alliance Programs', href: '/partners', desc: 'Co-build and co-sell with our technology partners.' },
        { title: 'Integration Library', href: '/ai-innovation/frameworks-accelerators', desc: 'Pre-built accelerators across leading platforms.' },
      ],
    },
    {
      id: 'about', label: 'About', title: 'About Celsior',
      desc: 'Engineering-first culture, global teams, and a mission built for regulated enterprises.',
      explore: { label: 'Learn More', href: '/' },
      items: [
        { label: 'Who we are + Our Leadership', href: '/about/who-we-are' },
        { label: 'AI-first Philosophy', href: '/about/ai-first-philosophy' },
        { label: 'Blogs', href: '/blogs' },
      ],
      feature: { cap: '<em>Who We Are</em> — Engineering excellence and global collaboration.', title: 'Who We Are', desc: 'Building AI-first digital enterprises through engineering excellence, innovation, and global collaboration.', video: 'https://res.cloudinary.com/dyhze7fmf/video/upload/f_mp4,q_auto:good,w_720/v1781203709/about-feature_sgqog4.mp4' },
      assessTag: 'Join Us',
      assess: [
        { title: 'Open Roles', href: 'https://pyramidci.com/career-overview/', desc: 'Explore engineering and consulting opportunities worldwide.' },
        { title: 'Our Leadership', href: '/about/who-we-are#leadership', desc: 'Meet the team driving Celsior\'s mission and vision.' },
      ],
    },
  ];

  /* Per-option feature copy — the middle feature card swaps to this on hover (SP 12-Jun, mapped from Celsior-Mega Menu Content.docx) */
  const FEATURE_DESCS = {
    'AI Adoption': 'Structured programs that take AI initiatives from proof of concept to production at enterprise scale.',
    'Risk &amp; Compliance': 'Technology solutions that satisfy regulatory requirements and strengthen audit readiness across regulated industries.',
    'Cost &amp; Efficiency': 'Automation and cloud optimization that reduce operating costs without sacrificing delivery quality.',
    'Digital Experience': 'Research-led product design and engineering that improves customer and employee experiences across every channel.',
    'AI-First Digital Engineering': 'AI-First digital engineering platform built with intelligence and a human loop at every layer, from architecture to deployment.',
    'AI Led Engineering': 'Faster software delivery through AI-assisted design, testing, and deployment across the full development lifecycle.',
    'Cloud &amp; Infrastructure Engineering': 'Multi-cloud architecture, migration, and managed infrastructure built for regulated, high-availability environments.',
    'AI &amp; Data': 'Data engineering and AI model deployment for enterprises that need governed, production-ready intelligence.',
    'Digital Operations &amp; Security': 'Continuous monitoring, incident response, and secure operations management for complex digital environments.',
    'Security &amp; Governance': 'Enterprise security architecture and governance frameworks that protect assets and satisfy regulatory requirements.',
    'Managed Programs': 'End-to-end program delivery where Celsior owns accountability from planning through execution and support.',
    'Technology Consulting': 'Strategic advisory that translates business objectives into executable technology roadmaps and architecture decisions.',
    'GCC &amp; Nearshore': 'Global Capability Center setup and nearshore delivery models that reduce cost and accelerate digital programs.',
    'Teams-as-a-Service': 'Pre-built, scalable engineering teams with defined roles, governance, and delivery cadence — ready to deploy.',
    'AI Upskilling': 'Structured training programs that build enterprise workforce capability in applied AI, data, and engineering.',
    'Synthetix': "Celsior's AI-first platform for building, running, and governing enterprise applications at speed and scale.",
    'Celsior AI Lab': 'Applied research and rapid prototyping that turns emerging AI capabilities into production-grade enterprise solutions.',
    'Design Lab': 'Human-centered design studio delivering research-led UX and interaction systems for complex enterprise products.',
    'Frameworks &amp; Accelerators': 'Pre-built accelerators and delivery toolkits that compress time-to-value across Celsior engineering engagements.',
    'Banking &amp; Financial Services': 'Technology and AI services for banks, capital markets, and fintech firms navigating modernization and compliance.',
    'Insurance': 'End-to-end digital and AI services across policy, underwriting, claims, and distribution for carriers and MGAs.',
    'Healthcare': 'Digital transformation and AI services for payors, providers, pharma, and medical device companies.',
    'Partners': 'A certified ecosystem of technology alliances — ServiceNow, Guidewire, Jack Henry, AWS, and more.',
    'ServiceNow': 'Certified implementation and managed services for enterprise workflow transformation and ITSM programs.',
    'Guidewire': 'Certified technical partnership delivering implementation, integration, and managed services for insurance carriers.',
    'Jack Henry': 'FIN member partnership enabling deep integration and digital modernization for community banks and credit unions.',
    'Who we are + Our Leadership': 'A digital engineering firm built on 30 years of Pyramid Consulting heritage, serving 125+ Fortune 500 clients.',
    'AI-first Philosophy': 'Intelligence is not a feature Celsior adds — it is how every engagement is designed, built, and delivered.',
    'Success Stories': 'Measurable outcomes across banking, insurance, and healthcare from Celsior engineering and AI programs.',
    'Blogs': 'Technical perspectives and industry analysis from Celsior practitioners across engineering, AI, and data.',
    'Careers': "Engineering, consulting, and AI roles on programs that matter, across the world's most complex industries.",
    'Events &amp; News': 'Conference appearances, press releases, and announcements from Celsior Technologies and Pyramid Consulting.',
  };

  /* Per-option video overlay captions — swapped on hover alongside title/desc */
  const FEATURE_CAPS = {
    'AI Adoption': '<em>AI adoption</em> programs that move from proof of concept to production.',
    'Risk &amp; Compliance': '<em>Risk &amp; compliance</em> engineering that satisfies regulators by design.',
    'Cost &amp; Efficiency': '<em>Cost &amp; efficiency</em> engineering that optimizes without compromise.',
    'Digital Experience': '<em>Digital experience</em> engineering that puts the customer journey first.',
    'AI-First Digital Engineering': '<em>AI-First</em> digital engineering that evolves at the speed of your business.',
    'AI Led Engineering': '<em>AI-led engineering</em> that accelerates delivery across the full lifecycle.',
    'Cloud &amp; Infrastructure Engineering': '<em>Cloud infrastructure</em> built for regulated, high-availability environments.',
    'AI &amp; Data': '<em>AI &amp; Data</em> engineering for governed, production-ready intelligence.',
    'Digital Operations &amp; Security': '<em>Secure operations</em> management for complex digital environments.',
    'Security &amp; Governance': '<em>Security &amp; governance</em> frameworks that protect and comply.',
    'Managed Programs': '<em>Managed programs</em> with end-to-end delivery accountability.',
    'Technology Consulting': '<em>Technology consulting</em> that translates strategy into architecture.',
    'GCC &amp; Nearshore': '<em>Global delivery</em> models that reduce cost and accelerate programs.',
    'Teams-as-a-Service': '<em>Scalable teams</em> with defined roles, governance, and delivery cadence.',
    'AI Upskilling': '<em>AI upskilling</em> programs that build enterprise workforce capability.',
    'Synthetix': '<em>Synthetix</em> orchestrates policy, claims, and risk in real time.',
    'Celsior AI Lab': '<em>AI Lab</em> turning emerging capabilities into production-grade solutions.',
    'Design Lab': '<em>Design Lab</em> delivering research-led UX for complex enterprise products.',
    'Frameworks &amp; Accelerators': '<em>Accelerators</em> that compress time-to-value across engagements.',
    'Banking &amp; Financial Services': '<em>Banking &amp; financial services</em> modernization and compliance.',
    'Insurance': '<em>Insurance</em> digital transformation across the value chain.',
    'Healthcare': '<em>Healthcare</em> digital transformation for payors, providers, and pharma.',
    'Partners': '<em>Join</em> the Celsior ecosystem.',
    'ServiceNow': '<em>ServiceNow</em> implementation and managed services for enterprises.',
    'Guidewire': '<em>Guidewire</em> certified partnership for insurance carriers.',
    'Jack Henry': '<em>Jack Henry</em> integration and modernization for community banking.',
    'Who we are + Our Leadership': '<em>Engineering-first</em> culture, global impact.',
    'AI-first Philosophy': '<em>AI-first philosophy</em> embedded in every engagement.',
    'Success Stories': '<em>Measurable outcomes</em> across regulated industries.',
    'Blogs': '<em>Technical perspectives</em> from Celsior practitioners.',
    'Careers': '<em>Join a team</em> building the future of AI-first engineering.',
    'Events &amp; News': '<em>Events &amp; news</em> from Celsior Technologies.',
  };

  function buildMegaPanel(d) {
    const items = d.items.map(it => {
      const fdesc = (FEATURE_DESCS[it.label] || d.feature.desc).replace(/"/g, '&quot;');
      const fcap = (FEATURE_CAPS[it.label] || d.feature.cap).replace(/"/g, '&quot;');
      return `<a class="mz-item" href="${it.href}" data-ftitle="${it.label}" data-fdesc="${fdesc}" data-fcap="${fcap}">${it.label} ${ITEM_CHEV}</a>`;
    }).join('');
    const pills = d.partnerLogos
      ? `<div class="partner-logo-grid">${d.partnerLogos.map(p => `<a class="partner-logo-card mz-item" href="${p.href}" title="${p.label}" data-ftitle="${p.label}" data-fdesc="${(FEATURE_DESCS[p.label] || d.feature.desc).replace(/"/g, '&quot;')}" data-fcap="${(FEATURE_CAPS[p.label] || d.feature.cap).replace(/"/g, '&quot;')}"><img class="partner-logo-img${p.className ? ` ${p.className}` : ``}" src="${p.src}" alt="${p.label}" loading="lazy"/></a>`).join('')}</div>`
      : (d.pills ? `<div class="mz-pills">${d.pills.map(p => `<a class="mz-pill" href="${d.items[0].href}"><span class="p-dot"></span>${p}</a>`).join('')}</div>` : '');
    const assess = d.assess.map((a, i) => `
        <a class="mz-assess-card" href="${a.href || d.explore.href}">
          <div class="mz-assess-icon">${ASSESS_ICONS[i % ASSESS_ICONS.length]}</div>
          <div><div class="mz-assess-title">${a.title}</div><div class="mz-assess-desc">${a.desc}</div></div>
        </a>`).join('');
    return `
  <div class="mega-panel" id="menu-${d.id}">
    <div class="mega-inner">
      <div class="mega-zone">
        <div class="mz-label">${d.label}</div>
        <h3 class="mz-title">${d.title}</h3>
        <p class="mz-desc">${d.desc}</p>
        <div class="mz-list">${items}</div>
        ${pills}
      </div>
      <div class="mega-zone">
        <a class="mz-feature-card" href="${d.explore.href}">
          ${d.feature.video
        ? `<video class="mz-feature-img" autoplay muted loop playsinline preload="auto" poster="${FEATURE_IMG}"><source src="${d.feature.video}" type="video/mp4"></video>`
        : `<img class="mz-feature-img" src="${FEATURE_IMG}" alt="${d.feature.title}" loading="lazy"/>`}
          <div class="mz-feature-cap">${d.feature.cap}</div>
        </a>
        <div class="mz-feature-body">
          <div class="mz-feature-title">${d.feature.title}</div>
          <p class="mz-feature-desc">${d.feature.desc}</p>
          <a class="mz-explore" href="${d.explore.href}">${d.explore.label} ${ARROW_SVG}</a>
        </div>
      </div>
      <div class="mega-zone">
        <div class="mz-assess-label">${d.assessTag}</div>
        <div class="mz-assess-cards">${assess}</div>
      </div>
    </div>
  </div>`;
  }

  const megaPanelsHTML = MEGA_DATA.map(buildMegaPanel).join('\n');


  let backdropEl = document.getElementById('mega-backdrop');
  let navEl = document.getElementById('navbar');
  let drawerEl = document.getElementById('mobileDrawer');
  let megaRoot = document.getElementById('megaRoot');

  if (shouldInjectNav) {
    const oldNav = document.getElementById('navbar');
    if (oldNav) oldNav.remove();
    const oldBackdrop = document.getElementById('mega-backdrop');
    if (oldBackdrop) oldBackdrop.remove();
    const oldDrawer = document.getElementById('mobileDrawer');
    if (oldDrawer) oldDrawer.remove();
    const oldMegaRoot = document.getElementById('megaRoot');
    if (oldMegaRoot) oldMegaRoot.remove();

    // Inject backdrop + nav root
    backdropEl = document.createElement('div');
    backdropEl.id = 'mega-backdrop';
    document.body.insertBefore(backdropEl, document.body.firstChild);

    navEl = document.createElement('nav');
    navEl.id = 'navbar';
    navEl.innerHTML = `
      <a href="/" class="nav-logo">
        <img src="${LOGO}" alt="Celsior" class="logo-img"/>
      </a>
      <ul class="nav-links" id="navLinks">${navLinksHTML}</ul>
      <div class="nav-right">
        <a href="/contact-us" class="btn-nav-solid">Contact us ${ARROW_SVG}</a>
      </div>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
        <span class="ham-line"></span><span class="ham-line"></span><span class="ham-line"></span>
      </button>`;
    document.body.insertBefore(navEl, document.body.firstChild);

    /* Feature video fallback — if the video fails to load, show the image instead */
    navEl.querySelectorAll('video.mz-feature-img').forEach(v => {
      const toImage = () => {
        if (v.dataset.fbDone) return;
        v.dataset.fbDone = '1';
        const img = document.createElement('img');
        img.className = 'mz-feature-img';
        img.src = v.getAttribute('poster');
        img.alt = '';
        v.replaceWith(img);
      };
      v.addEventListener('error', toImage);
      const src = v.querySelector('source');
      if (src) src.addEventListener('error', toImage);
      /* also fall back only if literally nothing has loaded (quota/interstitial cases) */
      setTimeout(() => { if (v.readyState === 0 && v.networkState !== 2) toImage(); }, 15000);
      /* nudge playback when the menu opens (some browsers defer hidden-video autoplay) */
      const nudge = () => { if (v.paused && !v.dataset.fbDone) v.play().catch(() => { }); };
      const host = v.closest('.mega') || v.closest('[class*="mega"]') || navEl;
      host.addEventListener('mouseenter', nudge);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) nudge(); });
    });

    // Drawer
    drawerEl = document.createElement('div');
    drawerEl.className = 'mobile-drawer';
    drawerEl.id = 'mobileDrawer';
    drawerEl.innerHTML = `
      <div class="drawer-backdrop" id="drawerBackdrop"></div>
      <div class="drawer-panel">
        <div class="drawer-header">
          <img src="${LOGO}" alt="Celsior" class="drawer-logo"/>
          <button class="drawer-close" id="drawerClose" aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>
        <nav class="drawer-nav">${drawerDivHTML}</nav>
        <div class="drawer-cta">
          <a href="/contact-us" class="drawer-cta-btn">Contact us ${ARROW_SVG}</a>
        </div>
      </div>`;
    document.body.insertBefore(drawerEl, navEl.nextSibling);

    // Mega root
    megaRoot = document.createElement('div');
    megaRoot.className = 'mega-root';
    megaRoot.id = 'megaRoot';
    megaRoot.innerHTML = megaPanelsHTML;
    document.body.insertBefore(megaRoot, drawerEl.nextSibling);

    /* ─── 3b.  AUGMENT MOBILE DRAWER WITH MEGA CARDS ────────────────
       Inject the rich content (feature card + assessment cards + pills)
       from MEGA_DATA into each .drawer-sub so the mobile experience
       mirrors the desktop mega menu. Original drawer link groups are
       preserved untouched. */
    const DRAWER_MEGA_MAP = {
      'd-solve': 'solve', 'd-how': 'how', 'd-deliver': 'deliver', 'd-ai': 'ai',
      'd-ind': 'industries', 'd-part': 'partners', 'd-about': 'about'
    };
    Object.keys(DRAWER_MEGA_MAP).forEach(function (subId) {
      const sub = drawerEl.querySelector('#' + subId);
      if (!sub) return;
      const data = MEGA_DATA.find(function (m) { return m.id === DRAWER_MEGA_MAP[subId]; });
      if (!data) return;
      const pillsHTML = data.partnerLogos
        ? `<div class="drawer-partner-grid">${data.partnerLogos.map(function (p) { return `<a class="drawer-partner-card" href="${p.href}" title="${p.label}"><img class="drawer-partner-logo" src="${p.src}" alt="${p.label}" loading="lazy"/></a>`; }).join('')}</div>`
        : (data.pills ? `<div class="drawer-mega-pills">${data.pills.map(function (p) { return `<a href="${data.items[0].href}"><span class="p-dot"></span>${p}</a>`; }).join('')}</div>` : '');
      const assessHTML = (data.assess || []).map(function (a, i) {
        return `<a class="drawer-mega-card" href="${data.explore.href}">
          <div class="ic">${ASSESS_ICONS[i % ASSESS_ICONS.length]}</div>
          <div class="bd"><div class="t">${a.title}</div><div class="d">${a.desc}</div></div>
        </a>`;
      }).join('');
      const mega = document.createElement('div');
      mega.className = 'drawer-mega';
      mega.innerHTML = `
        <a class="drawer-mega-feature" href="${data.explore.href}" aria-label="${data.feature.title}">
          ${data.feature.video
            ? `<video class="drawer-mega-feature-video" autoplay muted loop playsinline preload="auto" poster="${FEATURE_IMG}"><source src="${data.feature.video}" type="video/mp4"></video>`
            : `<img src="${FEATURE_IMG}" alt="${data.feature.title}" loading="lazy"/>`}
          <div class="drawer-mega-cap">${data.feature.cap}</div>
        </a>
        <a class="drawer-mega-explore" href="${data.explore.href}">${data.explore.label} ${ARROW_SVG}</a>
        ${pillsHTML}
        ${data.assessTag ? `<div class="drawer-mega-assess-label">${data.assessTag}</div>` : ''}
        <div class="drawer-mega-assess">${assessHTML}</div>
      `;
      sub.appendChild(mega);
    });

    /* Video fallback + nudge for mobile drawer videos */
    drawerEl.querySelectorAll('video.drawer-mega-feature-video').forEach(function (v) {
      var toImage = function () {
        if (v.dataset.fbDone) return;
        v.dataset.fbDone = '1';
        var img = document.createElement('img');
        img.src = v.getAttribute('poster');
        img.alt = '';
        v.replaceWith(img);
      };
      v.addEventListener('error', toImage);
      var src = v.querySelector('source');
      if (src) src.addEventListener('error', toImage);
      setTimeout(function () { if (v.readyState === 0 && v.networkState !== 2) toImage(); }, 15000);
    });

    /* Nudge drawer videos to play when their section expands */
    drawerEl.querySelectorAll('[data-drawer-toggle]').forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var subId = toggle.getAttribute('data-drawer-toggle');
        var sub = drawerEl.querySelector('#' + subId);
        if (!sub) return;
        setTimeout(function () {
          sub.querySelectorAll('video.drawer-mega-feature-video').forEach(function (v) {
            if (v.paused && !v.dataset.fbDone) v.play().catch(function () {});
          });
        }, 100);
      });
    });
  }


  /* ─── 4.  FOOTER HTML ─────────────────────────────────────────────── */
  const footerEl = document.createElement('footer');
  footerEl.className = 'site-footer-light';
  footerEl.id = 'siteFooterLight';
  const CF_CHEV = `<svg viewBox="0 0 12 12" fill="none"><path d="M4 2.5L7.5 6L4 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function cfCol(head, links) {
    return `<div class="cf-col"><p class="cf-col-head">${head}</p><nav class="cf-col-links">${links.map(l => `<a href="${l.href}" class="cf-col-link"><span>${l.label}</span>${CF_CHEV}</a>`).join('')
      }</nav></div>`;
  }

  footerEl.innerHTML = `
  <div class="cf-wrap">
    <div class="cf-top">
      <div class="cf-brand">
        <a href="/"><img src="${LOGO}" alt="Celsior" class="cf-logo"/></a>
        <p class="cf-tagline">AI-first digital engineering partner for regulated industries—modernizing critical systems, operationalizing AI, and building resilience at scale.</p>
        <p class="cf-connect">Connect with us</p>
        <div class="cf-social">
          <a href="https://www.linkedin.com/company/celsior-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <!-- Other social icons hidden for now:
          <a href="#" aria-label="X / Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25h6.988l4.26 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg></a>
          <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          -->
        </div>
        <p class="cf-col-head" style="margin:34px 0 14px;">Contact</p>
        <div class="cf-contact-line">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>
          <span>Celsior Technologies<br/>3060 Kimball Bridge Road, Suite 200<br/>Alpharetta, GA 30022, USA</span>
        </div>
        <div class="cf-contact-line">
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 16l1 4v0a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          <a href="tel:+16785143500">678-514-3500</a>
        </div>
        <div class="cf-contact-line">
          <svg viewBox="0 0 24 24" fill="none"><path d="M6 9V3h12v6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 14h12v7H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M17 12h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          <a href="tel:+16789354489">678-935-4489</a>
        </div>
        <div class="cf-contact-line">
          <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          <a href="mailto:info@celsiortech.com">info@celsiortech.com</a>
        </div>
      </div>
      ${cfCol('About', [
    { label: 'Who we are', href: '/about/who-we-are' },
    { label: 'AI first philosophy', href: '/about/ai-first-philosophy' },
    { label: 'Blogs', href: '/blogs' },
  ])}
      ${cfCol('Our Focus', [
    { label: 'AI-First Digital Engineering', href: '/our-focus/ai-first-digital-engineering' },
    { label: 'AI Adoption', href: '/our-focus/ai-adoption' },
    { label: 'Risk &amp; Compliance', href: '/our-focus/risk-and-compliance' },
    { label: 'Cost &amp; Efficiency', href: '/our-focus/cost-and-efficiency' },
    { label: 'Digital Experience', href: '/our-focus/digital-experience' },
  ])}
      ${cfCol('Capabilities', [
    { label: 'AI-Led Engineering', href: '/capabilities/ai-led-engineering' },
    { label: 'Cloud &amp; Infrastructure', href: '/capabilities/cloud-and-infrastructure-engineering' },
    { label: 'AI &amp; Data', href: '/capabilities/ai-and-data' },
    { label: 'Digital Operations &amp; Sec.', href: '/capabilities/digital-operations-and-security' },
    { label: 'Security &amp; Governance', href: '/capabilities/security-and-governance' },
  ])}
      ${cfCol('Solutions', [
    { label: 'Managed Programs', href: '/solutions/managed-programs' },
    { label: 'Technology Consulting', href: '/solutions/technology-consulting' },
    { label: 'GCC &amp; Nearshore', href: '/solutions/gcc-and-nearshore' },
    { label: 'Teams-as-a-Service', href: '/solutions/teams-as-a-service' },
    { label: 'AI Upskilling', href: '/solutions/ai-upskilling' },
  ])}
      ${cfCol('AI &amp; Innovation', [
    { label: 'Synthetix', href: '/ai-innovation/synthetix' },
    { label: 'Celsior AI Lab', href: '/ai-innovation/celsior-ai-lab' },
    { label: 'Design Lab', href: '/ai-innovation/design-lab' },
    { label: 'Frameworks &amp; Acc.', href: '/ai-innovation/frameworks-accelerators' },
  ])}
      ${cfCol('Industries', [
    { label: 'Banking &amp; Financial', href: '/industries/banking-financial-services' },
    { label: 'Insurance', href: '/industries/insurance' },
    { label: 'Healthcare', href: '/industries/healthcare' },
  ])}
    </div>
  </div>

  <div class="cf-bottom">
    <p class="cf-copyright">&copy; 2026 Pyramid Consulting, Inc. All rights reserved.</p>
    <nav class="cf-legal" aria-label="Legal">
      <a href="/assets/legal/gdpr-v1-6-072024.pdf" target="_blank" rel="noopener">GDPR</a>
      <a href="/assets/legal/ccpa-cra-v1-3-072024.pdf" target="_blank" rel="noopener">CCPA/CPRA</a>
      <a href="/assets/legal/web-privacy-policy.pdf" target="_blank" rel="noopener">Privacy</a>
      <a href="/assets/legal/pci-072025-reasonable-accomodation-policy.pdf" target="_blank" rel="noopener">Reasonable Accommodation Policy</a>
      <a href="https://www.microsoft.com/en-us/privacy/privacystatement" target="_blank" rel="noopener">Microsoft Privacy Statement</a>
      <!-- <a href="/assets/legal/web-accessibility-v1-2-072024.pdf" target="_blank" rel="noopener">Web Accessibility</a> -->
      <a href="/assets/legal/privacy-policy-introduction-v2-072024.pdf" target="_blank" rel="noopener">Privacy Introduction</a>
    </nav>
  </div>`;


  if (shouldInjectFooter) {
    const oldFooter = document.getElementById('siteFooterLight');
    if (oldFooter) oldFooter.remove();
    document.body.appendChild(footerEl);
    // Footer entrance micro-interactions (GSAP if present, IntersectionObserver-triggered)
    (function animateFooter() {
      if (typeof IntersectionObserver === 'undefined') return;
      const targets = footerEl.querySelectorAll('.cf-brand,.cf-top .cf-col,.cf-mid .cf-col,.cf-cta');
      if (typeof gsap === 'undefined') return;
      gsap.set(targets, { opacity: 0, y: 26 });
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            gsap.to(en.target, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform' });
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.15 });
      targets.forEach(t => io.observe(t));
    })();
  }

  if (!shouldInjectNav) return;

  /* ─── 5.  NAV JAVASCRIPT ──────────────────────────────────────────── */
  // Scroll state
  // Blog page: always show the "scrolled" (light) nav styling because the
  // page background is white from the top.
  const forceScrolled = activePage === 'blog';
  if (forceScrolled) {
    navEl.classList.add('scrolled', 'force-scrolled');
  }
  window.addEventListener('scroll', () => {
    if (forceScrolled) { navEl.classList.add('scrolled'); return; }
    navEl.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  if (!forceScrolled) navEl.classList.toggle('scrolled', window.scrollY > 40);


  // Desktop mega menu
  const navItemEls = navEl.querySelectorAll('.nav-item[data-menu]');
  const bdEl = backdropEl;
  let active = null, timer = null, openTimer = null;
  // Hover-intent: cursor must dwell this long on a tab before its panel opens
  // (prevents the menu firing when the cursor merely brushes past). SP 21-Jun
  const HOVER_INTENT = 140;

  function openPanel(id) {
    clearTimeout(timer);
    clearTimeout(openTimer);
    if (active === id) return;
    if (active) killPanel(active, true);
    active = id;
    navItemEls.forEach(li => li.classList.toggle('active', li.dataset.menu === id));
    const panel = document.getElementById('menu-' + id);
    if (!panel) return;
    panel.classList.add('open');
    bdEl.classList.add('on');
    if (navEl) navEl.classList.add('menu-open');
    if (typeof gsap !== 'undefined') {
      gsap.killTweensOf(panel);
      gsap.to(panel, { opacity: 1, y: 0, duration: 0.36, ease: 'power3.out' });
      gsap.from(panel.querySelectorAll('.mega-zone'), { opacity: 0, y: 10, duration: 0.34, stagger: 0.05, ease: 'power3.out', clearProps: 'opacity,transform' });
      gsap.from(panel.querySelectorAll('.mz-item,.mz-assess-card,.mz-pill'), { opacity: 0, y: 8, duration: 0.3, stagger: 0.025, ease: 'power2.out', delay: 0.08, clearProps: 'opacity,transform' });
    } else {
      panel.style.opacity = '1'; panel.style.transform = 'translateY(0)';
    }
  }

  function killPanel(id, fast) {
    const panel = document.getElementById('menu-' + id);
    if (!panel) return;
    if (typeof gsap !== 'undefined') {
      gsap.killTweensOf(panel);
      gsap.to(panel, { opacity: 0, y: -8, duration: fast ? 0.14 : 0.24, ease: 'power2.in', onComplete: () => panel.classList.remove('open') });
    } else {
      panel.classList.remove('open');
    }
    navItemEls.forEach(li => li.classList.remove('active'));
    bdEl.classList.remove('on');
    if (navEl) navEl.classList.remove('menu-open');
    active = null;
  }

  const sched = () => { timer = setTimeout(() => { if (active) killPanel(active); }, 150); };
  const cancel = () => { clearTimeout(timer); };

  navItemEls.forEach(li => {
    li.addEventListener('mouseenter', () => {
      clearTimeout(timer);      // cancel any pending close
      clearTimeout(openTimer);  // reset any pending open
      const id = li.dataset.menu;
      // A panel is already open → switch instantly. Otherwise require brief
      // hover intent so a passing cursor doesn't pop the menu.
      if (active) openPanel(id);
      else openTimer = setTimeout(() => openPanel(id), HOVER_INTENT);
    });
    li.addEventListener('mouseleave', () => { clearTimeout(openTimer); sched(); });
    /* Click opens the mega-menu only — tabs no longer navigate to a page (SP 12-Jun) */
    const trigger = li.querySelector('.nav-link');
    if (trigger) {
      const toggle = e => {
        e.preventDefault();
        clearTimeout(openTimer);  // click = explicit intent, open now
        if (active === li.dataset.menu) killPanel(li.dataset.menu);
        else openPanel(li.dataset.menu);
      };
      trigger.addEventListener('click', toggle);
      trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') toggle(e);
      });
    }
  });
  megaRoot.addEventListener('mouseenter', cancel);
  megaRoot.addEventListener('mouseleave', sched);

  /* Hover-to-preview: middle feature card swaps title/desc/cap/CTA to the hovered left option (SP 12-Jun) */
  megaRoot.querySelectorAll('.mega-panel').forEach(panel => {
    const titleEl = panel.querySelector('.mz-feature-title');
    const descEl = panel.querySelector('.mz-feature-desc');
    const capEl = panel.querySelector('.mz-feature-cap');
    const cardEl = panel.querySelector('.mz-feature-card');
    const exploreEl = panel.querySelector('.mz-explore');
    const list = panel.querySelector('.mega-zone'); /* left column — boundary for revert (covers list + partner logos) */
    if (!titleEl || !descEl || !list) return;
    const def = {
      title: titleEl.textContent, desc: descEl.textContent,
      cap: capEl ? capEl.innerHTML : '',
      card: cardEl && cardEl.getAttribute('href'),
      explore: exploreEl && exploreEl.getAttribute('href'),
    };
    const swap = (t, ds, capHTML, href) => {
      titleEl.textContent = t; descEl.textContent = ds;
      if (capEl && capHTML) capEl.innerHTML = capHTML;
      if (cardEl && href) cardEl.setAttribute('href', href);
      if (exploreEl && href) exploreEl.setAttribute('href', href);
      titleEl.classList.remove('mz-feat-pulse'); void titleEl.offsetWidth; titleEl.classList.add('mz-feat-pulse');
      descEl.classList.remove('mz-feat-pulse'); void descEl.offsetWidth; descEl.classList.add('mz-feat-pulse');
      if (capEl) { capEl.classList.remove('mz-feat-pulse'); void capEl.offsetWidth; capEl.classList.add('mz-feat-pulse'); }
    };
    panel.querySelectorAll('.mz-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        swap(item.getAttribute('data-ftitle'), item.getAttribute('data-fdesc'), item.getAttribute('data-fcap'), item.getAttribute('href'));
      });
    });
    list.addEventListener('mouseleave', () => swap(def.title, def.desc, def.cap, def.card === undefined ? null : def.card));
  });

  bdEl.addEventListener('click', () => { if (active) killPanel(active); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && active) killPanel(active); });

  // Mobile drawer
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBack = document.getElementById('drawerBackdrop');

  function openDrawer() { mobileDrawer.classList.add('open'); hamburger.classList.add('open'); document.body.classList.add('celsior-shell-menu-open'); }
  function closeDrawer() { mobileDrawer.classList.remove('open'); hamburger.classList.remove('open'); document.body.classList.remove('celsior-shell-menu-open'); }

  hamburger.addEventListener('click', () => mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer());
  drawerClose.addEventListener('click', closeDrawer);
  drawerBack.addEventListener('click', closeDrawer);

  mobileDrawer.querySelectorAll('[data-drawer-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = document.getElementById(btn.dataset.drawerToggle);
      const isOpen = sub.classList.contains('open');
      mobileDrawer.querySelectorAll('.drawer-sub.open').forEach(el => el.classList.remove('open'));
      mobileDrawer.querySelectorAll('.drawer-link.active').forEach(el => el.classList.remove('active'));
      if (!isOpen) { sub.classList.add('open'); btn.classList.add('active'); }
    });
  });
  mobileDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ─── 6.  READY SIGNAL ───────────────────────────────────────────────
     Lets pages defer work (e.g. footer entrance animations) until after
     the nav + footer are safely in the DOM.
  ─────────────────────────────────────────────────────────────────── */
  window.__celsiorSharedDone = true;
  document.dispatchEvent(new CustomEvent('celsior:shared-ready'));

  /* Normalize only links belonging to the injected Celsior shell.
     Tool-specific navigation and tool content are deliberately untouched. */
  function normalizeShellLinks() {
    const roots = [
      document.getElementById("navbar"),
      document.getElementById("mobileDrawer"),
      document.getElementById("megaRoot"),
      document.getElementById("siteFooterLight")
    ].filter(Boolean);

    roots.forEach(function (root) {
      root.querySelectorAll('a[href]').forEach(function (link) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("/")) {
          link.setAttribute("href", websiteUrl(href));
        }
      });

      root.querySelectorAll('img[src]').forEach(function (img) {
        const src = img.getAttribute("src");

        if (
          src &&
          src.startsWith("/assets/") &&
          src !== CONFIG.logoPath &&
          !src.startsWith(CONFIG.campaignAssetBase + "/brand/")
        ) {
          img.setAttribute("src", websiteUrl(src));
        }
      });
    });
  }

  normalizeShellLinks();

})();
