import React from 'react'

function Header({ title, backgroundColor, shadow }) {
    const headerStyles = {
        backgroundColor: backgroundColor,
        boxShadow: shadow
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
    shadow: '1px 1px 50px -1px #cfd2e0'
}

export default Header