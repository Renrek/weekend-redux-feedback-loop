// Core operation imports
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Style and Stucture imports
import { Container } from '@material-ui/core';

// App Components imports
import Welcome from '../Welcome/Welcome';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';
import Header from '../Header/Header';



function App() {

  return (
    <Container className='App' maxWidth="md"> 
      <Header />
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
    </Container>
  ); // End Componant Return
} //END App()

export default App;
