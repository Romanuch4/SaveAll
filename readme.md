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

1. https://start.spring.io/ (для легкого старту, одразу імпортуємо Web & DevTools);

Встановимо всі вищевказані бібліотеки.
Весь Frontend розміщений в папці client. Вхідна точка ./client/src/index.js
Шлях до Store: ./client/src/store/store.js
В папці ./client/src/store будуть зберігатися також action-creators та reducers у відповідних папках.
Як тільки починає виконуватись запит на сервер, показується Preloader ./client/src/preloader/preloader.js
У файлі ./client/src/form/sign-form.jsx при натисканні на кнопку спрацьовує подія onSubmit, яка, при позитивній відповіді з серверу робить релокацію на '/login'(useHistory) . При цьому спрацьовує Route і показується компонент <Login> . Трохи про Router: кореневий компонент App обернений в <BrowserRouter> для того,
щоб працював <Route>. <Route> на основі URL рендерить необхідний компонент.
В компонент Ґ<MyForm> закидуємо параметр "type" відповідного до якого буде рендеритися або реєстрація, або авторизація.
При успішній логінізації відкривається сторінка Dashboard(по такому ж принципу).
При кліці на Us буде показаний блок з логіном та кнопкою Вийти(useHistory, змінюємо isAuth, відображення блока регулюється React.useState).
При натисканні на нову теку відкриється модальне вікно(показ на React.useState . Після введення імені(форма на Formik) буде dispatch ф-ції addFolder.)
При натисканні на іконку «Сміття» папка видалиться(dispatch ф-ції deleteFolder).
При натисканні на саму теку здійснюється <Route /> на неї(параметром служить ім'я теки без пробілів). Для відображення конкретної папки використовується рядок: const { folderName } = useParams();
Файли користувача - folders.files .
У файлі ./client/src/folder/folder.jsx знаходиться конкретна тека і відобрається її вміст. Якщо користувач
не авторизований, він не може відкрити вміст теки(<Redirect to="/login" />).
При натисканні на кнопку «Завантажити» спрацьовує input type=[file], котрий викликає new FileReader(). При спрацьовуванні події onload виконується dispatch і в reducer іде action з файлом в форматі base64, з іменем файла та текою, до якої треба завантажити файл.
Наш state складається з таких полів:

1. isLoading(якщо true, то треба показати Preloader і навпаки);
2. isAuth(якщо true, то можна показати сторінку Dashboard і навпаки);
3. folders(всі проєкти користувача);
