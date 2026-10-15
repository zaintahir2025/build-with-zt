/**
 * Build With ZT - Interactive Client Engine
 * Theme Switching, Search & Filters, Native Dialogs, FAQ Accordions, and Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // -------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('zt_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark');
  htmlRoot.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', nextTheme);
      localStorage.setItem('zt_portfolio_theme', nextTheme);
    });
  }

  // -------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // -------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      mobileDrawer.setAttribute('aria-hidden', (!isOpen).toString());
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 3. Projects Category Filter & Live Search
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearchInput');

  let activeFilter = 'all';
  let searchQuery = '';

  function applyProjectFilters() {
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardKeywords = (card.getAttribute('data-keywords') || '') + ' ' + (card.textContent || '');
      
      const matchesCategory = (activeFilter === 'all') || cardCategory.includes(activeFilter);
      const matchesSearch = !searchQuery || cardKeywords.toLowerCase().includes(searchQuery.toLowerCase());

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      applyProjectFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      applyProjectFilters();
    });
  }

  // -------------------------------------------------------------------------
  // 4. Project Modal Details Database (All 9 Repositories)
  // -------------------------------------------------------------------------
  const projectModal = document.getElementById('projectModal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const projectDetails = {
    voxora: {
      title: 'Voxora: Next-Gen Social Voice & Gaming Platform',
      category: 'Flutter • Supabase • WebRTC',
      description: `
        <p><strong>Voxora</strong> is an advanced, cross-platform social networking and voice communication ecosystem built using Flutter and Supabase.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Low-Latency WebRTC:</strong> Peer-to-peer real-time audio rooms with active speaker detection and echo cancellation.</li>
          <li><strong>Supabase Real-Time Engine:</strong> Instant presence updates, pub/sub direct messaging, and social feeds.</li>
          <li><strong>Integrated AI Gaming:</strong> Built-in multiplayer mini-games powered by AI decision nodes directly inside voice rooms.</li>
          <li><strong>60 FPS Flat UI:</strong> Responsive across mobile and desktop web browsers.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, Supabase, WebRTC, Riverpod, GitHub Pages CI/CD.</p>
      `,
      liveDemo: 'https://zaintahir2025.github.io/voxora-social-voice-chat/',
      github: 'https://github.com/zaintahir2025/voxora-social-voice-chat'
    },
    lingu_ai: {
      title: 'LinguAI: Enterprise Gamified AI Language Platform',
      category: 'Flutter • Dart Serverpod • Gemini API',
      description: `
        <p><strong>LinguAI</strong> is an enterprise-grade language learning application engineered with Flutter and Dart Serverpod, bringing AI pedagogy into interactive mobile experiences.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>SuperMemo (SM-2) Spaced Repetition:</strong> Algorithmic memory retention scheduling based on cognitive mastery intervals.</li>
          <li><strong>Google Gemini AI Tutoring:</strong> Real-time conversational tutoring with dynamic grammar corrections and feedback.</li>
          <li><strong>Bi-directional Localization:</strong> English and Urdu support with native text-to-speech voice synthesis.</li>
          <li><strong>Enterprise Security:</strong> JWT token rotation and server-verified Stripe monetization.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart Serverpod, Google Gemini REST API, Stripe, SM-2 Algorithm.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/lingu_ai'
    },
    ustaad: {
      title: 'Ustaad: Service-Booking App for Informal Economy',
      category: 'Flutter • Automated CI/CD • Responsive Web',
      description: `
        <p><strong>Ustaad Service App</strong> is an on-demand marketplace engineered specifically to connect skilled informal workers (electricians, technicians, plumbers) with local consumers.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Automated CI/CD Workflow:</strong> End-to-end GitHub Actions pipelines ensuring automated linting, test suites, and live web deployments.</li>
          <li><strong>Responsive Multi-Platform:</strong> Seamlessly unified UI across mobile screens, tablets, and desktop browsers.</li>
          <li><strong>Streamlined Dispatch:</strong> Simplified request flow reducing friction for non-technical users.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, GitHub Actions CI/CD, GitHub Pages.</p>
      `,
      liveDemo: 'https://zaintahir2025.github.io/ustaad-agentic-service-app/',
      github: 'https://github.com/zaintahir2025/ustaad-agentic-service-app'
    },
    budget_os: {
      title: 'Budget OS: Offline-First Hybrid Personal Finance',
      category: 'Flutter • Hive • Cloud Firestore',
      description: `
        <p><strong>Budget OS</strong> is a high-performance personal financial manager built with a resilient offline-first hybrid database model.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Hybrid Database Architecture:</strong> High-speed local persistence with Hive for sub-millisecond local reads/writes, backed by Cloud Firestore synchronization.</li>
          <li><strong>Smart Decision Engine:</strong> Custom heuristics analyzing recurring expenses and advising on budget limits.</li>
          <li><strong>Encrypted PDF Reporting:</strong> Secure export of transaction history and monthly statements.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, Hive Local DB, Firebase Cloud Firestore, PDF Generation.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/budget-os-app'
    },
    embrace: {
      title: 'Embrace: Privacy-Focused Biometric Journaling',
      category: 'Flutter • Biometrics • Material 3',
      description: `
        <p><strong>Embrace</strong> is an offline-first mental wellness and reflective journaling application prioritizing zero-knowledge user privacy and mindful analytics.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Biometric Security:</strong> Fingerprint and Face Unlock security keeping personal thoughts safe locally.</li>
          <li><strong>Heatmap Visualizations:</strong> Contribution-style calendar matrices tracking mood continuity and habits over time.</li>
          <li><strong>Material 3 Interface:</strong> Fluid dynamic color theming, adaptive typography, and intuitive reflection prompts.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, Biometric Auth, Material 3, Offline Storage.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/embrace-app'
    },
    retail_analytics: {
      title: 'Enterprise Retail Analytics Engine',
      category: 'Python • Flask • dbt • Snowflake • Gemini',
      description: `
        <p><strong>Enterprise Retail Analytics Engine</strong> is a complete end-to-end data pipeline and intelligence dashboard designed for large-scale transaction analytics.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Modern Data Stack:</strong> dbt transformation models operating over a Snowflake cloud data warehouse.</li>
          <li><strong>Flask Backend API:</strong> High-throughput REST API serving aggregated metrics to front-end clients.</li>
          <li><strong>Generative Insights:</strong> Google Gemini API integration summarizing sales trends and inventory anomalies.</li>
          <li><strong>Automated Dashboard:</strong> Continuous deployment to GitHub Pages.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, Flask, dbt, Snowflake, Google Gemini, GitHub Pages.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/enterprise-retail-analytics-engine'
    },
    cgpa: {
      title: 'Intelligent CGPA Calculator & Academic Forecaster',
      category: 'Flutter • fl_chart • Cross-Platform',
      description: `
        <p><strong>CGPA Calculator</strong> is an intelligent cross-platform application (Mobile, Web, Desktop) built to help students analyze and project their academic trajectories.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Predictive Forecasting Engine:</strong> Heuristic models projecting target GPA requirements for future semesters.</li>
          <li><strong>Visual Analytics:</strong> Custom charts and trend lines utilizing <code>fl_chart</code>.</li>
          <li><strong>Responsive Masonry Grid:</strong> Dynamically adjusts semester cards across any screen size.</li>
          <li><strong>Transcript Export:</strong> Formatted academic PDF reports ready for print.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, fl_chart, Masonry Layout, PDF Export.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/cgpa-calculator'
    },
    blog_app: {
      title: 'Cross-Platform Reader & Publishing Platform',
      category: 'Flutter • Riverpod • Adaptive Theme',
      description: `
        <p><strong>Blog App</strong> demonstrates advanced reactive state management using Riverpod in an editorial and publishing setting.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Immutable State Management:</strong> Riverpod providers ensuring predictable state transitions and effortless testing.</li>
          <li><strong>Dynamic Theming:</strong> Instant zero-lag toggle between light and dark reader modes.</li>
          <li><strong>Reading Activity Tracking:</strong> Bookmarks, reading history, and content engagement counters.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, Riverpod, Local Storage.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/blog_app'
    },
    hangman: {
      title: 'Hangman Pro: High-Performance Programmatic Game',
      category: 'Flutter • Custom Painter • 60 FPS',
      description: `
        <p><strong>Hangman Pro</strong> highlights Flutter's rendering capabilities through custom 2D canvas drawing and smooth animations.</p>
        <h4>Key Technical Highlights:</h4>
        <ul>
          <li><strong>Programmatic Graphics:</strong> Zero raster images—every element is drawn on-the-fly using Flutter's <code>CustomPainter</code>.</li>
          <li><strong>Deterministic Game State:</strong> Clean architecture separating game logic from UI rendering.</li>
          <li><strong>Fluid Responsive Scaling:</strong> Pixel-perfect presentation whether played on a small mobile device or large desktop monitor.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Flutter, Dart, CustomPainter, AnimationControllers.</p>
      `,
      liveDemo: null,
      github: 'https://github.com/zaintahir2025/hangman-pro'
    }
  };

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      const data = projectDetails[projectKey];

      if (data && projectModal) {
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.description;

        let footerHtml = '';
        if (data.liveDemo) {
          footerHtml += `
            <a href="${data.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>Launch Live App</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `;
        }
        if (data.github) {
          footerHtml += `
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>View GitHub Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          `;
        }
        modalFooter.innerHTML = footerHtml;
        projectModal.showModal();
      }
    });
  });

  if (modalCloseBtn && projectModal) {
    modalCloseBtn.addEventListener('click', () => projectModal.close());
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) projectModal.close();
    });
  }

  // -------------------------------------------------------------------------
  // 5. Copy Email Button with Toast Popover
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailVal = document.getElementById('emailVal');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(message) {
    if (!toastNotification) return;
    toastMessage.textContent = message;

    if (typeof toastNotification.showPopover === 'function') {
      try {
        toastNotification.showPopover();
      } catch (err) {
        toastNotification.classList.add('visible');
      }
    } else {
      toastNotification.classList.add('visible');
    }

    setTimeout(() => {
      if (typeof toastNotification.hidePopover === 'function') {
        try {
          toastNotification.hidePopover();
        } catch (err) {
          toastNotification.classList.remove('visible');
        }
      } else {
        toastNotification.classList.remove('visible');
      }
    }, 2800);
  }

  if (copyEmailBtn && emailVal) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailVal.textContent.trim());
        showToast('Email copied to clipboard: ' + emailVal.textContent.trim());
      } catch (err) {
        showToast('Direct email: ' + emailVal.textContent.trim());
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. FAQ Accordion (Services Page)
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Interactive Contact Planner Form Handler
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const senderName = document.getElementById('senderName');
  const senderEmail = document.getElementById('senderEmail');
  const projectType = document.getElementById('projectType');
  const budgetRange = document.getElementById('budgetRange');
  const timeline = document.getElementById('timeline');
  const messageText = document.getElementById('messageText');
  const formStatus = document.getElementById('formStatus');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      let isValid = true;

      if (!senderName.value.trim()) {
        if (nameError) nameError.style.display = 'block';
        isValid = false;
      } else {
        if (nameError) nameError.style.display = 'none';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(senderEmail.value.trim())) {
        if (emailError) emailError.style.display = 'block';
        isValid = false;
      } else {
        if (emailError) emailError.style.display = 'none';
      }

      if (!messageText.value.trim()) {
        if (messageError) messageError.style.display = 'block';
        isValid = false;
      } else {
        if (messageError) messageError.style.display = 'none';
      }

      if (isValid) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Preparing project inquiry...';

        const subject = encodeURIComponent(`Project Inquiry: ${projectType ? projectType.value : 'Mobile/Web Build'} - from ${senderName.value}`);
        const body = encodeURIComponent(
          `Hi Zain,\n\nName: ${senderName.value}\nEmail: ${senderEmail.value}\nProject Type: ${projectType ? projectType.value : 'General'}\nEstimated Budget: ${budgetRange ? budgetRange.value : 'Flexible'}\nTarget Timeline: ${timeline ? timeline.value : 'ASAP'}\n\nProject Details:\n${messageText.value}\n\nLooking forward to hearing from you!`
        );

        showToast('Inquiry drafted! Launching your email client...');

        setTimeout(() => {
          window.location.href = `mailto:zaintahir.dev@gmail.com?subject=${subject}&body=${body}`;
        }, 600);
      }
    });
  }
});
