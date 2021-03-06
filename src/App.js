import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import mainPage from './Components/mainPage'
import './App.css';
import navBar from './Components/navBar'
import projects from './Components/projects'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path='/' component={navBar}/>
        <Switch>
          <Route exact path='/' render={() => (
            <Redirect to="/Home" />)}
          />

          <Route exact path='/Home' component={mainPage}/>
          <Route exact path='/Projects' component={projects}/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(connect() (App));