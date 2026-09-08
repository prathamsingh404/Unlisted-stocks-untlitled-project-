# QorTrade • Institutional Pre-IPO & Unlisted Equities Desk

<p align="center">
  <img src="https://img.shields.io/badge/Platform-QorTrade-B8F228?style=for-the-badge&logoColor=111827" alt="QorTrade Platform" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-10B981?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Deployment-Netlify%20Edge-00AD9F?style=for-the-badge&logo=netlify" alt="Netlify" />
  <img src="https://img.shields.io/badge/Depository-CDSL%20%7C%20NSDL-1E3A8A?style=for-the-badge" alt="Depository" />
  <img src="https://img.shields.io/badge/Escrow-Scheduled%20Bank-059669?style=for-the-badge" alt="Escrow" />
</p>

---

## 📌 Executive Summary

**QorTrade** is an institutional-grade unlisted equity desk and intelligence terminal designed to provide qualified retail investors, High-Net-Worth Individuals (HNIs), and family offices with direct access to pre-IPO shares, unicorn secondary blocks, and late-stage private equity placements in India.

Every transaction on QorTrade is executed through **RBI-regulated scheduled bank escrow accounts** and verified off-market **CDSL/NSDL depository slips (DIS/e-DIS)**, ensuring zero counterparty default risk and verified delivery into existing retail Demat accounts.

---

## ⚡ Live Deployment & Quick Access

- **GitHub Repository**: [https://github.com/prathamsingh404/Unlisted-stocks-untlitled-project-](https://github.com/prathamsingh404/Unlisted-stocks-untlitled-project-)
- **1-Click Netlify Deploy**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/prathamsingh404/Unlisted-stocks-untlitled-project-)

---

## 🎨 Visual Design Language & Aesthetics

Inspired by modern high-performance fintech terminals (such as Linear, Ramp, and Robinhood), QorTrade features a proprietary design system built for spaciousness, visual punch, and micro-interactions:

| Token | Light Mode Value | Dark Mode Value | Usage Description |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#F4F6F0` (Chalk Sage) | `#0B0E14` (Obsidian) | Main workspace background canvas |
| `--bg-card` | `#FFFFFF` | `#131822` | Floating card surfaces with `24px` radius |
| `--accent-lime`| `#B8F228` (Electric Lime)| `#C4F835` | High-impact CTAs, return pills, badges |
| `--obsidian` | `#111827` | `#F8FAFC` | Primary text, active navigation capsules |
| `--text-muted`| `#5E6D55` | `#94A3B8` | Secondary labels, metrics, subtitles |
| `--green` | `#10B981` | `#10B981` | Positive performance deltas, live desk dot |
| `--red` | `#EF4444` | `#EF4444` | Negative growth deltas, operational losses |

---

## 🚀 Key Product Features

### 1. Market Directory & Multi-Category Filtering
- **Segment Filters**: Instantly switch between `Live Equities`, `Upcoming Unicorns`, and `All Issues`.
- **Search Engine**: Real-time filtering by company title, ISIN code, or industry sector.
- **Card Metrics Grid**: 2x2 modular display showcasing Price per share, Minimum lot units, Market Capitalization, and Price-to-Earnings ratio ($P/E$).

### 2. Comprehensive Stock Detail View (Institutional Analysis)
Clicking on any security (such as the **Metropolitan Stock Exchange of India Ltd - MSEI**) unlocks a full institutional briefing:
- **Interactive SVG Price Chart**: Smooth quadratic Bézier curves with dynamic gradient fill and timeframe selectors (`1M`, `3M`, `1Y`, `2Y`, `3Y`, `All`).
- **Core Fundamentals Grid**:
  - Current Market Price: `₹6.25`
  - Market Capitalization: `₹6,875.14 Cr`
  - Depository ISIN: `INE312K01010`
  - Face Value: `₹1`
  - Diluted EPS: `₹-0.06`
  - Price-to-Book ($P/B$) Ratio: `15.63`
  - Book Value: `₹0.40`
  - Debt-to-Equity Ratio: `0.00`
- **Audited Financial Statements (FY2019 to FY2025)**:
  - **Profit & Loss**: Revenue from Operations, Growth %, Operating Expenses, Operating Profit, Margin %, Other Income, Finance Costs, Depreciation, PBT, Tax, PAT, and Diluted EPS.
  - **Company Financials (Balance Sheet)**: Equity Capital, Reserves & Surplus, Total Equity, Non-Current Liabilities, Current Liabilities, Fixed Assets, Non-Current Assets, Trade Receivables, Cash & Equivalents, and Total Assets.
- **Visual Shareholding Pattern**: Segmented bar visualization (Multi Commodity Exchange of India Ltd 6.90% vs Others 93.10%).
- **Categorized SWOT Matrix**: Strengths (fault-tolerant infrastructure, multi-asset licensing, SEBI compliance) and Weaknesses (operational losses, competitive pressure from NSE/BSE).
- **Corporate Governance**: Complete directory of Public Interest Directors and Executive Committee officers.
- **Stock-Specific FAQs**: Covering category-specific lock-in periods, taxation, and Demat settlement steps.

