import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderBar from '../components/HeaderBar'
import BodyContainer from './BodyContainer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderBar/>
    <BodyContainer />
  </StrictMode>,
)
