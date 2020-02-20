import React from 'react';

//Components
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home';
import Dealers from './pages/Dealers/dealers';
import Brands from './pages/Brands/brands';
import NotFound from './pages/NotFound/not_found';

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/distribuidores"><Dealers /></Route>
          <Route exact path="/marcas"><Brands /></Route>
          <Route exact path="*"><NotFound /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
