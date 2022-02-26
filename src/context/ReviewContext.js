import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [review, setReview] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 5
        }
    ]);

    const addReview = (newReview) => {
        newReview.id = uuidv4();
        // use the spread operator to take reviews that are already made and putting it into the array
        setReview([newReview, ...review])
    }

    // Added function for handleDelete below so I can call setReview
    const deleteReview = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setReview(review.filter((item) => item.id !== id ))
        }
    }

    return <ReviewContext.Provider value={{
        review,
        deleteReview,
        addReview,
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext