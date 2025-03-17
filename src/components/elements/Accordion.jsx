import React from 'react'

const Accordion = ({group, title, content}) => {
  return (
    <details className="accordion" name={group}>
      <summary><h6>{title}</h6></summary>
      <p className="muted">{content}</p>
    </details>
  )
}

export default Accordion