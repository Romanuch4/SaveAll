import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './form/sign';
import { Preloader } from './preloader/preloader';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router';
import { Dashboard } from './dashboard/dashboard';
import { logIn, logOut } from './store/actions/common-ac';
import { deleteFolder, addFolder, addFiles } from './store/actions/dashboard-ac';
import { Folder } from './folder/folder';
import { Plug } from './plug/plug';

const App = React.memo(() => {
  const history = useHistory();
  const location = history.location.pathname;
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
          <SignIn logIn={logIn} />
        </div>
      </div>} />
      <Route exact path="/dashboard" render={() => <Dashboard isAuth={state.isAuth} logOut={logOut} folders={state.folders} deleteFolder={deleteFolder} addFolder={addFolder} />} />
      <Route exact path="/dashboard/:folderName" render={() => <Folder isAuth={state.isAuth} folders={state.folders} addFiles={addFiles} logOut={logOut} />} />
      <Route exact path={(location !== "/" && location.indexOf("dashboard") === -1) ? location : "/plug"} render={() => <Plug />} />
    </>
  );
});

export default App;
