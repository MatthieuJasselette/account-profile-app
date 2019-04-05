import React from 'react'
import { Link } from 'react-router-dom'
import { AccountContext } from './providers/AccountProvider'

// Here we import the raw context and have to use the Consumer method
const NavigationBar = (props) => (
  <AccountContext.Consumer>
    {value => (
      <div>
        <Link to="/">Home</Link>
        <Link to="/account/profile">{value.username}</Link>
      </div>
    )}
  </AccountContext.Consumer>
)

export default NavigationBar
