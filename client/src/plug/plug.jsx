import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from './plug.module.css';

export const Plug = React.memo(() => {
  const history = useHistory();

  return (
    <div>
      <h1 className={classNames.h1}>
        Упс... Такої сторінки як <code>{history.location.pathname}</code> не існує. <br />
        <Link to="/dashboard" className="form-btn">
          Повернутись на головну.
        </Link>
      </h1>
    </div>
  )
});