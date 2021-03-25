import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from "./folder.module.css";

export const FolderForm = React.memo(({ dispatch, folderName, addFiles, }) => {
  return (
    <div className={classNames.folderForm}>
      <h2 className="title">
        Створити новий файл
      </h2>
      <Formik
        initialValues={{ title: '', content: '' }}
        validate={values => {
          const errors = {};
          if (!values.title || !values.content) {
            errors.title = "Обов'язково";
          } else if (values.title.length > 30) {
            errors.title = "Назва може містити не більше 30-ти символів";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const fileData = JSON.parse(JSON.stringify(values, null, 2));
          const fileName = `${fileData.title}.txt`;
          const src = `data:text/plain;content-disposition=attachment;filename=file,${fileData.content}`;
          dispatch(addFiles({ src, fileName, folderName }));
          values.title = "";
          values.content = "";
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={classNames.formGrid}>
              <label className={classNames.formLabel}>
                <span className={classNames.formSpan}>Введіть ім'я файла</span>
                <Field className="input" type="text" name="title" placeholder="Main.java" />
                <ErrorMessage className="errorMessage" name="title" component="div" />
              </label>
              <label className={classNames.formLabel1}>
                <Field className={`input ${classNames.formTextarea}`} as="textarea" type="text" name="content" />
              </label>
              <button className="form-btn" type="submit" disabled={isSubmitting}>
                Створити
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
});