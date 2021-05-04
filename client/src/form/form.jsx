import React from 'react';
import { useHistory } from "react-router-dom";
import classNames from './form.module.css';
import { useDispatch } from 'react-redux';
import { setInitialDataThunk } from '../store/actions/dashboard-ac';


export const Form = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logIn = () => {
    dispatch(setInitialDataThunk(history));
  }
  return (
    <button className={`form-btn ${classNames.formBtn}`} onClick={logIn}>
      Авторизуватися через Google
    </button>
  )
});