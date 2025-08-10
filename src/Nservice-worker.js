@import '@fontsource/roboto'; /* Added font import */
@import '@fontsource/open-sans'; /* Added font import */

:root {
  --brand-blue: #0b5cff;
  --brand-gold: #d4af37;
  --muted: #6b7280;
  font-family: 'Roboto', 'Open Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
}
* {
  box-sizing: border-box;
}
html,
body,
#root {
  height: 100%;
}
body {
  margin: 0;
  background: #f7fbff;
  color: #06233f;
}
.header {
  background: linear-gradient(90deg, var(--brand-blue), #0066ff);
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.container {
  padding: 16px;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 6px 18px rgba(10, 20, 40, 0.06);
  margin-bottom: 12px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.btn {
  background: var(--brand-blue);
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  border: 0;
}
.btn:hover {
  opacity: 0.9;
  cursor: pointer; /* Added hover state */
}
.input,
textarea,
select {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #e6eef8;
}
.small {
  font-size: 0.9rem;
  color: var(--muted);
}
.footer {
  padding: 12px;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}
.lang-toggle {
  margin-left: auto;
}
.map {
  height: 320px;
  border-radius: 8px;
  }
