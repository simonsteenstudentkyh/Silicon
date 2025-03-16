import React from 'react'

const HowDoesItWork = () => {
  return (
    <section id="howdoesitwork-section">
        <h1>How does it work?</h1>

        <div className="carousel">
            <img src="/images/carousel-left-image.svg" alt="Left" />
            <img src="/images/carousel-middle-image.svg" alt="Middle" />
            <img src="/images/carousel-right-image.svg" alt="Right" />
        </div>

        <h4>Latest transaction history</h4>
        <p className="description muted">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
    </section>
  )
}

export default HowDoesItWork