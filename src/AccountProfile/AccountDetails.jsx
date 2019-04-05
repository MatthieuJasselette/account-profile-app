import React from 'react'
import { AccountConsumer } from '../providers/AccountProvider'

// Here we import the defined ContextConsumer and have no use for the Consumer method
const AccountDetails = () => (
  <AccountConsumer>
    {({ username, dateJoined, membershipLevel }) => (
      <div>
        <p>Username: {username}</p>
        <p>Date Joined: {dateJoined}</p>
        <p>Membership Level: {membershipLevel}</p>
      </div>
    )}
  </AccountConsumer>
)

export default AccountDetails
