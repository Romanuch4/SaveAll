import React from "react";
import { Formik } from 'formik';
import classNames from './dashboard.module.css';

export const DashboardContentCreate = React.memo(({ addFolder, dispatch }) => {
  // false - no edit mode, true - edit mode
  const [status, setStatus] = React.useState(false);
  const setEditStatus = () => {
    setStatus(!status);
  }
  return (
    <>
      <div className="container">
        <h2 className={classNames.DashboardTitle}>
          Створення
        </h2>
        <div className={classNames.DashboardCreate}>
          <div className={classNames.DashboardCreateItem} onClick={setEditStatus} tabIndex="0">
            <div className={classNames.DashboardCreateItemIcon}></div>
            <h3 className={classNames.DashboardCreateItemTitle}>
              Нова тека
            </h3>
          </div>
        </div>
      </div>
      <div className={`${classNames.DashboardCreatePopup} ${status ? classNames.DashboardCreatePopupActive : ''}`}>
        <div className={classNames.DashboardPopupBody}>
          <button className={classNames.DashboardPopupClose} onClick={setEditStatus}></button>
          <h3>
            Введіть назву теки
          </h3>
          <Formik
            initialValues={{ folderName: '' }}
            validate={values => {
              const errors = {};
              if (!values.folderName) {
                errors.folderName = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(addFolder(JSON.parse(JSON.stringify(values, null, 2)).folderName));
              setEditStatus();
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={classNames.DashboardPopupForm} onSubmit={handleSubmit}>
                <input
                  className={classNames.DashboardPopupInput}
                  type="text"
                  name="folderName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.folderName}
                />
                {errors.folderName && touched.folderName && errors.folderName}
                <button className={classNames.dashboardUserPopupBtn} type="submit" disabled={isSubmitting}>
                  Створити
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
});