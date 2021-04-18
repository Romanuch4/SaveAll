import React from 'react';
import { Form } from './form';
import classNames from './form.module.css';

export const SignIn = React.memo(({ logIn }) => {
  return (
    <div className={classNames.formContainer}>
      <div className={classNames.formLogo}>SaveAll</div>
      <h3 className={classNames.formTitle}>Ласкаво просимо</h3>
      <p className={classNames.formP}>
        SaveAll — REST-Application для збереження вашого коду.
        Після авторизації через Google ви зможете створювати теки та файли з кодом.
      </p>
      <Form confirmLogin={logIn} />
    </div>
  );
});
