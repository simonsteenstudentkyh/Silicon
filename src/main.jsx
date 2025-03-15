import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/elements/sections/Header'
import Footer from './components/elements/sections/Footer'
import { Route, Routes } from 'react-router-dom'
import Providers from './Providers'


createRoot(document.body).render(
  <Providers>
    
    <Header/>

    <main>
      <Routes>
        
      </Routes>
    </main>

    <Footer/>

  </Providers>
)
