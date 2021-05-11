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

1. https://start.spring.io/ (для старту, одразу імпортуємо Web & DevTools);
2. https://sentry.io/welcome/(для відслідковування помилок на клієнті);

Встановимо всі вищевказані бібліотеки.
Весь Frontend розміщений в папці client. Вхідна точка ./client/src/index.js
Шлях до Store: ./client/src/store/store.js
В папці ./client/src/store будуть зберігатися також action-creators та reducers у відповідних папках.
Як тільки починає виконуватись запит на сервер, показується Preloader ./client/src/preloader/preloader.js
У файлі ./client/src/form/form.jsx при натисканні на кнопку спрацьовує подія onSubmit, яка, при позитивній відповіді з серверу робить релокацію на '/dashboard'(useHistory) . При цьому спрацьовує Route і показується компонент <Dashboard /> . Трохи про Router: кореневий компонент App обернений в <BrowserRouter> для того,
щоб працював <Route>. <Route> на основі URL рендерить необхідний компонент.
При успішній авторизації відкривається сторінка Dashboard.
При кліці на Us буде показаний блок з логіном та кнопкою Вийти(useHistory, змінюємо isAuth, відображення блока регулюється React.useState).
При натисканні на новий файл буде redirect на /dashboard/create_file .
При натисканні на кнопку створити виконається addFileThunk(створиться файл, який потім буде відправлений на сервер та доданий на сторінку).

При натисканні на кнопку «Завантажити» спрацьовує input type=[file], котрий викликає new FileReader(). При спрацьовуванні події onload виконується dispatch і в reducer іде action з файлом в форматі base64 та з іменем файла.
Наш state складається з таких полів:

1. isLoading(якщо true, то треба показати Preloader і навпаки);
2. isAuth(якщо true, то можна показати сторінку Dashboard і навпаки);
3. files(всі файли користувача);
