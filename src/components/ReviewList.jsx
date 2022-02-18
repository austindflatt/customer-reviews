import React from 'react'
import ReviewItem from './ReviewItem'

// Destructured props below:
function ReviewList({ review }) {
    if(!review || review.length === 0) {
        <p>No reviews found</p>
    }
    console.log(review)
  return (
    <div className="reviews-list">
        {review.map((item) => (
            <ReviewItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default ReviewList