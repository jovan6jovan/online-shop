import React from 'react';
import { Switch, Route } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

import './App.css';
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInSignUp from "../pages/SignInSignUp/SignInSignUp";

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ currentUser: user }))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
