import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home';
import AuthPageConnected from '../../containers/auth';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={AuthPageConnected} />

      </Switch>
    </React.Fragment>
  </BrowserRouter>


);


export default App;
