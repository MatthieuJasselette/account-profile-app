import React, { Component } from 'react';

export const AccountContext = React.createContext()
//we export the context and consume it in another component
// used in NavigationBar

export const AccountConsumer = AccountContext.Consumer
// we define and export a consumer to use in another component
// used in AccountDetails & AccountUpdate

class AccountProvider extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: 'Crunchy Crunchy',
      dateJoined: '9/1/18',
      membershipLevel: 'Silver'
    }
  }

  render () {
    return (
       <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider
