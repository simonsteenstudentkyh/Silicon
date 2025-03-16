import React from 'react'


const Testimonial = ({item}) => {
  return (
    <div className="testimonial">
      <div className="testimonial-icon">
        <img src="/images/icons/quote.svg" alt={"\""} />
      </div>

      <div className="star-rating">
        {
          [...Array(5)].map((_, i) =>
            (<i key={i} className={ i < item.starRating ? "bi bi-star-fill" : "bi bi-star"} />)
          )
        }
      </div>

      <p className="large muted">{item.comment}</p>

      <div className="client-info">
        <img className="image" src={item.avatarUrl} alt=""/>
        <h6 className="author">{item.author}</h6>
        <p className="small role">{item.jobRole}</p>
      </div>
    </div>
  )
}

export default Testimonial