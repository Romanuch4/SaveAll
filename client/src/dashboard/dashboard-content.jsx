import React from "react";
import classNames from './dashboard.module.css';
import folderIcon from '../assets/folder-button.svg';
import trashIcon from '../assets/trash.svg';

export const DashboardContent = React.memo(() => {
  return (
    <div className={classNames.DashboardContent}>
      <div className="container">
        <h2 className={classNames.DashboardTitle}>
          Створення
        </h2>
        <div className={classNames.DashboardCreate}>
          <div className={classNames.DashboardCreateItem} tabIndex="0">
            <div className={classNames.DashboardCreateItemIcon}></div>
            <h3 className={classNames.DashboardCreateItemTitle}>
              Нова тека
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className={classNames.DashboardTitle}>
          Мої проєкти
        </h2>
        <ul className={classNames.DashboardProjects}>
          <li className={classNames.DashboardProjectsItem} tabIndex="0">
            <div className={classNames.DashboardItemLeft}>
              <img className={classNames.DashboardItemIcon} src={folderIcon} alt="folder" />
              <h3 className={classNames.DashboardItemTitle}>
                FolderName1
              </h3>
            </div>

            <div className={classNames.DashboardItemDate}>
              13.01.2021
            </div>

            <button className={classNames.DashboardItemBtn}>
              <img className={classNames.DashboardItemBtnImg} src={trashIcon} alt="delete folder" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
});