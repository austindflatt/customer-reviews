import React from 'react'

function Header({ title }) {
  return (
    <header>
        <div className='container'>
            <h2>{title}</h2>
        </div>
    </header>
  )
}

export default Header