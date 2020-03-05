import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

import logo from '../../images/logo.png';


class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>

        
      </ul>
    )

    const guestLinks = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            CONTACT US
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            HELP & SUPPOORT
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            DOWNLOAD THE APP
          </Link>
        </li>
      </ul>
    )

    return (
      <nav className='navbar navbar-expand-sm  mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} className='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='mobile-nav'>
            {/* <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/somewhere'>
                  {' '}
                  Link
                </Link>
              </li>
            </ul> */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(
  Navbar
)
