import React from 'react';
import { MyForm } from './form';
import classNames from './form.module.css';

export const SignIn = React.memo(() => {
  return (
    <div className={classNames.formContainer}>
      <div className={classNames.formLogo}>SaveAll</div>
      <h3 className={classNames.formTitle}>Ласкаво просимо</h3>
      <p className={classNames.formP}>Введіть всі необхідні дані для реєстрації</p>
      <MyForm type="sign" />
    </div>
  );
});
