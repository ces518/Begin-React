import React from 'react';
// Hello 컴포넌트를 불러온다.
import Hello from './Hello';

// Hello 컴포넌트는 여러번 재사용 할 수있다.
function App() {
  return (
    <div>
        <Hello />
        <Hello />
        <Hello />
    </div>
  );
}

export default App;
