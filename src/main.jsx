import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import Header from './components/elements/sections/Header'
import Footer from './components/elements/sections/Footer'


createRoot(document.body).render(
  <>
    <Header/>

    <main>

      <HomePage/>
            
    </main>

    <Footer/>    
  </>
)
