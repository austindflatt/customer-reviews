// Shows a single review item that will include the rating and text.

import React from 'react'
import styled from 'styled-components';

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
    background: #f4f4f4;
    width: 20px;
    height: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;

    position: absolute;
    top: -10px;
    left: -15px;
`;

function ReviewItem({ item }) {
  return (
    <Card>
        <Rating>{item.rating}</Rating>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default ReviewItem