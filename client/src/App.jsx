import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './form/sign';
import { Preloader } from './preloader/preloader';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router';
import { Dashboard } from './dashboard/dashboard';
import { logIn, logOut } from './store/actions/common-ac';
import { addFile, deleteFile } from './store/actions/dashboard-ac';
import { Plug } from './plug/plug';
import { FileForm } from './dashboard/file-form';

const App = React.memo(() => {
  const history = useHistory();
  const location = history.location.pathname;
  const state = useSelector((state) => {
    return {
      isLoading: state.common.isLoading,
      isAuth: state.common.isAuth,
      files: state.dashboard.files,
    };
  });

  return (
    <>
      {state.isLoading ? <Preloader /> : ''}
      <Route exact path="/" render={() => <div className={classNames.appSignLog}>
        <div className={classNames.signLogContainer}>
          <SignIn logIn={logIn} />
        </div>
      </div>} />
      <Route exact path="/dashboard" render={() => <Dashboard isAuth={state.isAuth} logOut={logOut} files={state.files} deleteFile={deleteFile} addFile={addFile} />} />
      <Route exact path="/dashboard/create_file" render={() => <FileForm isAuth={state.isAuth} logOut={logOut} addFile={addFile} />} />
      <Route exact path={(location !== "/" && location.indexOf("dashboard") === -1) ? location : "/plug"} render={() => <Plug />} />
    </>
  );
});

export default App;
