import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import AccountProfile from './AccountProfile';
import AccountProvider from './providers/AccountProvider';

class App extends Component {

  render() {
    return (
      <AccountProvider>
        <HashRouter>
          <React.Fragment>
            <div className="App">
              <header className="App-header">
                <NavigationBar />
              </header>
              <Switch>
                <Route exact path="/" render={() => <div>Home</div>}/>
                <Route exact path="/account/profile" component={AccountProfile}/>
              </Switch>
            </div>
          </React.Fragment>
        </HashRouter>
      </AccountProvider>
    );
  }
}

export default App;
