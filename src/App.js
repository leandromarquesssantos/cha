import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/';

// Pages
import Home from './view/home';
import Login from './view/login';
import SingUp from './view/new-user';
import NewTicket from './view/new-ticket';
import Ticket from './view/ticket';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/tickets/:param' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SingUp} />
          <Route exact path='/novo' component={NewTicket} />
          <Route exact path='/ticket/:id' component={Ticket} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
