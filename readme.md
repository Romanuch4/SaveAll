SaveAll — програма для зберігання свого коду.
gitHub:
Frontend:

1. React(бібліотека для швидкого рендерингу компонентів);
2. Redux(бібліотека для State-management на клієнті);
3. React-redux(бібліотека, що дає можливість взаємодіяти з Redux не напряму, а через useDispatch & useSelector);
4. Redux-thunk(бібліотека для створення асинхронних ф-цій, що роблять запити а сервер);
5. Formik(бібліотека для обробки форм);
6. Axios(бібліотека для взаємодії з сервером);

Backend:

Встановимо всі вищевказані бібліотеки.
Весь Frontend розміщений в папці client. Вхідна точка ./client/src/index.js
Шлях до Store: ./client/src/store/store.js
В папці ./client/src/store будуть зберігатися також action-creators та reducers у відповідних папках.
