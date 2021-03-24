import React from 'react';
import { DashboardContent } from './dashboard-content';
import { Header } from '../header/header';
import { Redirect } from 'react-router-dom';
import classNames from './dashboard.module.css';

export const Dashboard = React.memo(({ isAuth, logOut, folders, deleteFolder, addFolder }) => {
  if (!isAuth) {
    return <Redirect to="/login" />
  }
  return (
    <div className={classNames.dashboard}>
      <Header logOut={logOut} />
      <DashboardContent folders={folders} deleteFolder={deleteFolder} addFolder={addFolder} />
    </div>
  );
});