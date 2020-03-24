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
          <Route exact path="/"><Home /></Route>
          <Route exact path="/distribuidores"><DealersList /></Route>
          <Route exact path="/distribuidores/:id" children={<Dealer />} />
          <Route exact path="/marcas"><Brands /></Route>
          <Route exact path="*"><NotFound /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
