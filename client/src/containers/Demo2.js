import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Demo2 extends Component {
  render() {
    return (
      <div>
        <h3>Demo2</h3>
        <Link to='/'>Demo1</Link>
      </div>
    )
  }
}
export default Demo2;