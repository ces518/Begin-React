import React from 'react';
// 리액트를 사용하려면 React 를 import 해주어야한다.
// 컴포넌트 는 대문자로 시작한다.
// jsx를 리턴한다.
// html처럼 생겼지만 html은 아니다.


// props 파라미터는 우리가 넣어준값들이 객체형태로 들어있다.
function Hello ({ color, name }) {
    // props.프로퍼티명 으로 부모로부터 전달받은 props를 꺼내서 사용할 수 있다.
    return (<div 
        style={{ color }}
        >안녕하세요? { name }</div>);
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};

// Hello 컴포넌트를 내보내준다는 의미
export default Hello;