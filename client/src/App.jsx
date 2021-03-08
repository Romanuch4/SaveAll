import React from 'react';
import classNames from './App.module.css';
import { SignIn } from './sign/sign';
import { Preloader } from './preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';

const App = React.memo(() => {
  const state = useSelector((state) => {
    return {
      isLoad: state.common.isLoad,
    };
  });
  return (
    <div className={classNames.app}>
      {state.isLoad ? <Preloader /> : ''}
      <div className={classNames.signLogContainer}>
        <SignIn />
      </div>
    </div>
  );
});

export default App;
