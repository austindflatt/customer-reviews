// Shows a single review item that will include the rating and text.

import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaTimes, FaRegEdit } from 'react-icons/fa'
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

export const Rating = styled.div`
    position: relative;
    background: #ffd128;
    width: 45px;
    height: 45px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    transition: 0.3s;

    position: absolute;
    top: -10px;
    left: -15px;
`;

function ReviewItem({ item }) {
    
  const {deleteReview} = useContext(ReviewContext);

  return (
    <Card>
        <Rating>{item.rating}</Rating>

        <button onClick={null} className="edit">
            <FaRegEdit color='black' />
        </button>

        {/* onClick is a function using the prop handleDelete from ReviewList */}
        <button onClick={() => deleteReview(item.id)} className="close">
            <FaTimes color='black' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default ReviewItem