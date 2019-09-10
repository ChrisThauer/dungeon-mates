import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import GroupList from './pages/group-list/group-list';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/grouplist" component={GroupList} />
      </Switch>
    </div>
  );
}

export default App;
