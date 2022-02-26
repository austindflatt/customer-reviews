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
    const [reviewEdit, setReviewEdit] = useState({
        item: {},
        edit: false,
    });

    const addReview = (newReview) => {
        newReview.id = uuidv4();
        // use the spread operator to take reviews that are already made and putting it into the array
        setReview([newReview, ...review])
    }

    // Delete review
    const deleteReview = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setReview(review.filter((item) => item.id !== id ))
        }
    }

    // Set items to be updated
    const editReview = (item) => {
        setReviewEdit({
            item,
            edit: true
        })
    }

    return <ReviewContext.Provider value={{
        review,
        deleteReview,
        addReview,
        editReview,
        reviewEdit,
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext