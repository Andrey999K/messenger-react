# Тестовое задание на должность Front-end (React) разработчик

**Демо:** <https://andrey999k.github.io/messenger-react>

Pet-проект с использованием js-фреймворка **React**.

***

Используемые технологии:
* HTML
* SCSS
* TypeScript
* React
* DayJs
* Axios

***

В разработке использовал компонентный подход. Компоненты функциональные.  
Каждый компонент состоит из:  
— **tsx** файла с самим компонентом  
— **ts** файла с интерфейсом компонента, если он требуется  
— **scss** файла со стилями компонента, если они требуются  
  
Компоненты:
  
  1. **ChatItemList**  
  Панель чатов. Принимает 2 пропса:  
    1) _chats_ — список чатов  
    2) _showMessages_ — функция показывающая сообщения чата  
      
  2. **Header**  
  Элемент header. Принимает 2 пропса:  
    1) icon — svg иконку
    2) text — текст  
      
  3. **Input**  
  Поле для ввода сообщений. Принимает 3 пропса:  
    1) _value_ — значение поля  
    2) _iconAttach_ — svg иконка кнопки прикрепления файла  
    3) _iconSend_ — svg иконка кнопки отправки сообщения  
      
  4. **Message**  
  Компонент сообщения. Принимает 2 пропса:  
    1) _firstMessage_ — true - если сообщение идёт первым перед несколькими сообщениями подряд от одного пользователя. Если true, то перед сообщением показывается аватар и имя пользователя, отправившего сообщение.  
    2) _data_ — объект с данными сообщения  
    
  5. **NewMessage**  
  Индикатор показывающий начало части диалога с непрочитанными сообщениями. (Полоса с надписью _"Новое сообщение"_ в диалоге).  
  Не имеет входных параметров и как следствие интерфейса.
    
  6. **SystemMessage**  
  Компонент системного сообщения. Принимает единственный пропс _text_ — текст служебного сообщения.  
    
  7. **Time**  
  Компннент времени. Принимает пропс _time_ — временная метка Unix.  
  Внутри компонента временная метка преобразуется в читаемый формат с помощью функций библиотеки [**dayjs**](https://day.js.org/).
    
  8. **MessageWrapper**  
  Компонент представляющий из себя обёртку вокруг сообщения. Служит для того, чтобы добавлять служебное сообщение или полосу "Новое сообщение" перед пользовательским сообщением.  
  Принимает 3 пропса:  
    1) _message_ — объект с данными сообщения  
    2) _newDay_ — индикатор начала нового дня. Если дата текущего сообщения отличается от даты предыдущего сообщения, перед сообщением вставляется служебное сообщение с датой текущего сообщения.  
    3) _firstMessage_ — true - если сообщение идёт первым перед несколькими сообщениями подряд от одного пользователя. Если true, то перед сообщением показывается аватар и имя пользователя, отправившего сообщение.  
    
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
