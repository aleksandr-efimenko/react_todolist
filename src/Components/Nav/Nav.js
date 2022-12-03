import React from 'react'
import './Nav.css'


export default function Nav() {
  return (
    <nav>        
      <h3>Logo</h3>
      <ul className='nav-links'>
        <li>About</li>
        <li>Login</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}
