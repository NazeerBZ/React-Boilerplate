import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Demo1, Demo2, NotFound } from '../containers';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: this.props.flag,
    }
  }

  commanContant = () => {
    if (!this.props.flag) {
      return (
        <div>
          <h1>React Boilerplate</h1>
        </div>
      );
    }
    else return null;
  }

  render() {
    return (
      <div>
        {this.commanContant()}
        <Switch>
          <Route exact path='/' component={Demo1} />
          <Route path='/demo2' component={Demo2} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      flag: state.NotFound.flag
    }
  },
  null
)(App);
