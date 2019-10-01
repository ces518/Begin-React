import React from 'react';
// Hello 컴포넌트를 불러온다.
import Hello from './Hello';
// Wrapper 컴포넌트를 불러온다.
import Wrapper from './Wrapper';

// App.css 를 불러와서 적용한다.
import './App.css';

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

        <Hello name="react" color="red" />
    </Wrapper>
  );
}

export default App;
