import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles () {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to="/profiles/june">june</Link></li>
                <li><Link to="/profiles/homer">homer</Link></li>
            </ul>
            {/* 
                render속성을 사용하면, 컴포넌트를 사용하는것이 아닌 바로 함수형 컴포넌트를 선언할 수 있음 
                match, location props를 받아와 사용할 수 있다.

                render를 사용했을때 장점
                -> 컴포넌트의 내부의 변수를 참조하고 싶을때 바로 사용할 수 있다.

                탭메뉴가 있는경우 서브라우트를 사용하면 편리하다.
            */}
            <Route 
                path="/profiles" 
                exact 
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile}/>
            <WithRouterSample/>
        </div>
    );
};

export default Profiles;