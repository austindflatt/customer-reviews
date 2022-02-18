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

function ReviewItem({ item }) {
  return (
    <Card>
        <div className="rating-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default ReviewItem