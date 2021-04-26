import React from "react";
import classNames from './dashboard.module.css';
import fileIcon from '../assets/file.svg';
import { Link } from "react-router-dom";

export const DashboardContentCreate = React.memo(({ files, addFile, dispatch }) => {
  const makeOnInputFocus = () => {
    console.log(true);
  }

  const triggerInput = (evt) => {
    //input type=[file] = evt.target.nextElementSibling
    evt.target.nextElementSibling.click();
  }

  const downloadFileToServer = (evt) => {
    if (!evt.target.files.length) {
      return;
    }
    const files = Array.from(evt.target.files);
    files.forEach((file) => {
      /* if (!file.type.match('image')) {
        return;
      } */

      const reader = new FileReader();

      reader.onload = (ev) => {
        const src = ev.target.result;
        const fileName = file.name;
        dispatch(addFile({ src, fileName }));
      }
      reader.readAsDataURL(file);
    })
  }

  const items = files.map((file) => {
    return (
      <div key={file.fileName + Math.random() * 10} className={classNames.file}>
        <img className={classNames.fileIcon} src={fileIcon} alt="file" />
        <h3 className={classNames.fileTitle}>
          {file.fileName}
        </h3>
        <div className={classNames.fileDownloadWrap}>
          <a className="btn" href={file.fileURL} download={file.fileName}>Завантажити</a>
        </div>
      </div>
    )
  });
  return (
    <>
      <div className="container">
        <h2 className="title">
          Створення
        </h2>
        <div className={classNames.DashboardCreate}>
          <Link className={classNames.DashboardCreateItem} to="/dashboard/create_file" onClick={makeOnInputFocus}>
            <div className={classNames.DashboardCreateItemIcon}></div>
            <h3 className={classNames.DashboardCreateItemTitle}>
              Створити файл
            </h3>
          </Link>
          {items}
        </div>
        <div className={classNames.folderHeader}>
          <h2 className="title">
            Завантаження
          </h2>
          <label className={classNames.upload}>
            <button className={`${classNames.uploadBtn} btn`} onClick={triggerInput}>Завантажити файл</button>
            <input type="file" className={classNames.uploadInput} onChange={downloadFileToServer} multiple />
          </label>
        </div>
      </div>
    </>
  )
});