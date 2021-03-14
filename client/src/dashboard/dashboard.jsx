import React from 'react';
import { DashboardContent } from './dashboard-content';
import { DashboardHeader } from './dashboard-header';
import { Redirect } from 'react-router-dom';
import classNames from './dashboard.module.css';

export const Dashboard = React.memo(({ isAuth, logOut, folders }) => {
  if (!isAuth) {
    return <Redirect to="/login" />
  }
  return (
    <div className={classNames.dashboard}>
      <DashboardHeader logOut={logOut} />
      <DashboardContent folders={folders} />
    </div>
  );
});