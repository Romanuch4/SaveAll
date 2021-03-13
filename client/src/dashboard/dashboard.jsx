import React from 'react';
import { DashboardContent } from './dashboard-content';
import { DashboardHeader } from './dashboard-header';
import classNames from './dashboard.module.css';

export const Dashboard = React.memo(() => {
  return (
    <div className={classNames.dashboard}>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
});