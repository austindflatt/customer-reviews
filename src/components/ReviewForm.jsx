import React from 'react'
import { useState } from 'react';
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

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <Card>
      <form>
        <h2>Write a review</h2>
        {/* // Rating select component will go here */}
        <div className="input-group">
          <input
          onChange={handleTextChange}
          type="text"
          placeholder='Share details of your experience at this place'
          value={text} 
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  )
}

export default ReviewForm