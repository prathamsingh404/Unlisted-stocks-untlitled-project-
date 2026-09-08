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
        : `<svg width="20" heig
})();