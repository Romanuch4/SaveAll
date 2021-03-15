import React from "react";
import classNames from './dashboard.module.css';
import folderIcon from '../assets/folder-button.svg';
import trashIcon from '../assets/trash.svg';

export const DashboardContentFolders = React.memo(({ folders, deleteFolder, dispatch }) => {
  const deleteItem = id => {
    dispatch(deleteFolder(id));
  }
  const items = folders.length ? folders.map((item) => {
    return (
      <li key={item.id} className={classNames.DashboardProjectsItem} tabIndex="0">
        <div className={classNames.DashboardItemLeft}>
          <img className={classNames.DashboardItemIcon} src={folderIcon} alt="folder" />
          <h3 className={classNames.DashboardItemTitle}>
            {item.name}
          </h3>
        </div>

        <div className={classNames.DashboardItemDate}>
          {item.date}
        </div>

        <button className={classNames.DashboardItemBtn} onClick={() => deleteItem(item.id)}>
          <img className={classNames.DashboardItemBtnImg} src={trashIcon} alt="delete folder" />
        </button>
      </li>
    )
  }) : 'Поки тут пусто. Натисність «Нова тека», щоб почати роботу';
  return (
    <div className="container">
      <h2 className={classNames.DashboardTitle}>
        Мої проєкти
      </h2>
      <ul className={classNames.DashboardProjects}>
        {items}
      </ul>
    </div>
  )
});