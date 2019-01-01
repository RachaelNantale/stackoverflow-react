import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home';
import AuthPageConnected from '../../containers/auth';
import QuestionPageConnected from '../../containers/postQuestion';
import ViewallQtnsConnected from '../../containers/getQuestions';
import Header from '../Header';
import LoginPageConnected from '../../containers/login';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={ViewallQtnsConnected} />
        <Route exact path="/post_question" component={QuestionPageConnected} />
        <Route path="/signup" component={AuthPageConnected} />
        <Route path="/login" component={LoginPageConnected} />

      </Switch>
    </React.Fragment>
  </BrowserRouter>


);


export default App;
