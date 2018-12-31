import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home';
import AuthPageConnected from '../../containers/auth';
import QuestionPageConnected from '../../containers/postQuestion';
import ViewallQtnsConnected from '../../containers/getQuestions';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={ViewallQtnsConnected} />
        <Route exact path="/post_question" component={QuestionPageConnected} />
        <Route path="/signup" component={AuthPageConnected} />

      </Switch>
    </React.Fragment>
  </BrowserRouter>


);


export default App;
