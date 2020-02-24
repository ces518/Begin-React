import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App () {
    return (
        <div>
            {/* 
                Link 컴포넌트
                - 특정 주소로 변경하도록 해주는 컴포넌트
             */}
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <hr />
            {/* 
                Route 컴포넌트
                - 특정주소에 따라 특정 컴포넌트를 보여주도록 지정하는 컴포넌트
                exact 속성을 넣어주면 path가 완전히 일치할때만 보여준다. 
                지정하지 않으면 /about으로 접근했을때도 Home 컴포넌트가 보인다.
             */}
            <Route path="/" component={Home} exact /> 
            <Route path="/about" component={About}/>
            <Route path="/profiles" component={Profiles}/>
            <Route path="/history" component={HistorySample}/>
            {/* 
                :username 이 Profile 컴포넌트의 match props를 통해 받을수 있는 URL 파라메터 키값이다.
             */}
            {/* <Route path="/profiles/:username" component={Profile}/> */}

        </div>
    );
};

export default App;