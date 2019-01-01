import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewallQtnsConnected from '../../containers/getQuestions';
import './home.scss';


const Home = () => (
  <BrowserRouter>
    <div>
      <div className="header-img">
        <img src="https://thenextweb.com/wp-content/blogs.dir/1/files/2013/11/glasses-books.jpg" alt="banner" />
      </div>
      <div className="title text-center">
        <h2>Top Questions</h2>
      </div>
      <ViewallQtnsConnected />
    </div>
  </BrowserRouter>
);


export default Home;
