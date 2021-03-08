import React from 'react';
import { SignForm } from './sign-form';
import classNames from './sign.module.css';

export const SignIn = React.memo(() => {
  return (
    <div className={classNames.formContainer}>
      <div className={classNames.formLogo}>SaveAll</div>
      <h3 className={classNames.formTitle}>Ласкаво просимо</h3>
      <p className={classNames.formP}>Введіть всі необхідні дані для реєстрації</p>
      <SignForm />
    </div>
  );
});
