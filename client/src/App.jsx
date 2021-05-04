import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './form/sign';
import { Preloader } from './preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router';
import { Dashboard } from './dashboard/dashboard';
import { finishLoading, logOutThunk } from './store/actions/common-ac';
import { addFileThunk, deleteFile } from './store/actions/dashboard-ac';
import { Plug } from './plug/plug';
import { FileForm } from './dashboard/file-form';

const App = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = history.location.pathname;

  React.useEffect(() => {
    const hiddenPreloader = () => {
      dispatch(finishLoading());
    }
    window.addEventListener('load', hiddenPreloader);
    if (document.readyState === "complete") {
      window.removeEventListener('load', hiddenPreloader);
    }

  }, [dispatch]);

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
          <SignIn />
        </div>
      </div>} />
      <Route exact path="/dashboard" render={() => <Dashboard addFile={addFileThunk} isAuth={state.isAuth} logOut={logOutThunk} files={state.files} deleteFile={deleteFile} />} />
      <Route exact path="/dashboard/create_file" render={() => <FileForm isAuth={state.isAuth} logOut={logOutThunk} />} />
      <Route exact path={(location !== "/" && location.indexOf("dashboard") === -1) ? location : "/plug"} render={() => <Plug />} />
    </>
  );
});

export default App;
