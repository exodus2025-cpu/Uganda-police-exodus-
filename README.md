Uganda Police Exodus Sacco App "Mobile app for Uganda Police Exodus Sacco management."
About The Uganda Police Exodus Sacco App is a Progressive Web App (PWA) designed to streamline financial management for Uganda Police Sacco members. It provides a user-friendly platform for managing savings, withdrawals, loans, shares, utility payments, and more, tailored specifically for the Uganda Police community. The app supports offline functionality, multilingual access, and enhanced security features to ensure accessibility and safety for all users.
Features
Savings Management:
Deposit savings with a minimum of UGX 30,000 (no maximum limit).
Input reason for savings and upload proof of identity (warrant or Force ID photo).
Track savings balance.
Withdrawals:
Withdraw savings with a minimum of UGX 30,000 and a maximum of UGX 100,000,000.
Requires reason, Force Number, IPPS Number, and ID proof upload.
Loan Products:
Apply for loans (minimum UGX 10,000) with purpose specification.
Track loan application status.
Secure submission with Force Number, IPPS Number, and ID proof.
Shares & Dividends:
Purchase shares at UGX 30,000 each.
Withdraw shares (minimum UGX 30,000, maximum UGX 100,000,000).
Track dividends and share value, with reason and ID proof requirements.
Utility Payments:
Pay for electricity, airtime, school fees, transport, and insurance.
Integrated payment gateways: Mobile Money, Google Pay, PayPal, Binance (crypto).
Mandatory reason for payment and optional comments.
Branch & ATM Locator:
Interactive map and list to locate Sacco branches and ATMs across Uganda.
Powered by OpenStreetMap for accurate geolocation.
Account Balances:
Real-time access to account details and transaction history.
Linked bank accounts and mobile money wallets for seamless transactions.
Member Access & Security:
Secure login with Force Number and IPPS Number validation.
Photo upload for warrant or Force ID as proof of identity.
Planned biometric authentication (fingerprint login).
Speech Recognition:
Voice input for forms and navigation to assist visually impaired users.
Powered by Web Speech API for accessibility.
Multilingual Support:
Available in English, Luganda, Luo, Kiswahili, Ateso, Runyankole, and Lunyoro.
Language toggle for localized content.
Education Section:
Learn about Exodus Sacco and access investment and saving tips.
Dedicated module for financial education.
Contact & Feedback:
Contact support via phone (+256-700-123-456) or email (support@exodussacco.ug).
Comment section for transactions and general feedback.
UI/UX Enhancements:
Custom fonts (Roboto, Open Sans) and color scheme (blue, white, gold).
Responsive design for mobile and desktop.
Offline Functionality:
PWA with service worker caching for offline access to key features.
Future Enhancements:
Real-time notifications for transactions and updates.
Integration with external financial systems and insurance providers popular among the police community.
Intuitive dashboard for improved user experience.
Getting Started This app is under active development as a Progressive Web App (PWA). To test or contribute:
Clone the Repository: git clone https://github.com/exodus2025-cpu/Uganda-police-exodus-.git
Install Dependencies:
No additional dependencies are required for the PWA. Ensure you have a modern browser (e.g., Chrome) for testing.
For map functionality, the app uses Leaflet.js (included via CDN).
Optional: Add Google Fonts for custom typography by including the following in index.html:
�

Run the App:
Open index.html in a browser (preferably Chrome on Android) to test the PWA.
Install as a PWA by selecting “Add to Home Screen” on Android or desktop.
For local testing, use a simple HTTP server (e.g., python -m http.server or XAMPP).
Deploy Online (Optional):
Host on GitHub Pages, Netlify, or another static hosting service for online access.
Contributing Contributions are welcome! To contribute:
Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature-name").
Push to the branch (git push origin feature-name).
Submit a pull request.
Please ensure your code follows the app’s modular structure and includes comments for clarity.
Future Plans
Dashboard: Develop an intuitive dashboard with visual summaries of savings, shares, and loans.
External Integrations: Connect with real payment gateways (e.g., MTN Mobile Money, PayPal) and insurance providers used by the Uganda Police community.
Biometric Login: Implement fingerprint authentication for enhanced security.
Real-Time Notifications: Add push notifications for transaction confirmations and Sacco updates.
Expanded Multilingual Content: Complete translations for all supported languages.
Native App Support: Package the PWA for native Android and iOS apps using tools like PWABuilder.
Folder Structure Uganda-police-exodus-/ ├── index.html           # Main app page ├── styles.css           # Styling with custom fonts and colors ├── app.js               # Core logic, form validation, and speech recognition ├── manifest.json        # PWA metadata ├── service-worker.js    # Offline caching ├── assets/              # Icons and placeholder images │   ├── icon-192.png │   ├── icon-512.png ├── data/                # Mock data for branches and education │   ├── branches.json
Notes
Payment Gateways: The current app uses mock integrations for Mobile Money, Google Pay, PayPal, and Binance. For production, obtain API keys from respective providers.
Testing: Test speech recognition in Chrome (requires microphone access). Ensure Force Number format (UPF-XXXX-XXXX) and file uploads (PNG/JPG, max 5MB) work as expected.
Hosting: For a live demo, deploy to a free hosting service like Netlify or GitHub Pages.
For issues or feature requests, contact the development team at support@exodussacco.ug
