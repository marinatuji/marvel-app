import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Favorites } from '../containers';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/favorites">
      <Favorites />
    </Route>
    {/* <Route exact path={`/characters?${id}`}>
      <CharacterDetail />
    </Route> */}
  </Switch>
);

export default Routes;
