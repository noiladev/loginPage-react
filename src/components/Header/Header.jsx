import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <ul className="list  d-flex row-">
        <li className="list__item col-4">
            <Link className='btn btn-info'  to='/'>Home</Link>
        </li>
        <li className="list__item col-4">
            <Link className='btn btn-info'  to='/about'>About</Link>

        </li>
        <li className="list__item col-4">
            <Link className='btn btn-info'  to='/login'>Log in</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
