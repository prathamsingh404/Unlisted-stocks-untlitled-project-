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
        <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; color: var(--text-muted);">
          <div style="font-size: 1.125rem; font-weight: 600; color: var(--text-main); margin-bottom: 6px;">No stocks found</div>
          <p style="font-size: 0.9375rem;">Try switching to 'All Stocks' or adjusting your search term.</p>
        </div>
      `;
      return;
    }

    el.stocksGrid.innerHTML = state.filteredStocks.map(stock => {
      const isRange = stock.priceRange.includes('-');
      const priceLabel = isRange ? 'Price Range :' : 'Price per share';

      return `
        <div class="unlisted-card" onclick="window.openStockDetail('${stock.id}')">
          <div>
            <div class="card-header-row">
              <div class="card-logo-box" style="background-color: ${stock.logoColor}; border: 1px solid ${stock.logoBorder}; color: ${stock.logoTextColor};">
                ${stock.logoText}
              </div>
              <div class="card-title-group">
                <h3 class="card-company-name" title="${stock.name}">${stock.shortName}</h3>
                <span class="card-sector-name">${stock.sector}</span>
              </div>
            </div>

            <p class="card-description-text">
              ${stock.description.slice(0, 58)}...
              <span class="show-more-link" onclick="event.stopPropagation(); window.openStockDetail('${stock.id}')">show more</span>
            </p>

            <div class="card-divider-dotted"></div>

            <div class="card-data-grid">
              <div class="data-cell">
                <span class="data-cell-label">${priceLabel}</span>
                <span class="data-cell-val">${stock.priceRange}</span>
              </div>
              <div class="data-cell">
                <span class="data-cell-label">Minimum Units</span>
                <span class="data-cell-val">${stock.minUnits}</span>
              </div>
              <div class="data-cell">
                <span class="data-cell-label">Market Cap</span>
                <span class="data-cell-val">${stock.marketCap}</span>
              </div>
              <div class="data-cell">
                <span class="data-cell-label">P/E(x)</span>
                <span class="data-cell-val">${stock.peRatio}</span>
              </div>
            </div>
          </div>

          <button class="btn-view-details" onclick="event.stopPropagation(); window.openStockDetail('${stock.id}')">
            <span>View Details</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // Open Stock Detail Page (Matching Screenshot 2 & User Provided Data)
  // =========================================================================
  window.openStockDetail = function (stockId) {
    let stock = state.stocks.find(s => s.id === stockId);
    if (!stock) stock = state.stocks[0];

    state.currentDetailStock = stock;
    window.currentDetailStockId = stock.id;
    state.widgetUnits = stock.minUnits;

    // Breadcrumb & Hero Header Identity
    const breadcrumbEl = document.getElementById('detail-breadcrumb-name');
    if (breadcrumbEl) breadcrumbEl.textContent = stock.name;

    const heroLogo = document.getElementById('detail-hero-logo');
    if (heroLogo) {
      heroLogo.textContent = stock.logoText;
      heroLogo.style.backgroundColor = stock.logoColor;
      heroLogo.style.color = stock.logoTextColor;
      heroLogo.style.border = '1px solid ' + (stock.logoBorder || '#E2E6DA');
    }

    const titleEl = document.getElementById('detail-company-title');
    if (titleEl) titleEl.textContent = stock.name;

    const subEl = document.getElementById('detail-company-sub');
    if (subEl) subEl.textContent = `${stock.name} - Unlisted Shares`;

    // Chart Card
    document.getElementById('detail-chart-price').textContent = `₹${stock.price.toFixed(2)}`;
    document.getElementById('detail-chart-gain').textContent = stock.priceChange1Y || '+2.15 (52.44%) 1 Y';
    document.getElementById('detail-chart-badge').textContent = stock.tag || 'Top Gainer';

    // Fundamentals Grid
    const fundGrid = document.getElementById('detail-fundamentals-grid');
    fundGrid.innerHTML = `
      <div class="fund-item">
        <span class="fund-label">Current Price</span>
        <span class="fund-value">₹${stock.price.toFixed(2)}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">Market Cap</span>
        <span class="fund-value">${stock.marketCap}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">ISIN</span>
        <span class="fund-value" style="font-family: var(--font-mono); font-size: 1rem;">${stock.isin || 'INE312K01010'}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">Face Value</span>
        <span class="fund-value">${stock.faceValue || '₹1'}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">EPS</span>
        <span class="fund-value">${stock.eps || '₹-0.06'}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">P/B Ratio</span>
        <span class="fund-value">${stock.pbRatio || '15.63'}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">Book Value</span>
        <span class="fund-value">${stock.bookValue || '₹0.40'}</span>
      </div>
      <div class="fund-item">
        <span class="fund-label">Debt / Equity Ratio</span>
        <span class="fund-value">${stock.debtEquity || '0'}</span>
      </div>
    `;

    // Render Financial Tables
    renderFinancialTable();

    // Shareholding Pattern (Matching QorTrade Electric Lime & Obsidian)
    const barContainer = document.getElementById('detail-shareholding-bar');
    const legendContainer = document.getElementById('detail-shareholding-legend');
    if (stock.shareholding && stock.shareholding.length) {
      barContainer.innerHTML = stock.shareholding.map((s, idx) => `
        <div style="width: ${s.percent}%; background: ${idx === 0 ? '#111827' : '#B8F228'};" title="${s.holder}: ${s.percent}%"></div>
      `).join('');

      legendContainer.innerHTML = stock.shareholding.map((s, idx) => `
        <div class="legend-item">
          <span class="legend-color-dot" style="background: ${idx === 0 ? '#111827' : '#B8F228'}
})();