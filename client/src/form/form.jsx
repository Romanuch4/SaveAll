import React from 'react';
import { useHistory } from "react-router-dom";
import classNames from './form.module.css';
import { useDispatch } from 'react-redux';
import { data } from '../api/api';


export const Form = React.memo(({ confirmLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logIn = async () => {
    const localData = await data.getData();
    dispatch(confirmLogin());
    history.push('/dashboard');
    console.log(localData.data);
  }
  return (
    <button className={`form-btn ${classNames.formBtn}`} onClick={logIn}>
      Авторизуватися через Google
    </button>
  )
});