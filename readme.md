SaveAll — програма для зберігання свого коду.
gitHub: https://github.com/Romanuch4/SaveAll
Frontend:

1. React(бібліотека для швидкого рендерингу компонентів);
2. Redux(бібліотека для State-management на клієнті);
3. React-redux(бібліотека, що дає можливість взаємодіяти з Redux не напряму, а через useDispatch & useSelector);
4. Redux-thunk(бібліотека для створення асинхронних ф-цій, що роблять запити а сервер);
5. Formik(бібліотека для обробки форм);
6. Axios(бібліотека для взаємодії з сервером);

Backend:

1. https://start.spring.io/(для легкого старту, одразу імпортуємо Web & DevTools);

Встановимо всі вищевказані бібліотеки.
Весь Frontend розміщений в папці client. Вхідна точка ./client/src/index.js
Шлях до Store: ./client/src/store/store.js
В папці ./client/src/store будуть зберігатися також action-creators та reducers у відповідних папках.
Як тільки починає виконуватись запит на сервер, показується Preloader ./client/src/preloader/preloader.js
У файлі ./client/src/form/sign-form.jsx при натисканні на кнопку спрацьовує подія onSubmit, яка, при позитивній відповіді з серверу робить глобальну релокацію window.location.href += '/login' . При цьому спрацьовує Route і показується компонент <Login> . Трохи про Router: кореневий компонент App обернений в <BrowserRouter> для того,
щоб працював <Route>. <Route> на основі URL рендерить необхідний компонент.
В компонент Ґ<MyForm> закидуємо параметр "type" відповідного до якого буде рендеритися або реєстрація, або авторизація.
При успішній логінізації відкривається сторінка Dashboard.
