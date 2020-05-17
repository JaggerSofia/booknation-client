import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            <FontAwesomeIcon className='blue' />
            {' '}
            BookNation
          </Link>
        </h1>
        <span className='Header__tagline--wide'>Reviews by book lovers</span>

      </nav>

      <span className='Header__tagline--narrow'>Rate all the books.</span>
    </>
  }
}