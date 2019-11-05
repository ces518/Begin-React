import React, { useMemo, useReducer, createContext } from 'react';

// App.css 를 불러와서 적용한다.
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

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


// UserList의 User 컴포넌트로 바로 전달해주기 위해 Context API 를 활용하여 context를 생성해주고,
// onChange, onToggle 함수를 넘겨주는것 보다, dispatch 함수를 전달해 줌으로써 User컴포넌트에서 직접 사용하게끔 하는방법을 선택한다.
// UserDispatch.Provider를 이용해 dispatch 를 넘겨준다.
export const UserDispatch = createContext(null);

// Hello 컴포넌트는 여러번 재사용 할 수 있다.
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  // return 에서 () 괄호는 가독성을 위해 사용하는것이다.
  // JSX가 한줄인 경우라면 생략해도 된다.
  return (
    <UserDispatch.Provider value={dispatch}>
       
        {/* CreateUser 컴포넌트 */}
        <CreateUser />

        {/* UserList 컴포넌트  */}
        <UserList users={users}/>

        {/* 활성화 된 사용자 수 */}
        {/* 
          활성화 혹은 비활성화를 시킬때 마다 새롭게 계산을 한다. 
          문제: inputs 들의 상태가 변경되어도 리랜더링 되기때문에 리랜더링시 마다 활성 사용자수를 다시 세고있다.
        */}
        <div>활성 사용자수: { count }</div>
    </UserDispatch.Provider>
  );
}

export default App;
