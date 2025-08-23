import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FormJson from './components/form-json/FormJson.jsx'
import configEg1Template from './config-examples/config-eg-1/config-eg-1-template.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormJson template={configEg1Template}/>
    {/* <App /> */}
  </StrictMode>,
)
