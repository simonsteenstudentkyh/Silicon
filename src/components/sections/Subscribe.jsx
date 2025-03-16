import React from 'react'
import SubscribeForm from '../forms/SubscribeForm'

const Subscribe = () => {
  return (
    <section id="subscribe-section">
      <div className="container">
        <img src="/images/icons/notification.svg" alt="Notification" />
        <h4>Subscribe to our newsletter to stay informed about latest updates.</h4>
        <div className="subscribe-to-newsletter">
            <SubscribeForm />
        </div>
      </div>
    </section>
  )
}

export default Subscribe