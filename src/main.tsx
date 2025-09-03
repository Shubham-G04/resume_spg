import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

function getBasename() {
  // Extract redirect query param if present
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect) {
    // Replace URL with original route (clean)
    const newUrl = window.location.origin + "/resume_spg" + redirect;
    window.history.replaceState(null, "", newUrl);
  }
  return "/resume_spg/";
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
