/**
 * QorTrade Unlisted Equities Comprehensive Dataset
 * Contains detailed fundamentals, multi-year P&L, balance sheets, shareholding, and executive data
 */

const UNLISTED_STOCKS = [
  {
    id: "msei",
    name: "Metropolitan Stock Exchange of India Ltd",
    shortName: "Metropolitan Stock Exchan...",
    symbol: "MSE",
    sector: "Exchange",
    category: "live",
    priceRange: "₹6.15 - ₹6.25",
    price: 6.25,
    minUnits: 400,
    marketCap: "₹6,875.14 Cr",
    peRatio: "-",
    isin: "INE312K01010",
    faceValue: "₹1",
    eps: "₹-0.06",
    pbRatio: "15.63",
    bookValue: "₹0.40",
    debtEquity: "0",
    settlementPeriod: "18 Sep 2026",
    upcomingIPO: "Expected 2026",
    description: "The Metropolitan Stock Exchange of India (MSEI), established in 2008, is a national-level stock exchange that facilitates trading in equities, derivatives, and currency instruments. Recognized by the Securities and Exchange Board of India (SEBI), MSEI aims to enhance market accessibility and transparency through advanced technology and innovative trading solutions.",
    logoText: "XMSE",
    logoColor: "#FFFFFF",
    logoBorder: "#E5E7EB",
    logoTextColor: "#E11D48",
    priceChange1Y: "+2.15 (52.44%) 1 Y",
    tag: "Top Gainer",

    // Financial Statements (FY2019 to FY2025)
    financialYears: ["FY2025", "FY2024", "FY2023", "FY2022", "FY2021", "FY2020", "FY2019"],
    profitAndLoss: [
      { metric: "Revenue from Operations", vals: ["4.31", "7.36", "9.21", "10.06", "10.63", "10.29", "8.04"] },
      { metric: "Growth %", vals: ["-41.44%", "-20.09%", "-8.45%", "-5.36%", "3.30%", "27.99%", "-"] },
      { metric: "Operating Expenses", vals: ["46.87", "61.60", "58.34", "45.24", "51.12", "52.69", "59.16"] },
      { metric: "Growth %", vals: ["-23.91%", "5.59%", "28.96%", "-11.50%", "-2.98%", "-10.94%", "-"] },
      { metric: "Operating Profit", vals: ["-42.56", "-54.24", "-49.13", "-35.18", "-40.49", "-42.40", "-51.12"] },
      { metric: "Op. Profit Margin %", vals: ["-987.47%", "-736.96%", "-533.44%", "-349.70%", "-380.90%", "-412.05%", "-"] },
      { metric: "Other Income", vals: ["13.07", "13.69", "45.44", "15.00", "21.82", "26.72", "27.16"] },
      { metric: "Finance Costs", vals: ["0.26", "0.98", "0.39", "0.60", "0.83", "1.59", "1.11"] },
      { metric: "Depreciation", vals: ["5.10", "6.06", "10.65", "10.48", "11.17", "12.94", "13.38"] },
      { metric: "Profit Before Tax", vals: ["-34.85", "-47.59", "-14.73", "-31.26", "-30.67", "-30.21", "-38.45"] },
      { metric: "Tax", vals: ["-0.63", "-1.15", "3.94", "0.41", "0.41", "15.56", "2.14"] },
      { metric: "Tax %", vals: ["1.81%", "2.42%", "-26.75%", "-1.31%", "-1.34%", "-51.51%", "-5.57%"] },
      { metric: "Profit After Tax", vals: ["-34.22", "-48.74", "-18.67", "-31.67", "-31.08", "-45.77", "-40.59"] },
      { metric: "Growth %", vals: ["29.79%", "161.06%", "-41.05%", "1.90%", "-32.10%", "12.76%", "-"] },
      { metric: "PAT %", vals: ["-793.97%", "-662.23%", "-202.71%", "-314.81%", "-292.38%", "-444.80%", "-504.85%"] },
      { metric: "Diluted EPS", vals: ["-0.06", "-0.1", "-0.04", "-0.06", "-0.06", "-0.1", "-0.08"] }
    ],
    balanceSheet: [
      { metric: "Equity Capital", vals: ["599.92", "480.52", "480.52", "480.52", "480.52", "480.52", "480.52"] },
      { metric: "Reserves", vals: ["-203.20", "-109.36", "-158.07", "-188.77", "-219.84", "-239.11", "-287.73"] },
      { metric: "Total Equity", vals: ["396.72", "371.16", "322.45", "291.75", "260.68", "241.41", "192.79"] },
      { metric: "Borrowings", vals: ["0.00", "0", "0", "0", "0", "0", "0"] },
      { metric: "Provisions", vals: ["0.07", "0.31", "0.46", "0.39", "0.29", "0.23", "0.17"] },
      { metric: "Deferred Tax Liability", vals: ["0.00", "107.77", "112.65", "124.24", "125.94", "22.02", "18.88"] },
      { metric: "Total Non Current Liabilities", vals: ["30.11", "108.08", "113.11", "124.63", "126.23", "22.25", "19.05"] },
      { metric: "Borrowings (Current)", vals: ["0.00", "24.15", "0", "0", "0", "0", "0"] },
      { metric: "Other Current Liabilities", vals: ["17.03", "68.65", "66.44", "61.01", "51.11", "35.72", "37.35"] },
      { metric: "Total Current Liabilities", vals: ["17.03", "92.80", "66.44", "61.01", "51.11", "35.72", "37.35"] },
      { metric: "Fixed Assets (incl. WIP)", vals: ["8.70", "42.79", "28.87", "27.44", "24.25", "14.14", "11.53"] },
      { metric: "Other Non Current Assets", vals: ["176.64", "109.28", "250.62", "79.45", "106.47", "82.58", "76.09"] },
      { metric: "Total Non Current Assets", vals: ["185.34", "152.07", "279.49", "106.89", "130.72", "96.72", "87.62"] },
      { metric: "Trade Receivables", vals: ["0.85", "1.34", "1.17", "1.60", "4.21", "1.30", "2.61"] },
      { metric: "Cash & Cash Equivalents", vals: ["95.74", "379.61", "160.12", "247.93", "230.84", "92.17", "14.76"] },
      { metric: "Other Current Assets", vals: ["161.93", "62.29", "77.42", "135.15", "86.00", "109.19", "144.20"] },
      { metric: "Total Current Assets", vals: ["258.52", "443.24", "238.71", "384.68", "321.05", "202.66", "161.57"] },
      { metric: "Total Assets", vals: ["443.86", "595.31", "518.20", "491.57", "451.77", "299.38", "249.19"] }
    ],

    // Shareholding Pattern
    shareholding: [
      { holder: "Multi Commodity Exchange Of India Ltd", percent: 6.90 },
      { holder: "Others", percent: 93.10 }
    ],

    // Strengths & Weaknesses
    strengths: [
      { title: "Technological Infrastructure", desc: "Fault-tolerant trading systems with real-time data replication across primary, near, and disaster recovery sites ensure high availability and security. Compliance with SEBI's cyber security framework and certifications like ISO/IEC 27001:2013 and ISO 9001:2015." },
      { title: "Product Diversity", desc: "Offers trading in multiple asset classes such as currency derivatives, equity cash and F&O segments, sovereign gold bonds, and ETFs. Niche indices like SX40 and SXBANK cater to sector-specific performance tracking." },
      { title: "Educational Initiatives", desc: "Financial literacy programs targeting under-represented communities and events like the 'Millennials and Responsible Investing' symposium help build investor confidence and engagement." },
      { title: "Regulatory Compliance", desc: "Recognized and regulated by SEBI, ensuring credibility, auditability, and operational transparency." }
    ],
    weaknesses: [
      { title: "Financial Losses", desc: "Decrease in revenue and continued operational losses. Dependence on limited revenue streams like transaction and listing fees, which have been declining." },
      { title: "Market Share Challenges", desc: "Struggles to establish significant market presence amidst fierce competition from NSE and BSE." },
      { title: "Brand Visibility", d
];