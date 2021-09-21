import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AllPeepsPage from '../pages/AllPeepsPage';
import NewPeepPage from '../pages/NewPeepPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/peeps" render={() => <AllPeepsPage />} />
      <Route exact path="/peeps/new" render={() => <NewPeepPage />} />
    </Switch>
  )
}

export default Routes;