import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Scss from './Scss';
import App from './api_starter/App';

// id가 root인것을 찾아 리액트 앱을 넣어준다.
// ReactApp을 랜더링할때는 root 엘리먼트 (div) 안에 랜더링 하는것이다.
ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();
