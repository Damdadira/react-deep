import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppXY from './AppXY.jsx'
import AppMentor from './AppMentor.jsx'
import AppMentors from './AppMentors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    <AppMentors />
  </StrictMode>,
)
