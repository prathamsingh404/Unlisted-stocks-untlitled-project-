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
      { metric: "Profit After Tax", vals: ["-34.22", "-48.74", "-18.67", "-31.67", "-31.08",
];