import React from 'react';
import classNames from './dashboard.module.css';

export const DashboardHeader = React.memo(() => {
  return (
    <header className={classNames.dashboardHeader}>
      <h1 className={classNames.dashboardHeaderTitle}><span className={classNames.dashboardHeaderTitleSpan}>SaveAll</span> | Dashboard</h1>
      <div className={classNames.dashboardHeaderUser}></div>
    </header>
  );
});