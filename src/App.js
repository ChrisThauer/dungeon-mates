import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Groups from './pages/groups/groups';
import Header from './components/header/header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/groups" component={Groups} />
      </Switch>
    </div>
  );
}

export default App;
