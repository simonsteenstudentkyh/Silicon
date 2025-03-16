import React from 'react'

const Features2 = () => {
  return (
    <section id="features2-section">
      <div className="transfer-title">
        <h2>Make your money transfer simple and clear</h2>
        <ul className="transfer-list">
          <li className="transfer-item">Banking transactions are free for you</li>
          <li>No monthly cash commission</li>
          <li>Manage payments and transactions online</li>
        </ul>  
        <button className="btn round primary">
          Learn more
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <img className="transfer-image" src="/images/transfer-image.svg" alt="Transfer" />

      <img className="contacts-image" src="/images/contacts-image.svg" alt="Contacts" />
      <div className="contacts-title">
        <h2>Receive payment from international bank details</h2>

        <div className="features">

          <div className="feature">
            <div className="feature-icon">
              <img src="/images/icons/credit-card.svg" alt="Credit Card" />
            </div>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          </div>

          <div className="feature">
            <div className="feature-icon" >
              <img src="/images/icons/wallet.svg" alt="Wallet" />
            </div>
            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          </div>

        </div>
        
        <button className="btn round primary">
          Learn more
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}

export default Features2