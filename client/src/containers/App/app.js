import React from 'react';
import Store from '../../store/store.js';
import { persistStore } from 'redux-persist';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import './app.css';

function mapStateToProps(state) {
  return {
    message: state.MessageReducer.message,
    showSnack: state.MessageReducer.showSnack
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentWillMount() {
    persistStore(Store, undefined, () => {
      this.setState({
        loaded: true
      })
    })
  }

  handleRequestClose = () => {
    Store.dispatch({ type: "SNACKBAR_CLOSE_REQUEST" });
  }

  render() {

    if (this.state.loaded !== true) {
      return (
        <div>
          <div className="circle"></div>
          <div className="circle-small"></div>
          <div className="circle-big"></div>
          <div className="circle-inner-inner"></div>
          <div className="circle-inner"></div>
        </div>
      );
    }
    return (
      <div>
        {this.props.children}
        <div>
          <Snackbar
            style={{ textAlign: 'center' }}
            open={this.props.showSnack}
            message={this.props.message}
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(App)