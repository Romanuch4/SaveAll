import React from 'react';
import { useParams } from 'react-router';
import classNames from './folder.module.css';


export const Folder = React.memo(() => {
  const { folderName } = useParams();
  return (
    <h1>
      {folderName}
    </h1>
  );
});

export default Folder;
