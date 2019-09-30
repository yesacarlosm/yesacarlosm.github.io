import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/routes/home/HomePage';

const AppRouter = (props) => {
  return (
    <div className='container-fluid container-no-border'>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default AppRouter;
