import { createContext, useState, useEffect } from "react"

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [review, setReview] = useState([]);
    const [reviewEdit, setReviewEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchReview();
    }, []);

    // Fetch review data
    const fetchReview = async () => {
        const response = await fetch('http://localhost:3001/review?_sort=id&_order=desc');
        const data = await response.json();
        setReview(data);
        setIsLoading(false);
    }

    const addReview = async (newReview) => {
        const response = await fetch('http://localhost:3001/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview),
        })
        const data = await response.json();
        // use the spread operator to take reviews that are already made and putting it into the array
        setReview([data, ...review])
    }

    // Delete review
    const deleteReview = async(id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            await fetch(`http://localhost:3001/review/${id}`, {
                method: 'DELETE',
            })

            setReview(review.filter((item) => item.id !== id ))
        }
    }

    // Function to update review item
    const updateReview = async (id, updatedItem) => {
        const response = await fetch(`http://localhost:3001/review/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })

        const data = await response.json();

        setReview(
            review.map((item) => item.id === id ? { ...item, 
            ...data } : item)
            )
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
        reviewEdit,
        isLoading,
        deleteReview,
        addReview,
        editReview,
        updateReview
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext