import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login Page</h3>
        <Link to='/'>login button</Link>
      </div>
    )
  }
}
export default Login;