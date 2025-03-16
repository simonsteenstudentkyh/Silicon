import React from 'react'


const Testimonial = ({item}) => {
  return (
    <div className="testimonial">
      <div className="testimonial-icon">
        <i className="bi bi-quote"></i>
      </div>

      <div className="star-rating">
        {
          [...Array(5)].map((_, i) =>
          
            (<i key={i} className={ i < item.starRating ? "bi bi-star-fill" : "bi bi-star"} />)
          )
        }
      </div>

      <p className="testimonial-text">
        {item.comment}
      </p>

      <div className="client-info">
        <img className="image" src={item.avatarUrl} alt=""/>
        <div className="author">{item.author}</div>
        <div className="role">{item.jobRole}</div>
      </div>
    </div>
  )
}

export default Testimonial