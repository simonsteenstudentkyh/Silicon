import React, { Children, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'

const Providers = ({children}) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default Providers