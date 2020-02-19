import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Scss from './Scss';
import App from './react_router/App';
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter 를 HistoryAPI를 사용한다.
// HashRouter 는 HashTag를 사용한다.
// MemoryRouter 는 주소가 바뀌지 않고 가상의 주소가 메모리상에서 동작한다.

// id가 root인것을 찾아 리액트 앱을 넣어준다.
// ReactApp을 랜더링할때는 root 엘리먼트 (div) 안에 랜더링 하는것이다.
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);


serviceWorker.unregister();
