import React, { useState, useRef } from 'react';

function InputSample () {
    // text 상태값을 '' 으로 초기화
    // const [text, setText] = useState('');
    
    // input이 여러개일 경우 함수와 useState를 여러번 사용해도 되지만 좋은 방법은 아니다.
    // 객체 형태의 상태를 관리한다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    // 랜더링과 상관없는 변수를 다룰때도 사용한다.
    const nameInput = useRef();
    // inputs의 name, 과 nickname을 편하게 출력하기 위해 비구조화 할당을 사용해 추출한다.
    const { name, nickname } = inputs;

    const onChange = (e) => {
        // 이벤트가 발생한 DOM에 대한 정보가 담겨있다.
        /*
        console.log(e.target);
        console.log(e.target.value); // 현재 input의 값
        setText(e.target.value); // input의 값을 text 상태값으로 변경해준다.
        */

        /* 여러개의 input을 관리하는 경우 */
        // 이벤트 발생시 input태그의 name값을 참조하여 값 관리한다.
        const { name, value } = e.target; 
        console.log(name); // 이벤트가 발생한 input의 name값을 참조한다.

        // React에서 객체상태를 변경하려면 새로운 객체를 만들어주어야 변경을 감지한다. (불변성을 지켜준다.)
        // 전개연산자 spread 문법을 사용해 기존 객체를 복사해 새로운 값을 만든다.
        const nextInputs = {
            ...inputs,
            [name]: value, // name값에서는 name, nickname 의 형태로 동적인 값이 오게 된다.
            // 따라서 [ name ] 으로 지정해주면 name, nickname으로 키값이 지정되게 된다.
        };
        // inputs[name] = value;
        setInputs(nextInputs);

        // 따로 변수로 선언할 필요없이 setInputs 에 바로 넣어주어도 된다.
        /*
            setInputs({
            ...inputs,
            [name]: value,
        });
        */
    };

    const onReset = () => {
        // text의 값을 초기화 
        /* setText(''); */
        setInputs({
            name: '',
            nickname: '',
        });
        // current 가 useRef가 참조한 DOM을 가리킨다.
       nameInput.current.focus();
    };

    return (
        <div>
            {/* 
                value로 text를 넣어주는 이유 ?
                우리가 초기화 버튼을 눌렀을때 초기화된 값이 동기화해주어야 한다.
            */}
            {/* <input onChange={onChange} value={text}/> */}
            {/* 
                이벤트 발생시 input태그의 name값을 참조하여 값 관리하기위해 name값을 각각 name, nickname으로 지정해준다. 
            */}
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {/* text 상태값 출력 */}
                {/* { text } */}
                { name } ({ nickname })
            </div>
        </div>
    );
};

export default InputSample;