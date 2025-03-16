import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { TestimonialsProvider } from './contexts/TestimonialsContext'
import { FaqProvider } from './contexts/FaqContext'
const Providers = ({children}) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <DarkModeProvider>
          <TestimonialsProvider>
            <FaqProvider>
              {children}
            </FaqProvider>
          </TestimonialsProvider>
        </DarkModeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

export default Providers