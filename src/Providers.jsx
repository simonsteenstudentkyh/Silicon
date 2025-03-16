import React, { Children, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { TestimonialsProvider } from './contexts/TestimonialsContext'

const Providers = ({children}) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <DarkModeProvider>
          <TestimonialsProvider>
            {children}
          </TestimonialsProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default Providers