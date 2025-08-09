// Language translations (simplified)
const translations = {
    en: { savings: "Savings", withdraw: "Withdraw", shares: "Shares", pay: "Pay" },
    lg: { savings: "Okukaza", withdraw: "Okuggya", shares: "Obusika", pay: "Okusasula" },
    // Add more translations for Luo, Kiswahili, Ateso, Runyankole, Lunyoro
};

// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.activeElement.value = transcript;
};
document.getElementById('speech-btn').addEventListener('click', () => {
    recognition.start();
});

// Language toggle
document.getElementById('language-select').addEventListener('change', (e) => {
    const lang = e.target.value;
    // Update UI with translations (simplified)
    document.querySelector('#savings h2').textContent = translations[lang].savings;
    // Add more UI updates
});

// Form validations
document.getElementById('savings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('savings-amount').value;
    const forceNumber = document.getElementById('force-number').value;
    const ippsNumber = document.getElementById('ipps-number').value;
    const idProof = document.getElementById('id-proof').files[0];
    if (amount < 30000 || !forceNumber.match(/UPF-\d{4}-\d{4}/) || !idProof) {
        alert('Invalid input. Minimum UGX 30,000, valid Force Number, and ID proof required.');
        return;
    }
    alert('Savings submitted successfully!');
});

// Similar validation for withdrawals, shares, payments (omitted for brevity)

// Branch & ATM Locator
const map = L.map('map').setView([0.3476, 32.5825], 13); // Kampala
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([0.3476, 32.5825]).addTo(map).bindPopup('Exodus Sacco Branch');

// Education content (mock)
document.getElementById('education-content').innerHTML = `
    <p>Welcome to Exodus Sacco! Learn how to save and invest wisely.</p>
    <p>Tip: Save at least 10% of your income monthly.</p>
`;

// Contact form
document.getElementById('contact-submit').addEventListener('click', () => {
    const comment = document.getElementById('contact-comment').value;
    alert('Message sent: ' + comment);
});

// Service worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
