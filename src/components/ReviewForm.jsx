import React from 'react'
import RatingSelect from './RatingSelect'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './styles/Button'

export const Card = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 15px;
    box-shadow: -2px 2px 24px 0px #0000001c;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
`;

function ReviewForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const handleTextChange = (event) => {
    if(text === '') {
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 5){
      setMessage('Review must be at least 10 characters')
    } else {
      setMessage(null)
    }
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
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
        {message && <div className='messsage'>{message}</div>}
      </form>
    </Card>
  )
}

export default ReviewForm