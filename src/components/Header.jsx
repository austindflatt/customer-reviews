import React from 'react'
import styled from 'styled-components';

export const HeaderTop = styled.div`
    background-color: #FFF;
    color: #000;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

function Header({ title }) {
  return (
    <HeaderTop>
        {title}
    </HeaderTop>
  )
}

Header.defaultProps = {
    title: 'Customer Reviews',
}

export default Header