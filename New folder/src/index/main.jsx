import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '/src/index/App.jsx'
import "/src/styles/App.css"
import '/src/styles/index.css'
import "/src/styles/HeaderBar.css"
import "/src/styles/form.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
