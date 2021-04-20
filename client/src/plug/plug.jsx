import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from './plug.module.css';

export const Plug = React.memo(() => {
  const history = useHistory();

  return (
    <div className={`container ${classNames.plugContainer}`}>
      <div className={classNames.plugContent}>
        <h2 className={`${classNames.plugTitle}`}>
          Упс... Такої сторінки як <code>{history.location.pathname}</code> не існує.
        </h2>
        <Link to="/dashboard" className="form-btn">
          Повернутись на головну.
        </Link>
      </div>
    </div>
  )
});