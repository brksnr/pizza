import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './component/form'
import Anasayfa from "./component/anasayfa"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)

