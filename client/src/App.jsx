import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './form/sign';
import { Preloader } from './preloader/preloader';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { LogIn } from './form/login';
import { Dashboard } from './dashboard/dashboard';
import { logIn, logOut } from './store/actions/common-ac';

const App = React.memo(() => {
  const state = useSelector((state) => {
    return {
      isLoading: state.common.isLoading,
      isAuth: state.common.isAuth,
      folders: state.dashboard.folders,
    };
  });
  return (
    <>
      {state.isLoading ? <Preloader /> : ''}
      <Route exact path="/" render={() => <div className={classNames.appSignLog}>
        <div className={classNames.signLogContainer}>
          <SignIn />
        </div>
      </div>} />
      <Route exact path="/login" render={() => <div className={classNames.appSignLog}>
        <div className={classNames.signLogContainer}>
          <LogIn logIn={logIn} />
        </div>
      </div>} />
      <Route exact path="/dashboard" render={() => <Dashboard isAuth={state.isAuth} logOut={logOut} folders={state.folders} />} />
    </>

  );
});

export default App;
