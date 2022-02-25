import { createContext, useState } from "react"

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [review, setReview] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 5
        }
    ]);
    return <ReviewContext.Provider value={{
        review,
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext