# Hisaab

Hisaab is a production-style personal finance, investment and expense management interface designed around realistic Pakistani financial routines. It combines a public product website with a complete responsive finance workspace.

## Highlights

- Financial overview with internally consistent PKR totals and cash-flow analytics
- Searchable, filterable transaction table with add-transaction flow
- Category budgets with live status thresholds
- Investment holdings, calculated gains and portfolio allocation
- Savings goals, upcoming bills and recurring-payment views
- Reports with print-friendly styling
- Notification centre, global search and persistent light/dark themes
- Simulated sign-in with validation and loading feedback
- Live USD/PKR reference-rate request with graceful offline fallback
- Responsive layouts, keyboard focus, semantic tables and accessible labels

All account connections, market prices and authentication are clearly presented as portfolio-demo simulations. Hisaab does not claim to provide banking security, regulatory compliance, investment advice or live bank access.

## Technology

HTML5, CSS3, JavaScript ES6+, React 19, React Router DOM, React Hooks, Context API, Tailwind CSS, Fetch API, Vinext/Vite and Cloudflare-compatible Sites output.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. The homepage links to the demo workspace. The sign-in screen accepts the pre-filled demo details or any valid email and password of at least six characters.

## Production build

```bash
npm run build
```

## REST API

`src/services/exchangeApi.js` requests the latest USD/PKR reference rate from the public Frankfurter REST API. The investment page handles loading, invalid responses, service failures and rate limiting, while the rest of the product remains usable with local demo data.

## Project structure

```text
app/                  Routes, metadata and global styles
src/components/       Shared application shell and charts
src/context/          Finance preferences and demo state
src/data/             Coherent accounts, transactions and portfolio data
src/services/         REST API integration
src/utils/            Financial formatting and calculations
public/               Site icons and social-preview asset
tests/                Render/build checks
```

## Suggested commit history

1. `chore: initialise React finance workspace`
2. `feat: add Hisaab design system and marketing page`
3. `feat: build routed finance dashboard`
4. `feat: add transactions budgets and bills`
5. `feat: add investments goals and reports`
6. `feat: integrate exchange-rate service with fallbacks`
7. `fix: refine responsive and accessible interactions`
8. `docs: complete portfolio documentation`

## Portfolio notes

The sample names, transactions and financial records are fictional but deliberately plausible. No real personal financial information is included. Add final screenshots after deployment if you plan to feature the project in a case study.
