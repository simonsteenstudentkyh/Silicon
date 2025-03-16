import React, { useContext } from 'react'
import { TestimonialsContext } from '../../contexts/TestimonialsContext';
import Testimonial from '../elements/Testimonial';

const Testimonials = () => {
  const { testimonials } = useContext(TestimonialsContext);

  return (
    <section id="testimonials-section">
      <h1>Clients are Loving Our App</h1>
        {
          testimonials.map((testimonial, index) => (<Testimonial key={index} item={testimonial}/>))
        }
    </section>
  )
}

export default Testimonials