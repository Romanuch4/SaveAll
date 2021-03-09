import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './form/sign';
import { Preloader } from './preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { LogIn } from './form/login';
import { Dashboard } from './dashboard/dashboard';

const App = React.memo(() => {
  const state = useSelector((state) => {
    return {
      isLoad: state.common.isLoad,
    };
  });
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  return (
    <>
      {state.isLoad ? <Preloader /> : ''}
      <Route exact path="/" render={() => <div className={classNames.appSignLog}>
        <div className={classNames.signLogContainer}>
          <SignIn />
        </div>
      </div>} />
      <Route exact path="/login" render={() => <div className={classNames.appSignLog}>
        <div className={classNames.signLogContainer}>
          <LogIn />
        </div>
      </div>} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </>

  );
});

export default App;
