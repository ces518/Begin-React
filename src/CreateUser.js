import React from 'react';


// 상태관리는 따로하지않고 props로 받아서 사용한다.
// username = 계정명 상태값
// email = 이메일 상태값
// onChange = 텍스트값 변경시 이벤트
// onCreate = 생성시 이벤트
function CreateUser ({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input 
                name="username" 
                placeholder="계정명" 
                onChange={onChange} 
                value={username}
            />
            <input 
                name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

// props가 바뀔때만 리랜더링이 일어난다.
export default React.memo(CreateUser);