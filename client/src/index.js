import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import registerServiceWorker from './registerServiceWorker';
import { Loader } from './components';
import './styles/index.css';
import { App, Login } from './containers';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
