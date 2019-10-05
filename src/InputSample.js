import React, { useState } from 'react';

function InputSample () {
    // text 상태값을 '' 으로 초기화
    const [text, setText] = useState('');

    const onChange = (e) => {
        // 이벤트가 발생한 DOM에 대한 정보가 담겨있다.
        console.log(e.target);
        console.log(e.target.value); // 현재 input의 값
        setText(e.target.value); // input의 값을 text 상태값으로 변경해준다.
    };

    const onReset = () => {
        // text의 값을 초기화 
        setText('');
    };

    return (
        <div>
            {/* 
                value로 text를 넣어주는 이유 ?
                우리가 초기화 버튼을 눌렀을때 초기화된 값이 동기화해주어야 한다.
            */}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {/* text 상태값 출력 */}
                { text }
            </div>
        </div>
    );
};

export default InputSample;