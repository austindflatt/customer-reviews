import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

export const Card = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 15px;
    box-shadow: 1px 5px 6px -1px #b7b7b7;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
`;

function ReviewForm() {
  return (
    <Card>
      <form>
        <h2>Write a review</h2>
        {/* // Rating select component will go here */}
        <div className="input-group">
          <input type="text" placeholder='Write a review' />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  )
}

export default ReviewForm