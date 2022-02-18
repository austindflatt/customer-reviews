// Shows a single review item that will include the rating and text.

import React from 'react'

function ReviewItem() {
  return (
    <div className='card'>
        <div className="rating-display">10</div>
        <div className="text-display">
            Example of a review item
        </div>
    </div>
  )
}

export default ReviewItem