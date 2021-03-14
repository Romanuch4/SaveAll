import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import classNames from './dashboard.module.css';

export const DashboardHeader = React.memo(({ logOut }) => {
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

  const history = useHistory();
  const dispatch = useDispatch();
  const dologOut = () => {
    history.push('/login');
    dispatch(logOut());
  }

  const keysCode = {
    ENTER: 'Enter',
  }

  const showHidePopup = () => {
    setState(!state);
  }

  const showHidePopupKey = (evt) => {
    if (evt.key === keysCode.ENTER) {
      showHidePopup();
    }
  }
  return (
    <header className={classNames.dashboardHeader}>
      <h1 className={classNames.dashboardHeaderTitle}><span className={classNames.dashboardHeaderTitleSpan}>SaveAll</span> | Dashboard</h1>
      <div className={classNames.dashboardHeaderUserWrap}>
        <div className={`${classNames.dashboardHeaderUser} ${state ? classNames.dashboardHeaderUserActive : ''}`} onKeyDown={showHidePopupKey} onClick={showHidePopup} tabIndex="0">Us</div>
        <div className={`${classNames.dashboardUserPopup} ${!state ? classNames.dashboardUserPopupHide : ''}`}>
          User: LoignOfUser
          <button className={`${classNames.dashboardUserPopupBtn}`} onClick={dologOut}>
            Вийти
          </button>
        </div>
      </div>
    </header>
  );
});