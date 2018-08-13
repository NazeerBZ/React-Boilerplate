import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Example1 } from '../components';

class Demo1 extends Component {
  render() {
    return (
      <div>
        <h3>Demo1</h3>
        <Example1 />
        <Link to='/demo2'>Demo2</Link>
      </div>
    )
  }
}
export default Demo1;