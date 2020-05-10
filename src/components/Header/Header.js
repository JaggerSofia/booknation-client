import React, { Component } from 'react'
import { Link, BrowserRouter} from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <BrowserRouter>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </BrowserRouter>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <BrowserRouter>
          <Link
            to='/login'>
            Log in
          </Link>
          <Link
            to='/register'>
            Register
          </Link>
        </BrowserRouter>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            BookNation
          </Link>
        </h1>
        <span className='Header__tagline--wide'>Reviews by book lovers</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      <span className='Header__tagline--narrow'>Rate all the books.</span>
    </>
  }
}