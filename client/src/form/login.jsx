import React from 'react';
import { useDispatch } from 'react-redux';
import { MyForm } from './form';
import classNames from './form.module.css';

export const LogIn = React.memo(({ logIn }) => {
  const dispatch = useDispatch();
  const confirmLogin = () => {
    dispatch(logIn());
  }
  return (
    <div className={classNames.formContainer}>
      <div className={classNames.formLogo}>SaveAll</div>
      <h3 className={classNames.formTitle}>Ласкаво просимо</h3>
      <MyForm type="log" confirmLogin={confirmLogin} />
    </div>
  );
});
