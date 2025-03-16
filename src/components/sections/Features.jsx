import React from 'react'

const Features = () => {
  return (
    <section id="features-section">
      <img className="image" src="images/features-image.svg" alt="Features" />

      <div className="title">
        <h1>App Features</h1>
        <p className="large muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/credit-card.svg" alt="Credit Card" />
          </div>
          <h5>Easy Payments</h5>
          <p className="muted">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/shield.svg" alt="Shield" />
          </div>
          <h5>Data Security</h5>
          <p className="muted">Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/bars-graphic.svg" alt="Bars Graphic" />
          </div>
          <h5>Cost Statistics</h5>
          <p className="muted">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/communication.svg" alt="Communication" />
          </div>
          <h5>Support 24/7</h5>
          <p className="muted">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/wallet.svg" alt="Wallet" />
          </div>
          <h5>Regular Cashback</h5>
          <p className="muted">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src="/images/icons/happy.svg" alt="Credit Card" />
          </div>
          <h5>Top Standards</h5>
          <p className="muted">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
        </div>
      </div>
    </section>
  )
}

export default Features