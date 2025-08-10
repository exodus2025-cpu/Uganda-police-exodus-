import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import localforage from 'localforage'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png' // Added for Leaflet
import iconShadow from 'leaflet/dist/images/marker-shadow.png' // Added for Leaflet

// Fix Leaflet default icon issue
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

function useSpeechInput(setValue) {
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recog = new SpeechRecognition()
    recog.continuous = false
    recog.lang = 'en-US'
    recog.onresult = (e) => setValue(e.results[0][0].transcript)
    recog.onerror = (e) => console.error('Speech recognition error:', e.error) // Added error handling
    return () => {
      try {
        recog.stop() // Improved cleanup
      } catch (e) {
        console.error('Error stopping recognition:', e)
      }
    }
  }, [setValue])
}

function Header({ lang, setLang }) {
  return (
    <header className="header">
      <div style={{ fontWeight: 700 }}>🛡️ Exodus Sacco</div>
      <div className="small">Uganda Police — Member Portal</div>
      <div className="lang-toggle">
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="input">
          <option value="en">English</option>
          <option value="lg">Luganda</option>
          <option value="sw">Kiswahili</option>
          <option value="luo">Luo</option>
          <option value="at">Ateso</option>
          <option value="rn">Runyankole</option>
          <option value="ly">Lunyoro</option>
        </select>
      </div>
    </header>
  )
}

function Dashboard() {
  return (
    <div className="container">
      <div className="grid">
        <div className="card">
          <h3>Accounts</h3>
          <p className="small">Savings: UGX 2,340,000</p>
          <p className="small">Shares: UGX 450,000</p>
          <p className="small">Loans outstanding: UGX 1,200,000</p>
          <Link to="/transactions" className="small">
            View transactions
          </Link>
        </div>
        <div className="card">
          <h3>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link to="/savings" className="btn">
              Deposit Savings
            </Link>
            <Link to="/withdraw" className="btn">
              Withdraw
            </Link>
            <Link to="/loans" className="btn">
              Apply for Loan
            </Link>
            <Link to="/payments" className="btn">
              Pay Utilities
            </Link>
          </div>
        </div>
        <div className="card">
          <h3>Branch Locator</h3>
          <p className="small">Find Sacco branches and ATMs across Uganda</p>
          <Link to="/branches" className="btn">
            Open Map
          </Link>
        </div>
      </div>
    </div>
  )
}

function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: 'block', fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  )
}

function Savings() {
  const [amount, setAmount] = useState('30000')
  const [reason, setReason] = useState('')
  const [file, setFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  useSpeechInput(setReason)

  const submit = async () => {
    setIsSubmitting(true)
    try {
      if (Number(amount) < 30000) return alert('Minimum UGX 30,000')
      if (!reason) return alert('Reason is required') // Added validation
      if (!file) return alert('ID upload is required') // Added validation
      const tx = { type: 'savings', amount, reason, fileName: file.name, ts: Date.now() }
      await localforage.getItem('pending').then((arr) =>
        localforage.setItem('pending', [...(arr || []), tx])
      )
      alert('Saved locally — will sync when online')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>Deposit Savings</h3>
        <FormField label="Amount (UGX)">
          <input
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </FormField>
        <FormField label="Reason">
          <input
            className="input"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </FormField>
        <FormField label="Upload ID (Warrant / Force ID)">
          <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        </FormField>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={submit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'} {/* Added loading state */}
          </button>
        </div>
      </div>
    </div>
  )
}

function Withdraw() {
  const [amount, setAmount] = useState('30000')
  const [reason, setReason] = useState('')
  const [force, setForce] = useState('')
  const [ipps, setIpps] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  useSpeechInput(setReason)

  const submit = async () => {
    setIsSubmitting(true)
    try {
      const val = Number(amount)
      if (val < 30000) return alert('Minimum UGX 30,000')
      if (val > 100000000) return alert('Maximum UGX 100,000,000')
      if (!reason) return alert('Reason is required') // Added validation
      if (!force) return alert('Force Number is required') // Added validation
      if (!ipps) return alert('IPPS Number is required') // Added validation
      alert('Withdrawal request recorded (prototype)')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>Withdraw Savings</h3>
        <FormField label="Amount (UGX)">
          <input
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </FormField>
        <FormField label="Reason">
          <input
            className="input"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </FormField>
        <FormField label="Force Number">
          <input
            className="input"
            value={force}
            onChange={(e) => setForce(e.target.value)}
          />
        </FormField>
        <FormField label="IPPS Number">
          <input
            className="input"
            value={ipps}
            onChange={(e) => setIpps(e.target.value)}
          />
        </FormField>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={submit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Withdraw'} {/* Added loading state */}
          </button>
        </div>
      </div>
    </div>
  )
}

function Loans() {
  const [amount, setAmount] = useState('10000')
  const [purpose, setPurpose] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  useSpeechInput(setPurpose)

  const submit = () => {
    setIsSubmitting(true)
    try {
      if (Number(amount) < 10000) return alert('Minimum loan UGX 10,000')
      if (!purpose) return alert('Purpose is required') // Added validation
      alert('Loan application submitted (prototype)')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>Loan Application</h3>
        <FormField label="Amount (UGX)">
          <input
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </FormField>
        <FormField label="Purpose">
          <input
            className="input"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </FormField>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={submit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Apply'} {/* Added loading state */}
          </button>
        </div>
      </div>
    </div>
  )
}

function Payments() {
  const [type, setType] = useState('electricity')
  const [amount, setAmount] = useState('10000')
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false) // Added loading state
  useSpeechInput(setReason)

  const submit = () => {
    setIsSubmitting(true)
    try {
      if (Number(amount) < 10000) return alert('Minimum UGX 10,000') // Added validation
      if (!reason) return alert('Reason is required') // Added validation
      alert('Payment flow (prototype) — integrate real payment gateways')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>Utility Payments</h3>
        <FormField label="Type">
          <select value={type} onChange={(e) => setType(e.target.value)} className="input">
            <option value="electricity">Electricity</option>
            <option value="airtime">Airtime</option>
            <option value="school">School fees</option>
            <option value="transport">Transport</option>
            <option value="insurance">Insurance</option>
          </select>
        </FormField>
        <FormField label="Amount (UGX)">
          <input
            type="number"
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormField>
        <FormField label="Reason">
          <input
            className="input"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </FormField>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={submit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Proceed to Pay'} {/* Added loading state */}
          </button>
        </div>
      </div>
    </div>
  )
}

function Branches() {
  useEffect(() => {
    const map = L.map('map').setView([0.3476, 32.5825], 7) // Kampala as center
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map)
    const branches = [
      { name: 'Central Branch (Kampala)', lat: 0.3476, lng: 32.5825 },
      { name: 'Gulu Branch', lat: 2.7724, lng: 32.2881 },
      { name: 'Mbarara Branch', lat: -0.6072, lng: 30.6545 },
    ]
    branches.forEach((b) =>
      L.marker([b.lat, b.lng]).addTo(map).bindPopup(`<b>${b.name}</b>`)
    )
    return () => map.remove() // Simplified cleanup
  }, [])

  return (
    <div className="container">
      <div className="card">
        <h3>Branches & ATMs</h3>
        <div id="map" className="map"></div>
      </div>
    </div>
  )
}

function Transactions() {
  return (
    <div className="container">
      <div className="card">
        <h3>Transaction History</h3>
        <p className="small">
          (Prototype) — transactions would be fetched from secure API. Local cache maintained
          for offline use.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      <footer className="footer">Support: +256-700-123-456 • support@exodussacco.ug</footer>
    </div>
  )
}
