import React from 'react'

function Header({ title, backgroundColor }) {
    const headerStyles = {
        backgroundColor: backgroundColor,
    }
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{title}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: 'Customer Reviews',
    backgroundColor: '#FFF',
}

export default Header