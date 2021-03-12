import React from 'react';
import classNames from './dashboard.module.css';

export const DashboardHeader = React.memo(() => {
  //false - hide popup, true - show. 
  //hidePopup вешается на window и проверяет область(класс), по которой кликнули. Если это не иконка User или 
  //не само окно Popup, то hidePopup вызвет setState(false).
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    const hidePopup = (evt) => {
      const currentClasses = Array.from(evt.srcElement.classList);
      const iscurrentClassPopup = currentClasses.includes(classNames.dashboardHeaderUser) ||
        currentClasses.includes(classNames.dashboardUserPopup) ||
        currentClasses.includes(classNames.dashboardUserPopupBtn);
      if (!iscurrentClassPopup) {
        setState(false);
      }
    }
    window.addEventListener('click', hidePopup);
    return () => {
      window.removeEventListener('click', hidePopup);
    }
  }, []);

  const logOut = () => {
    window.location.href = 'http://localhost:3000/login';
  }

  const showHidePopup = () => {
    setState(!state);
  }

  const showHidePopupKey = (evt) => {
    console.log(evt.key);
  }
  return (
    <header className={classNames.dashboardHeader}>
      <h1 className={classNames.dashboardHeaderTitle}><span className={classNames.dashboardHeaderTitleSpan}>SaveAll</span> | Dashboard</h1>
      <div className={classNames.dashboardHeaderUserWrap}>
        <div className={`${classNames.dashboardHeaderUser} ${state ? classNames.dashboardHeaderUserActive : ''}`} onKeyDown={showHidePopupKey} onClick={showHidePopup} tabIndex="0">Us</div>
        <div className={`${classNames.dashboardUserPopup} ${!state ? classNames.dashboardUserPopupHide : ''}`}>
          User: LoignOfUser
          <button className={`${classNames.dashboardUserPopupBtn}`} onClick={logOut}>
            Вийти
          </button>
        </div>
      </div>
    </header>
  );
});