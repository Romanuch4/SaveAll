import React from 'react';
import { DashboardContent } from './dashboard-content';
import { Header } from '../header/header';
import { Redirect } from 'react-router-dom';
import classNames from './dashboard.module.css';

export const Dashboard = React.memo(({ isAuth, logOut, files, deleteFile, addFile }) => {
  if (!isAuth) {
    return <Redirect to="/" />
  }
  return (
    <div className={classNames.dashboard}>
      <Header logOut={logOut} />
      <DashboardContent files={files} deleteFile={deleteFile} addFile={addFile} />
    </div>
  );
});