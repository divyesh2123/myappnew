import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Header} from './Header.jsx'
import Home from './Home.jsx'
import Foter from './Foter.jsx'
import Count from './Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Count/>
    <Foter/>
  </StrictMode>,
)
