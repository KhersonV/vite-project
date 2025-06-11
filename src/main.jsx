import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppNoJSX from "./App.nojsx.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppNoJSX></AppNoJSX>
  </StrictMode>,
)
