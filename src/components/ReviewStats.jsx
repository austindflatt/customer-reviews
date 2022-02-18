import React from 'react'

function ReviewStats({ review }) {
  // Calculate ratings average
  let average = review.reduce((accumulator, current) => {
      return accumulator + current.rating
  }, 0) / review.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="review-stats">
        <h4>{review.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default ReviewStats