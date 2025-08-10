# Uganda Police Exodus Sacco — PWA Prototype

## What this includes
- React-based prototype UI (single-page) with routes for Dashboard, Savings, Withdrawals, Loans, Payments, Branch Locator, and Transactions.
- Basic PWA files (manifest + service worker) for offline caching.
- OpenStreetMap (Leaflet) demo for branch / ATM locator with custom marker icons.
- Voice input helpers for accessibility (Web Speech API usage shown in forms).
- Local offline queue using localforage for pending submissions.
- Multilingual UI toggle (text content placeholders; you'll want to add translations).

## How to run
1. Install Node.js (>=18) and then run `npm install`.
2. Create placeholder icon files (`public/icons/icon-192.png`, `public/icons/icon-512.png`) or provide actual PNG icons for the manifest. <!-- Added note -->
3. `npm run start` to run the dev server via Vite.
4. Build: `npm run build`.

## Integration notes
- Replace demo account balances and transaction logic with secure API endpoints.
- For file uploads (IDs), integrate a backend with secure file storage and virus scanning.
- Payment gateways: integrate Mobile Money providers, Google Pay, PayPal, and Binance via their SDKs and server-side signing.
- For biometric auth, integrate platform-specific flows (WebAuthn or native wrappers in Android/iOS wrappers).
- Add role-based access and strict validation — Force Number and IPPS validation should happen on the server.
- Leaflet requires custom marker icons due to bundler path issues; this is handled in `App.jsx`. <!-- Added note -->

## Future improvements
- Real-time notifications (web push), OTP verification, 2FA.
- Full translations and RTL support if needed (e.g., using `i18next`).
- Accessibility audit and testing with screen readers.
- Add code splitting for routes to improve performance.
- Cache map tiles for offline use in the Branch Locator.
