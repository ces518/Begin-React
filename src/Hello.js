import React, { Component } from 'react';
// 리액트를 사용하려면 React 를 import 해주어야한다.
// 컴포넌트 는 대문자로 시작한다.
// jsx를 리턴한다.
// html처럼 생겼지만 html은 아니다.


// props 파라미터는 우리가 넣어준값들이 객체형태로 들어있다.
function Hello ({ color, name, isSpecial }) {
    // props.프로퍼티명 으로 부모로부터 전달받은 props를 꺼내서 사용할 수 있다.
    return (
        // JSX 에서 null, undefined, false를 리턴 하면 아무것도 나타나지 않는다.
        // 단 0은 화면에 출력된다.
        // 보통 내용이 달라질때 사용한다.
        // 
        <div style={{ color }} >
            {/* { isSpecial ? <b>*</b> : null } */}
            {/* isSpecial = true : <b>*</b>
                isSpecial = false : false 이기때문에 아무것도 나타나지 않는다.
                단순히 숨기고 보여주는 용도라면 && 연산자를 추천한다.
            */}
            { isSpecial && <b>*</b> }
            안녕하세요? { name }
        </div>
    );
}

class Hello2 extends Component {
    // default props를 지정해주는 다른 방법 
    static defaultProps = {
        name: '이름없음',
        color: 'blue',
    };
    render () {
        const { isSpecial, name, color } = this.props;
        return (
            <div style={{ color }} >
                { isSpecial && <b>*</b> }
                안녕하세요? { name }
            </div>
        );
    };
};

Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};

// Hello 컴포넌트를 내보내준다는 의미
export default Hello;