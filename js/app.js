/**
 * QorTrade Unlisted Equities Desk - Application Controller
 * Handles Market Catalog, Institutional Stock Detail View, Financials, and Terminal Stepper
 */

(function () {
  'use strict';

  const state = {
    stocks: [...UNLISTED_STOCKS],
    filteredStocks: [...UNLISTED_STOCKS],
    activeTabCategory: 'live',
    searchQuery: '',
    currentViewTab: 'stocks',
    selectedStock: null,
    currentDetailStock: null,
    widgetUnits: 400,
    currentFinTab: 'pnl',
    theme: localStorage.getItem('qortrade_theme') || 'light'
  };

  window.currentDetailStockId = 'msei';

  const el = {
    stocksGrid: document.getElementById('stocks-grid'),
    searchInput: document.getElementById('search-input'),
    platformTabBtns: document.querySelectorAll('.platform-tab-btn'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    pageViews: document.querySelectorAll('.page-view'),

    // Modal
    modalOverlay: document.getElementById('enquiry-modal-overlay'),
    modalStockName: document.getElementById('modal-stock-name'),
    modalStockPrice: document.getElementById('modal-stock-price'),
    modalQty: document.getElementById('modal-qty'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    enquiryForm: document.getElementById('enquiry-form')
  };

  function init() {
    applyTheme(state.theme);
    setupNav();
    setupPlatformTabs();
    setupSearch();
    setupFAQ();
    setupModal();
    filterAndRender();

    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }
  }

  // =========================================================================
  // Theme Toggle
  // =========================================================================
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qortrade_theme', theme);

    if (el.themeToggleBtn) {
      el.themeToggleBtn.innerHTML = theme === 'dark'
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    }
  }

  // =========================================================================
  // Navigation (Stocks, About Us, FAQ, Stock Detail)
  // =========================================================================
  function setupNav() {
    el.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        switchTab(tab);
      });
    });

    const hash = window.location.hash.replace('#', '');
    if (['stocks', 'about', 'faq', 'detail'].includes(hash)) {
      if (hash === 'detail') {
        openStockDetail('msei');
      } else {
        switchTab(hash);
      }
    }
  }

  function switchTab(tab) {
    state.currentViewTab = tab;
    window.location.hash = tab;

    el.navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.tab === tab);
    });

    el.pageViews.forEach(view => {
      view.classList.toggle('active', view.id === `${tab}-view`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // Sub-header Tabs (Live, Upcoming, All)
  // =========================================================================
  function setupPlatformTabs() {
    el.platformTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.platformTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeTabCategory = btn.dataset.category;
        filterAndRender();
      });
    });
  }

  // =========================================================================
  // Search
  // =========================================================================
  function setupSearch() {
    if (!el.searchInput) return;

    el.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  function filterAndRender() {
    let list = [...state.stocks];

    if (state.activeTabCategory !== 'all') {
      list = list.filter(s => s.category === state.activeTabCategory);
    }

    if (state.searchQuery) {
      list = list.filter(s =>
        s.name.toLowerCase().includes(state.searchQuery) ||
        s.symbol.toLowerCase().includes(state.searchQuery) ||
        s.sector.toLowerCase().includes(state.searchQuery)
      );
    }

    state.filteredStocks = list;
    renderStocks();
  }

  // =========================================================================
  // Render Stock Cards (Matching Screenshot 1)
  // =========================================================================
  function renderStocks() {
    if (!el.stocksGrid) return;

    if (state.filteredStocks.length === 0) {
      el.stocksGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:
})();