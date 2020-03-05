import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/authActions'

class Footer extends Component {
  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <button>
        <a
          href=''
          onClick={this.onLogoutClick.bind(this)}
          className='nav-link'
        >
          {/* Hello {user.name} */}
          {' '}
          Logout
      </a>
      </button>
    )

    const guestLinks = (
      <div>
        <button>
          <Link className='nav-link' to='/login'>
            Влез
          </Link>
        </button>
        <button>
          <Link className='nav-link' to='/register'>
            Регистрация
          </Link>
        </button>
      </div>
    )

    return (
      <div className='footer p-5 text-center'>
        <div className='footer-links'>
        <Link className='nav-link' to='/aboutus'>
          CONTACT US
          </Link>
        <Link className='nav-link' to='/contacts'>
           DOWNLOAD THE APP
          </Link>
          <Link className='nav-link' to='/privacy-policy'>
          HELP & SUPPOORT
          </Link>
        <Link className='nav-link' to='/privacy-policy'>
         PRIVACE POLICY
          </Link>
          {/* {isAuthenticated ? authLinks : guestLinks} */}
        </div>
        {/* <p id='footer-text'>Copyright © 2018 Businessnews.bg All rights reserved.</p> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Footer)
