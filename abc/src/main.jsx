import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Header} from './Header.jsx'
import Home from './Home.jsx'
import Foter from './Foter.jsx'
import Count from './Count.jsx'
import Display from './Display.jsx'
import MyForm from './MyForm.jsx'
import BasicInformation from './BasicInformation.jsx'
import Registration from './Registration.jsx'
import MyExampleForm from './MyExampleForm.jsx'
import Employee from './Employee.jsx'
import ParentForm from './ParentForm.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ParentForm/>
    
    
  </>,
)
