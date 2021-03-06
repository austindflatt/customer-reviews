import React from 'react'
import RatingSelect from './RatingSelect'
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Button from './styles/Button'
import ReviewContext from '../context/ReviewContext'

export const Card = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  box-shadow: -2px 2px 24px 0px #0000001c;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
`;

export const Message = styled.div `
  color: red;
  padding-top: 10px;
  text-align: center;
`

function ReviewForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState('')

  const { addReview, reviewEdit, updateReview } = useContext(ReviewContext)

  useEffect(() => {
    if(reviewEdit.edit === true) {
      setText(reviewEdit.item.text)
      setRating(reviewEdit.item.rating)
    }
  }, [reviewEdit])

  const handleTextChange = (event) => {
    if(text === '') {
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10){
      setMessage('Review must be at least 10 characters')
    } else {
      setMessage(null)
    }
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.trim().length > 10){
      const newReview = {
        text,
        rating
      }

      if(reviewEdit.edit === true){
        updateReview(reviewEdit.item.id, newReview)
      } else {
        addReview(newReview);
      }

      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Write a review</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
          onChange={handleTextChange}
          type="text"
          placeholder='Share details of your experience at this place'
          value={text} 
          />
          <Button type="submit">Submit</Button>
        </div>
        {message && <Message>{message}</Message>}
      </form>
    </Card>
  )
}

export default ReviewForm