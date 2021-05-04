import Footer from './Footer';
import React from 'react';
import Navbar from './Navbar';
import Home from '../route/home';
import Program from '../route/program';
import Recruit from '../route/recruit';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import '../css/main.css';




function App() {

  return (
    <>
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path={['/', '/home']}>
            <Home />
        </Route>
        <Route exact path='/program'>
            <Program />
        </Route>
        <Route exact path='/recruit'>
            <Recruit />
        </Route>
      </Switch>
      <Footer/> 
    </HashRouter>
    </>
  );
};

export default App;