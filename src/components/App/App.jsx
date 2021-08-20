import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { Container } from '@material-ui/core';

//Components
import Welcome from '../Welcome/Welcome';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';



function App() {

  return (
    <Container maxWidth="md"> 
      <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/feeling">
            <Feeling />
          </Route>
          <Route path="/understanding">
            <Understanding />
          </Route>
          <Route path="/supported">
            <Supported />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Router>
      </div>
    </Container>
  );
}

export default App;
