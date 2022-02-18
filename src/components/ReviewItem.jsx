// Shows a single review item that will include the rating and text.

import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const Card = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 15px;
    box-shadow: 1px 5px 6px -1px #b7b7b7;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
`;

export const Rating = styled.div`
    position: relative;
    background: #ffd128;
    width: 20px;
    height: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #000 solid;
    transition: 0.3s;

    position: absolute;
    top: -10px;
    left: -15px;
`;

function ReviewItem({ item, handleDelete }) {
  return (
    <Card>
        <Rating>{item.rating}</Rating>
        {/* onClick is a function using the prop handleDelete from ReviewList */}
        <button onClick={() => handleDelete(item.id)} className="close">
            <FaTimes color='black' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default ReviewItem