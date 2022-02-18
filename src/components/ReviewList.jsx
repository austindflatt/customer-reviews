import React from 'react'

// Destructured props below:
function ReviewList({ review }) {
    if(!review || review.length === 0) {
        <p>No reviews found</p>
    }
    console.log(review)
  return (
    <div className="reviews-list">
        {review.map((item) => (
            <div>
                {item.rating}
            </div>
        ))}
    </div>
  )
}

export default ReviewList