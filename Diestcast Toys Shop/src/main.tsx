import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
// src/index.tsx or src/index.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.tsx'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
