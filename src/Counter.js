import React, { Component } from 'react';

class Counter extends Component {

    // babel 플러그인을 통해 사용할 수 있는 문법
    // classProperties라는 문법이다.
    state = {
        counter: 0,
        fixed: 1,
    }

    // 생성자 함수
    constructor (props) {
        super(props);

        // 메소드에 this를 바인드 해준다.
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        
        // 상태들의 초기값 세팅
        // state는 반드시 객체형태 이여야한다.
        /*
        this.state = {
            counter: 0,
        };
        */
    }

    // 클래스 내부에 함수를 선언하는것을 메소드 라고한다.
    handleIncrease () {
        // 현재 this 는 undefined
        console.log(this);
        console.log('increase');

        // this.setState는 우리가 원하는상태만 업데이트 해주면 된다.
        // 상태 내부에 객체가 존재한다면 불변성을 유지해 주어야한다.
        // setState를 호출한다고 해서 바로 상태가 바뀌는 것이 아님
        // 비동기적으로 업데이트가 된다.
        this.setState(state => ({
            counter: state.counter + 1,
        }));
    }

    // 화살표 함수를 사용하는 방법
    handleIncrease2 = () => {

    };

    handleDecrease () {
        this.setState({
            counter: this.state.counter - 1,
        })
    }


    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer (state, action) {
//     switch (action.type) {
//         case 'INCREMENT': 
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;    
//         default:
//             // return state;
//             throw new Error('해당 하는 ACTION이 없습니다.');
//     }
// }

// // 클릭 이벤트가 발생했을때 특정 함수가 호출되도록 한다.
// function Counter () {
//     // const [number, setNumber] = useState(0); // number 라는 상태를 사용하고, number 상태의 값을 0으로 지정해준다.

//     // dispatch를 사용하여 액션을 발생시킨다.
//     const [number, dispatch] = useReducer(reducer, 0); // 첫번째 인자가 reducer 함수, 2번째인자는 초기값

//     // number 를 1만큼 증가시킨다.
//     const onIncrease = () => {
//         // setNumber(number + 1);
//         // 함수형 업데이트 방식
//         // setNumber(prevNumber => prevNumber + 1);
//         // 10
//         dispatch({
//             type: 'INCREMENT',
//         });
//     };

//     // number 를 1만큼 감소시킨다.
//     const onDecrease = () => {
//         // setNumber(number - 1);
//         // setNumber(prevNumber => prevNumber - 1);
//         dispatch({
//             type: 'DECREMENT',
//         });
//     };

//     return (
//         <div>
//             {/* number 상태를 출력해준다. */}
//             <h1>{ number }</h1>
//             {/* 이벤트 실행시 호출하고 싶은 함수를 바인딩 해준다. 
//                 함수를 바인딩해주는것이지 호출하는것이 아니기때문에 onIncrease() 로 해주면 안된다.
//             */}
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// };

export default Counter;