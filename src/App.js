import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Components/Routing/PrivateRoute';
import NotFound from './Components/Layout/NotFound';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>            
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/dash" component={Dashboard}/>          
            <Route path="*" component={NotFound}/>            
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
