// Shows a single review item that will include the rating and text.

import React from 'react'
import { useState } from 'react'

function ReviewItem() {
    const [rating, setRating] = useState(7) // 7 is the default for useState
    const [text, setText] = useState('Example of a review item')

  return (
    <div className='card'>
        <div className="rating-display">{rating}</div>
        <div className="text-display">{text}</div>
    </div>
  )
}

export default ReviewItem