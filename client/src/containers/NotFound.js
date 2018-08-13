import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFlag_middleware } from '../store/Middlewares/NotFound';

class NotFound extends Component {

  constructor(props) {
    super(props);
    this.props.updateFlag(true);
  }

  componentWillUnmount(){
    this.props.updateFlag(false);
  }

  render() {
    return (
      <div>
        <h3>404, Page not found</h3>
        <Link to='/'>Get back to main page</Link>
      </div>
    )
  }
}
export default connect(
  (state) => {
    return {
      flag: state.NotFound.flag
    }
  },
  (dispatch) => {
    return {
      updateFlag: (flag) => { dispatch(updateFlag_middleware(flag)) },
    }
  })(NotFound);