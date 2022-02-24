import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import GlobalStyle from './components/styles/GlobalStyle'

function App() {
    const [review, setReview] = useState(
        [
            {
              "id": 1,
              "rating": 5,
              "text": "Great product, fast shipping!"
            },
            {
              "id": 2,
              "rating": 2,
              "text": "Didn't like it so much"
            },
            {
              "text": "Amazing quality! A++",
              "rating": 5,
              "id": 3
            }
          ]
    )

    // Added function for handleDelete below so I can call setReview
    const deleteReview = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setReview(review.filter((item) => item.id !== id ))
        }
    }

    const addReview = (newReview) => {
      newReview.id = uuidv4();
      // use the spread operator to take reviews that are already made and putting it into the array
      setReview([newReview, ...review])
    }

    return (
        <>
        <Header />
        <div className="container">
            <ReviewForm handleAdd={addReview} />
            <ReviewStats review={review} />
            {/* Passed the state above to the review list below  */}
            <ReviewList
            review={review}
            handleDelete={deleteReview}
            />
            <GlobalStyle />
        </div>
        </>
    )
}

export default App