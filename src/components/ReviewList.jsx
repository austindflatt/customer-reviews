import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReviewItem from './ReviewItem'
import ReviewContext from '../context/ReviewContext'

// Passed in state below from App.js
// Then destructured props
function ReviewList() {
  const { review } = useContext(ReviewContext);

    if(!review || review.length === 0) {
        <p>No reviews found</p>
    }
    console.log(review)
  return (
    <div className="reviews-list">
        {/* Mapped through each object from state with .map */}
        <AnimatePresence>
        {review.map((item) => (
          <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            {/* // Then embedded the review item and passed that particular item to the component */}
            <ReviewItem
            key={item.id}
            item={item} 
            />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
  // Unedited version below
  // return (
  //   <div className="reviews-list">
  //       {/* Mapped through each object from state with .map */}
  //       {review.map((item) => (
  //           // Then embedded the review item and passed that particular item to the component
  //           <ReviewItem
  //           key={item.id}
  //           item={item} 
  //           // Pass in a prop of delete for ReviewItem
  //           handleDelete={handleDelete}
  //           />
  //       ))}
  //   </div>
  // )
}

export default ReviewList