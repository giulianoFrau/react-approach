import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'primeicons/primeicons.css';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
