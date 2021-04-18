import React from 'react';
import { useHistory } from "react-router-dom";
import classNames from './form.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export const Form = React.memo(({ confirmLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logIn = () => {
    const respondStatus = 200;
    axios.get(`/message`).then((res) => {
      if (res.status === respondStatus) {
        dispatch(confirmLogin());
        history.push('/dashboard');
      }
    });
  }
  return (
    <button className={`form-btn ${classNames.formBtn}`} onClick={logIn}>
      Авторизуватися через Google
    </button>
  )
});