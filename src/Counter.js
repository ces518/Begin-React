import React, { useState } from 'react';

// 클릭 이벤트가 발생했을때 특정 함수가 호출되도록 한다.
function Counter () {
    const [number, setNumber] = useState(0); // number 라는 상태를 사용하고, number 상태의 값을 0으로 지정해준다.

    // number 를 1만큼 증가시킨다.
    const onIncrease = () => {
        // setNumber(number + 1);
        // 함수형 업데이트 방식
        setNumber(prevNumber => prevNumber + 1);
        // 10
    };

    // number 를 1만큼 감소시킨다.
    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            {/* number 상태를 출력해준다. */}
            <h1>{ number }</h1>
            {/* 이벤트 실행시 호출하고 싶은 함수를 바인딩 해준다. 
                함수를 바인딩해주는것이지 호출하는것이 아니기때문에 onIncrease() 로 해주면 안된다.
            */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;