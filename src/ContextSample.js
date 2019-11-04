import React, { createContext, useContext, useState } from 'react';

// 기본 값 (Provider 미사용시)
const MyContext = createContext('defaultValue');

function Child () {
    // MyContext의 값을 가져와서 사용한다.
    const text = useContext(MyContext);
    return <div>안녕하세요 ? { text }</div>;
};

function Parent () {
    return <Child />;
};

function GrantParent () {
    return <Parent />;
};

function ContextSample () {
    const [value, setValue] = useState(true);
    return (
        // Provider를 통해 유동적으로 변경도 가능하다.
        // Provider를 사용해서 MyContext의 값을 설정해준다.
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrantParent />
            <button onClick={() => setValue(!value)}>Click ME</button>
        </MyContext.Provider>
    );
}

export default ContextSample;