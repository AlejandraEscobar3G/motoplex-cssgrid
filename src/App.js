import React from 'react';

//Components
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/home';
import DealersList from './pages/DealersList/dealers';
import Brands from './pages/Brands/brands';
import Dealer from './pages/Dealer/dealer';
import NotFound from './pages/NotFound/not_found';

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/distribuidores" component={ DealersList } />
          <Route exact path="/distribuidores/:dealerId" component={ Dealer } />
          <Route exact path="/marcas" component={ Brands } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
