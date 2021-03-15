import React from "react";
import classNames from './dashboard.module.css';
import { useDispatch } from "react-redux";
import { DashboardContentCreate } from "./dashboard-create";
import { DashboardContentFolders } from "./dashboard-folders";

export const DashboardContent = React.memo(({ folders, deleteFolder, addFolder }) => {
  const dispatch = useDispatch();
  return (
    <div className={classNames.DashboardContent}>
      <DashboardContentCreate addFolder={addFolder} dispatch={dispatch} />
      <DashboardContentFolders folders={folders} deleteFolder={deleteFolder} dispatch={dispatch} />
    </div>
  )
});