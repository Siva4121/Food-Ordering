import { StrictMode ,createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./comp/app"

createRoot(document.getElementById('root')).render(<App/>)