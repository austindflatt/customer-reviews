import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

export const Rating = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
  list-style: none
`;

export const RatingLi = styled.li`
`;

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  }
  return (
    <Rating>
      {Array.from({ length: 5 }, (_, i) => (
        <RatingLi key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </RatingLi>
      ))}
    </Rating>
  )
}

export default RatingSelect