import React from 'react';

// 중복을 제거하기위해 컴포넌트를 하나 정의해준다.
// 하나의 컴포넌트 파일에 두개의 컴포넌트를 정의한다.
// 파일을 분리해도 됨.

function User ({ user }) {
    return (
        <div>
            <b>{ user.username }</b> <span>({ user.email })</span>
        </div>
    );
};

function UserList ({ users }) {
    return (
        // 비 효율적인 방법
        // 배열의 요소를 하나하나 직접 JSX로 작성해준다.
        <div>
            {/* 같은코드가 3번씩이나 중복된다. */}
            {/* <div>
                <b>{ users[0].username }</b> <span>({ users[0].email })</span>
            </div>
            <div>
                <b>{ users[1].username }</b> <span>({ users[1].email })</span>
            </div>
            <div>
                <b>{ users[2].username }</b> <span>({ users[2].email })</span>
            </div> */}
            {/* 
                컴포넌트를 사용해 중복을 제거하는 방법 
                만약 배얄의 내용이 변경된다면 ?
                매번 UserList 컴포넌트가 수정되어야한다.
                이를 변경시 마다 유연하게 대처하기 위해 javascript 배열의 함수를 활용한다.
                Array.prototype.map 을 활용한다.
            */}
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {/* 
                javascript Array.prototype.map 을 활용한 방법
                배열의 내용이 변경될경우 유연하게 대체가 가능하다.
                단 이 방법을 사용할때는 매 원소들 마다의 고유값을 주어야한다. ( 지정해주지 않는 경우 브라우저 개발자도구에서 경고 에러가 발생한다. ) 
                고유값이 존재하지 않는경우 index를 사용한다. 
                하지만 index를 사용하는 방법은 매우 좋지않은 방법
                리 랜더링 성능 최적화시 활용된다.

                배열의 내용이 자주 바뀌는경우 index를 사용하면 매우 비효율적으로 리랜더링이 발생한다.


                key 가 어떻게 사용되는가 ?

                
                key가 존재하지 않은경우 
                - [a, b, c, d] -> [a, b, z, c, d] 로 변경될경우
                => [a, b, z, d] , [a, b, z, c] , [a, b, z, c, d] 형태로 변형된다.
                => c를 z로 변경하고, d를 c로 변경하고 새로운 d를 추가한다.
                => key가 없기때문에 각 요소의 위치만 알뿐, c가 z로 바뀌었다고 인식하기 때문이다.

                key가 존재하는 경우
                => b와 c사이에 새로운 z만 추가된다.
             */}
            {
                users.map(user => (<User user={user} key={user.id} />))
            }
        </div>
    );
};

export default UserList;