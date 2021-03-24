import React from 'react';
import { Redirect, useParams } from 'react-router';
import { Header } from '../header/header';
import fileIcon from '../assets/file.svg';
import classNames from './folder.module.css';
import { FolderHeader } from './folder-header';


export const Folder = React.memo(({ isAuth, folders, addFiles }) => {
  /* if (!isAuth) {
    return <Redirect to="/login" />
  } */
  const { folderName } = useParams();
  //Отримуємо необхідну папку: порівнюємо URL та ім'я теки і повертаємо збіг, який має бути лише один.
  const folder = folders.find((item) => item.name.replace(/\s/g, '') === folderName);
  const files = folder.files.map((file) => {
    console.log(file);
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
      <Header />
      <div className="content">
        <div className="container">
          <FolderHeader folderName={folder.name} addFiles={addFiles} />
          <div className={classNames.files}>
            {files.length ? files : <span className={classNames.filesPlug}>Ні одного файла не знайдено.</span>}
          </div>
        </div>
      </div>
    </>
  );
});