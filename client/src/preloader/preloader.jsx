import React from 'react';
import classNames from './preloader.module.css';

export const Preloader = () => {
  return (
    <div className={classNames['preloader']}>
      <div className={classNames['sk-chase']}>
        <div className={classNames['sk-chase-dot']}></div>
        <div className={classNames['sk-chase-dot']}></div>
        <div className={classNames['sk-chase-dot']}></div>
        <div className={classNames['sk-chase-dot']}></div>
        <div className={classNames['sk-chase-dot']}></div>
        <div className={classNames['sk-chase-dot']}></div>
      </div>
    </div>
  );
};
