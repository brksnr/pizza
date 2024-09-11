import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './component/form'
import SiparisOnayi from "./component/home"
import App from './App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)

