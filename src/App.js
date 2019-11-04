import React, { useMemo, useRef, useCallback, useReducer } from 'react';

// Wrapper 컴포넌트를 불러온다.
import Wrapper from './Wrapper';

// App.css 를 불러와서 적용한다.
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers (users) {
  console.log('활성된 사용자수 세는중 ...');
  return users.filter(user => user.active).length;
};

const initialState = {
  users: [
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
  ]
};


function reducer (state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id 
            ? { ...user, active: !user.active}
            : user
        ),
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      }
    default:
      throw new Error('Unhandled action');  
  }
};

// Hello 컴포넌트는 여러번 재사용 할 수있다.
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({ username: '', email: '' });
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = form;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  // return 에서 () 괄호는 가독성을 위해 사용하는것이다.
  // JSX가 한줄인 경우라면 생략해도 된다.
  return (
    <Wrapper>
       
        {/* CreateUser 컴포넌트 */}
        <CreateUser 
          username={username} 
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />

        {/* UserList 컴포넌트  */}
        <UserList 
          users={users}
          onToggle={onToggle}
          onRemove={onRemove} 
        />

        {/* 활성화 된 사용자 수 */}
        {/* 
          활성화 혹은 비활성화를 시킬때 마다 새롭게 계산을 한다. 
          문제: inputs 들의 상태가 변경되어도 리랜더링 되기때문에 리랜더링시 마다 활성 사용자수를 다시 세고있다.
        */}
        <div>활성 사용자수: { count }</div>
    </Wrapper>
  );
}

export default App;
