import React, { useState } from 'react'

const Brands = () => {
  const [brands] = useState([
    { id: 1, url: "/images/brands/brand-01.svg", alt: "brand 1" },
    { id: 2, url: "/images/brands/brand-02.svg", alt: "brand 2" },
    { id: 3, url: "/images/brands/brand-03.svg", alt: "brand 3" },
    { id: 4, url: "/images/brands/brand-04.svg", alt: "brand 4" },
    { id: 5, url: "/images/brands/brand-05.svg", alt: "brand 5" },
    { id: 6, url: "/images/brands/brand-06.svg", alt: "brand 6" },
  ]);

  return (
    <section id="brands-section">
      {
        brands.map( (image, index) => (<img className="brand" src={image.url} alt={image.alt} key={index} />))
      }
    </section>
  )
}

export default Brands