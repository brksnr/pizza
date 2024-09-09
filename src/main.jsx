import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './component/form'
import "./component/form.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
