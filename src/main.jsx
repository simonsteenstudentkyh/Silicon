import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import { Route, Routes } from 'react-router-dom'
import Providers from './Providers'
import HomePage from './pages/HomePage'


createRoot(document.body).render(
  <Providers>
    
    <Header/>

    <main>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </main>

    <Footer/>

  </Providers>
)
