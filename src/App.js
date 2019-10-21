import React, { useRef, useState } from 'react';
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
import CreateUser from './CreateUser';


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

  // CreateUser 컴포넌트에서 사용할 input 상태
  const [inputs, setInputs] = useState({
      username: '',
      email: '',
  });
  // props로 내려보내기 편리하기 위해 inputs에서 추출
  const { username, email } = inputs;

  // UserList컴포넌트 내에 존재하던 Users 배열을 app 컴포넌트로 이동
  // state로 변경하여 상태로 관리한다.
  const [users, setUsers] = useState([
      {
          id: 1,
          username: 'june',
          email: 'june@gmail.com',
          active: true,
      },
      {
          id: 2,
          username: 'bear',
          email: 'bearr@gmail.com',
          active: false,
      },
      {
          id: 3,
          username: 'user',
          email: 'user@gmail.com',
          active: false,
      },
  ]);

  // username, email 상태 변경 이벤트
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // users 배열의 다음 엘리먼트에서 사용할 id값
  // useState로 관리해주어도 되지만 랜더링과 관련이 없기떄문에 사용하는 것이다.
  // 특정 DOM을 선택할때만 사용하는것이 아닌 변수처럼 사용할 수 있음
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 배열의 불변성을 지키면서 상태값을 바꾸는 방법
    // 1. 전개 연산자 사용
    // 기존 배열을 복사하여 새로운 항목이 추가된다.
    setUsers([...users, user]);

    // 2. concat 함수 사용한다.
    // 여러개의 배열을 하나로 합쳐 새로운 배열을 생성한다.
    setUsers(users.concat(user));
    
    // 유저 생성후 input의 값들을 비워준다.
    setInputs({
      username: '',
      email: '',
    });

    // 현재 nextId 가져오기
    console.log(nextId.current);
    nextId.current += 1; // nextId 값 증가
  };

  const onRemove = id => {
    // 삭제하기를 원하는 요소를 제외한 user요소들만 배열로 추출한다.
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    // 배열 내부의 값을 수정할때는 map함수를 사용한다.
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
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

        {/* CreateUser 컴포넌트 */}
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />

        {/* UserList 컴포넌트  */}
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </Wrapper>
  );
}

export default App;
