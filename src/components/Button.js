import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// 버튼 사이즈: large, medium, small
// 다양한 클래스 명들을 조건부로 줘야할때 유용한 모듈인 classnames 라는 모듈이 있다.
// npm install classnames
// 조건부로 다양한 클래스명을 줘야할때 편리하다.
// 문자열, 배열, 객체 등 다양한 조건으로 클래스명을 조합할 수 있다.
// null undefined false 0 은 무시된다.

// color: blue, pink, gray
// 기본색상은 gray로 한다.
function Button ({ children, size, color, outline, fullWidth, ...rest }) {
    // children, size, color, outline, fullWidth 를 제외한 props들을 rest 로 받아온다.
    console.log(rest);
    return (
        <>
            {/* Array.join을 활용한 방법 */}
            {/* <button className={['Button', size].join(' ')}>{ children }</button> */}
            {/* classNames 모듈을 활용한 방법 */}
            <button 
                className={classNames('Button', size, color, {
                    outline,
                    fullWidth,
                })} 
                // rest 객체 내부에 있는 모든 것들을 button에게 할당한다.
                {...rest}
            >{ children }</button>
        </>
        
    );
};


// 가장 정석적인 방법은 defaultProps를 사용하는것이다.
Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;