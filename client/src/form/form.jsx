import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from './form.module.css';

export const MyForm = ({ type }) => (
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
          window.location.href = 'http://localhost:3000/login'
        } else if (type === "log") {
          window.location.href = 'http://localhost:3000/dashboard'
        }
      }, 0);
    }}
  >
    {({ isSubmitting }) => (
      <Form className={classNames.form}>
        <label className={classNames.formLabel}>
          <Field className={classNames.formInput} placeholder="example@gmail.com" type="email" name="email" />
          <div className={classNames.formInputTitle}>Введіть email</div>
          <ErrorMessage className={classNames.formInputError} name="email" component="div" />
        </label>
        <label className={classNames.formLabel}>
          <Field className={classNames.formInput} placeholder="password" type="password" name="password" />
          <div className={classNames.formInputTitle}>Введіть пароль</div>
          <ErrorMessage className={classNames.formInputError} name="password" component="div" />
        </label>
        {type === "sign" ? <label className={classNames.formLabel}>
          <Field className={classNames.formInput} placeholder="password" type="password" name="confirmPassword" />
          <div className={classNames.formInputTitle}>Введіть пароль повторно</div>
          <ErrorMessage className={classNames.formInputError} name="confirmPassword" component="div" />
        </label> : ""}
        <button className={classNames.formBtn} type="submit" disabled={isSubmitting}>
          {type === "sign" ? "Створити акаунт" : "Увійти"}
        </button>
      </Form>
    )}
  </Formik>
);