### 3. Terminal Execution Desk (Sticky Buy Panel)
- **Dynamic Lot Stepper**: One-click quantity adjustments (`−` / `+`) in multiples of the minimum lot size.
- **Instant Settlement Calculation**: Real-time price multiplication with tabular numeral formatting.
- **Discount Incentive Subtext**: Displays immediate bulk order pricing benefits.
- **Custody Assurance Badge**: Verifies escrow security and CDSL/NSDL Demat delivery.

### 4. Advanced 5-Column Enterprise Footer
- **Live Status Strip**: Real-time indicator displaying off-market settlement window status (`09:15 – 15:30 IST`).
- **Institutional Badges**: ISO 27001, Bank Escrow, CDSL & NSDL Off-Market, 256-Bit SSL.
- **5 Columns**: Brand Overview, Market Segments, Investor Tools & Guides, Corporate Headquarters (BKC Mumbai), and Deal Alerts subscription form.
- **Regulatory Disclosures**: SEBI risk statements, grievance redressal officer details, and PMLA compliance policies.

---

## 🏛️ Regulatory & Indian Tax Framework (FY 2024–2026)

### Long-Term Capital Gains (LTCG) Tax
- **Holding Period Threshold**: More than **24 months** from the date of acquisition.
- **Tax Rate (Post-Budget 2024)**: Flat **12.5%** on net gains without indexation benefits (applicable on transfers on or after 23rd July 2024).

### Short-Term Capital Gains (STCG) Tax
- **Holding Period Threshold**: **24 months or less**.
- **Tax Rate**: Taxed as per the investor's applicable personal income tax slab.

### Mandatory Post-IPO Lock-in Period
- **Retail & HNI Investors**: Mandatory **6-month lock-in** from the official listing date on the stock exchange (reduced by SEBI in August 2021 from 1 year to enhance secondary liquidity).
- **Alternative Investment Funds (AIF-II)**: Exempt from lock-in restrictions.
- **Venture Capital Funds (VCFs / FVCIs)**: 6-month lock-in from acquisition date.

---

## 🛠️ Technology Stack & Architecture

- **Core Structure**: Semantic HTML5 with accessible ARIA landmarks.
- **Logic & State**: Vanilla Modern JavaScript (ES6+), zero heavy runtime dependencies, instant DOM hydration.
- **Design System**: Vanilla CSS3 using custom CSS properties (variables), Flexbox, CSS Grid, and responsive viewports.
- **Charts**: Native mathematical SVG vector rendering with customizable timeframe coordinate mappings.
- **Typography**: Plus Jakarta Sans & Inter loaded via Google Fonts CDN.
- **Hosting & CI/CD**: Netlify Static Hosting with pre-configured `netlify.toml` security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).

---

## 📂 Project Structure

```
.
├── index.html          # Main Single-Page Application (Directory, Detail, About, FAQ)
├── netlify.toml        # Netlify production edge routing & security headers
├── README.md           # Master technical & operational documentation
├── css/
│   ├── style.css       # Complete QorTrade design system, tokens, layout & footer
│   └── components.css  # Utility classes, toasts, and micro-animations
└── js/
    ├── data.js         # Comprehensive unlisted securities dataset with multi-year financials
    ├── app.js          # Reactive controller, view router, chart renderer, and order logic
    └── order-modal.js  # Order desk integration helper
```

---

## 💻 Local Development Setup

No build tools, bundlers, or heavy npm node_modules are required!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prathamsingh404/Unlisted-stocks-untlitled-project-.git
   cd Unlisted-stocks-untlitled-project-
   ```

2. **Start a local HTTP server**:
   Using Python:
   ```bash
   python -m http.server 8080
   ```
   Or using Node.js:
   ```bash
   npx serve .
   ```

3. **Open in browser**:
   Visit `http://localhost:8080` in your web browser.

---

## 🌐 Deploying to Netlify

### Option 1: Continuous Deployment via GitHub (Recommended)
1. Push your changes to the `main` branch.
2. Link your GitHub repository in the Netlify Dashboard.
3. Netlify automatically reads `netlify.toml` and deploys your site globally with HTTPS.

### Option 2: Netlify Drop
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the repository folder.
3. Your site is live immediately.

---

## ⚖️ Statutory Legal Disclaimer

*Investments in unlisted securities, pre-IPO shares, and private company equities involve liquidity, market, and valuation risks. Unlisted shares are not traded on recognized public exchanges and may be subject to transfer restrictions and lock-in periods. QorTrade facilitates secondary market transfers through authorized depository participants and bank escrow desks. Prospective buyers must conduct independent due diligence before investing.*

---

<p align="center">
  <b>QorTrade Fintech Technologies Private Limited</b><br>
  Unit 1201, B Wing, The Capital, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India<br>
  CIN: U72900MH2023PTC402918 • Desk: +91 89282 50817
</p>
