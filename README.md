# Begin React
- React Study 
    - 2019 09 30

#### 1. 개발환경 세팅하기
- vscode, node 설치
- create-react-app 을 통해 리액트 개발환경 편리하게 세팅하기
    - npx를 활용하여 설치한다.
    - npx create-react-app begin-react
- 설치가 완료되면 cd begin-react 
    - begin-react 디렉터리로 이동한다.
- npm start begin-react
    - react 개발서버를 실행한다.
- 리액트 개발서버가 실행되고 나면 localhost:3000 으로 리액트 앱에 접근이 가능하다.


#### 2. 나의 첫번째 리액트 컴포넌트

##### 컴포넌트 생성하기
- src 디렉터리에 Hello.js 파일을 생성한다.
- 컴포넌트는 **class 컴포넌트**와 **함수형 컴포넌트** 두가지 방식이 존재한다.
- 이번에는 함수형 컴포넌트 방식으로 진행한다.

`Hello.js`
- 컴포넌트의 이름은 대문자로 시작한다.
- 컴포넌트에서 JSX 를 리턴한다.
    - HTML 처럼 생겼지만 HTML은 아니다.
- Hello 컴포넌트를 export default를 통해 다른곳에서도 사용할수 있도록 내보내준다.
```javascript
import React from 'react';
// 리액트를 사용하려면 React 를 import 해주어야한다.

// 컴포넌트 는 대문자로 시작한다.
// jsx를 리턴한다.
// html처럼 생겼지만 html은 아니다.
function Hello () {
    return <div>안녕하세요?</div>;
}

// Hello 컴포넌트를 내보내준다는 의미
export default Hello;
```

##### 컴포넌트 사용하기
`App.js`
- Hello 컴포넌트를 import 를 사용해서 불러온다.
    - 이때 컴포넌트의 경로는 상대경로로 지정하며, js 는 생략한다.
- 생성한 컴포넌트는 여러번 재사용 할 수 있다.
```javascript
import React from 'react';
// Hello 컴포넌트를 불러온다.
import Hello from './Hello';

// Hello 컴포넌트는 여러번 재사용 할 수있다.
function App() {
  return (
    <div>
        <Hello />
        <Hello />
        <Hello />
    </div>
  );
}

export default App;
```

##### 리액트 앱의 랜더링
- React App을 랜더링 하기위해서는 React App을 감싸는 Root Element가 필요하다.

`Index.js`
- public/index.html에서 id가 root 인 엘리먼트를 찾아 리액트 앱을 랜더링한다.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// id가 root인것을 찾아 리액트 앱을 넣어준다.
// ReactApp을 랜더링할때는 root 엘리먼트 (div) 안에 랜더링 하는것이다.
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
```

`public/index.html`
```html
<html>
    ...
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- 여기에 리액트 앱을 랜더링 한다. -->
    <div id="root"></div>

  </body>
</html>
```