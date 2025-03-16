import React from 'react'
import Hero from '../components/sections/Hero'
import Brands from '../components/sections/Brands'
import Testimonials from '../components/sections/Testimonials'
import Features from '../components/sections/Features'
import Features2 from '../components/sections/Features2'
import Faq from '../components/sections/Faq'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Features2 />
      <Testimonials />
      <Faq />
    </>
  )
}

export default HomePage