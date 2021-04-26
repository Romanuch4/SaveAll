import React from "react";
import { useDispatch } from "react-redux";
import { DashboardContentCreate } from "./dashboard-create";

export const DashboardContent = React.memo(({ files, deleteFile, addFile }) => {
  const dispatch = useDispatch();
  return (
    <div className="content">
      <DashboardContentCreate files={files} addFile={addFile} dispatch={dispatch} />
    </div>
  )
});