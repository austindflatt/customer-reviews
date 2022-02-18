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
              "rating": 10,
              "text": "This is review item 1 coming from the backend"
            },
            {
              "id": 2,
              "rating": 8,
              "text": "This is review item 2 coming from the backend"
            },
            {
              "text": "This is review item 3 coming from the backend",
              "rating": 10,
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

    return (
        <>
        <Header />
        <div className="container">
            <ReviewForm />
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