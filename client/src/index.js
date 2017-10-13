
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Store from './store/store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { App, Example } from './containers';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={Store}>
      <Router history={browserHistory}>

        <Route path='/' component={App}>
          <IndexRoute component={Example} />
        </Route>

      </Router>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById("root")
);
