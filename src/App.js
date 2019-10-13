import React, { useRef } from 'react';
// Hello 컴포넌트를 불러온다.
import Hello from './Hello';
// Wrapper 컴포넌트를 불러온다.
import Wrapper from './Wrapper';
// Counter 컴포넌트를 불러온다.
import Counter from './Counter';
// App.css 를 불러와서 적용한다.
import './App.css';
import InputSample from './InputSample';
import UserList from './UserList';


// Hello 컴포넌트는 여러번 재사용 할 수있다.
function App() {
  // 컴포넌트 내부에서 javascript 변수 선언
  const name = 'react';

  // style을 사용하려면 객체를 만들어 주어야한다.
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '10px', // 기본단위는 픽셀이다.
    padding: '1rem',
  };

  // UserList컴포넌트 내에 존재하던 Users 배열을 app 컴포넌트로 이동
  const users = [
      {
          id: 1,
          username: 'june',
          email: 'june@gmail.com',
      },
      {
          id: 2,
          username: 'bear',
          email: 'bearr@gmail.com',
      },
      {
          id: 3,
          username: 'user',
          email: 'user@gmail.com',
      },
  ];

  // users 배열의 다음 엘리먼트에서 사용할 id값
  // useState로 관리해주어도 되지만 랜더링과 관련이 없기떄문에 사용하는 것이다.
  // 특정 DOM을 선택할때만 사용하는것이 아닌 변수처럼 사용할 수 있음
  const nextId = useRef(4);

  const onCreate = () => {
    // 현재 nextId 가져오기
    console.log(nextId.current);
    nextId.current += 1; // nextId 값 증가
  };


  // return 에서 () 괄호는 가독성을 위해 사용하는것이다.
  // JSX가 한줄인 경우라면 생략해도 된다.
  return (
    <Wrapper>
        {/* JSX의 주석은 {} 중괄호를 사용해야한다.  */}

        <Hello 
          // Self-Closing Tag내의 이러한 주석은 표시되지 않는다.
        />
        {/* JSX 내부에서 자바스크립트 값을 사용하고싶다면 {} 중괄호를 이용해 사용할 수 있다. */}
        <div style={style}>{ name }</div>
        {/* class는 className으로 사용해야한다. 동작은 하지만 경고창이 뜨며, className이 제대로된 방식이다. */}
        <div className="gray-box"></div>

        {/* 
            {} 로 감싸주는 이유 ? true 도 자바스크립트 값이기 때문 
            isSpecial 로만 정의해주면 isSpecial={true} 로 설정한 것과 같다.
        */}
        <Hello name="react" color="red" isSpecial={true}/>
        
        {/* Counter 컴포넌트 */}
        <Counter />

        {/* InputSample 컴포넌트 */}
        <InputSample />

        {/* UserList 컴포넌트  */}
        <UserList users={users}/>
    </Wrapper>
  );
}

export default App;
