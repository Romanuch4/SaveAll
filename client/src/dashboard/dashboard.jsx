import React from 'react';
import { DashboardHeader } from './dashboard-header';
import classNames from './dashboard.module.css';

export const Dashboard = React.memo(() => {
  return (
    <div className={classNames.dashboard}>
      <DashboardHeader />
    </div>
  );
});