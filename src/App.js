import { useState } from 'react'
import Header from './components/Header'
import ReviewList from './components/ReviewList'

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
    return (
        <>
        <Header />
        <div className="container">
            <ReviewList review={review} />
        </div>
        </>
    )
}

export default App