import React from 'react';
import classNames from './folder.module.css';


export const FolderHeader = React.memo(({ folderName, addFiles, dispatch }) => {
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
        dispatch(addFiles({ src, fileName, folderName }));
      }
      reader.readAsDataURL(file);
    })
  }

  return (
    <div className={classNames.folderHeader}>
      <h2 className="title">
        Тека: {folderName}
      </h2>
      <label className={classNames.upload}>
        <button className={`${classNames.uploadBtn} btn`} onClick={triggerInput}>Завантажити файл</button>
        <input type="file" className={classNames.uploadInput} onChange={downloadFileToServer} multiple />
      </label>
    </div>
  );
});
