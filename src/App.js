import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Repositorios from './pages/Repositorios';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repos/:login">
          <Repositorios />
        </Route>
        <Route  path="/">
          <Home />
        </Route>        
      </Switch>            
    </BrowserRouter>
  );
}

export default App;
