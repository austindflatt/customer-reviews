import React from 'react'
import ReviewItem from './ReviewItem'

// Passed in state below from App.js
// Then destructured props
function ReviewList({ review }) {
    if(!review || review.length === 0) {
        <p>No reviews found</p>
    }
    console.log(review)
  return (
    <div className="reviews-list">
        {/* Mapped through each object from state with .map */}
        {review.map((item) => (
            // Then embedded the review item and passed that particular item to the component
            <ReviewItem
            key={item.id}
            item={item} 
            // Pass in a prop of delete for ReviewItem
            handleDelete={(id) => console.log(id)}
            />
        ))}
    </div>
  )
}

export default ReviewList