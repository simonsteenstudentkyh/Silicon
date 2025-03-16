import React, { useContext } from 'react'
import { FaqContext } from '../../contexts/FaqContext';
// import { Accordion } from '../elements/Accordion'

const Faq = () => {
  const { faqs } = useContext(FaqContext);

  return (
    <section id="faq-section">
      <div className="faq-title">
        
        <h2>Any questions? Check out the FAQs</h2>
        <p className="faq-subtext large">Still have unanswered questions and need to get in touch?</p>

        <div className="contacts">
          
          <div className="contact info">
            <i className="bi bi-telephone-fill"></i>
            <p className="small">Still have  questions?</p>
            <button className="btn small info">
              Contact us
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="contact success">
            <i className="bi bi-chat-dots-fill"></i>
            <p className="small">Don't like phone calls?</p>
            <button className="btn small">
              Contact us
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

        </div>
      </div>

      <div className="accordion">
      {
        faqs.map( (faq) => (
          <div className="accordion-item" key={faq.id}>
            <h6>{faq.title}</h6>
            <p className="muted">{faq.content}</p>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Faq