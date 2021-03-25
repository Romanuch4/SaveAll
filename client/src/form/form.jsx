import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import classNames from './form.module.css';

export const MyForm = React.memo(({ type, confirmLogin }) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = `Поле email обов'язкове`;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Некоректна email-адреса';
        } else if (!values.password) {
          errors.password = `Поле пароль обов'язкове`;
        } else if (values.confirmPassword !== values.password && type === "sign") {
          errors.confirmPassword = 'Паролі мають бути однакові';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const accountData = JSON.parse(JSON.stringify(values, null, 2));
          console.log(accountData);
          setSubmitting(false);
          if (type === "sign") {
            history.push('/login');
          } else if (type === "log") {
            confirmLogin();
            history.push('/dashboard');
          }
        }, 0);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classNames.form}>
          <label className={classNames.formLabel}>
            <Field className={`input ${classNames.formInput}`} placeholder="example@gmail.com" type="email" name="email" />
            <div className={classNames.formInputTitle}>Введіть email</div>
            <ErrorMessage className="errorMessage" name="email" component="div" />
          </label>
          <label className={classNames.formLabel}>
            <Field className={`input ${classNames.formInput}`} placeholder="password" type="password" name="password" />
            <div className={classNames.formInputTitle}>Введіть пароль</div>
            <ErrorMessage className="errorMessage" name="password" component="div" />
          </label>
          {type === "sign" ? <label className={classNames.formLabel}>
            <Field className={`input ${classNames.formInput}`} placeholder="password" type="password" name="confirmPassword" />
            <div className={classNames.formInputTitle}>Введіть пароль повторно</div>
            <ErrorMessage className="errorMessage" name="confirmPassword" component="div" />
          </label> : ""}
          <button className="form-btn" type="submit" disabled={isSubmitting}>
            {type === "sign" ? "Створити акаунт" : "Увійти"}
          </button>
        </Form>
      )}
    </Formik>
  )
});