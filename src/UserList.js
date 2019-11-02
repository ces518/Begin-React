import React, { useEffect } from 'react';

// 중복을 제거하기위해 컴포넌트를 하나 정의해준다.
// 하나의 컴포넌트 파일에 두개의 컴포넌트를 정의한다.
// 파일을 분리해도 됨.

const User = React.memo(function User ({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    // useEffect 를 사용해 마운트/언마운트시 작업을 설정함
    useEffect(() => {
        console.log('컴포넌트 마운트');
        
        // ui 가 화면에 나타난 이후
        // DOM에 바로 접근해도 된다.
        // props -> state
        // REST API
        // D3
        // setInterval, setTimeout


        // 클리너 함수
        return () => {
            // clearInterval, clearTimeout
            // lib 인스턴스 제거
            console.log('컴포넌트 언마운트');
        };
    }, []); // [] 의존되는 값들을 이 배열에 넣어준다.
    // [] 값을 생략하면 상태값이 변경되지 않더라도 모든 컴포넌트가 리랜더링됨


    // 특정 값이 수정되고 나면 호출이 된다.
    useEffect(() => {
        // 특정 값이 호출된 후 호출됨
        console.log(user);

        return () => {
            // 특정 값이 수정되기 이전에 호출이 된다.
            // 사라지기 전에도 호출이 된다.
            console.log('user값 바뀌기전');
        };
    }, [user]); // 의존되는 값이 변경되거나, 설정될때 호출된다
    // useEffect 내에서 props나, state값을 참조한다면 [] 배열 내에 넣어주어야한다.


    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer',
            }}
                onClick={() => onToggle(id)}
            >
                { username }
            </b>
            &nbsp;
            <span>({ email })</span>
            {/* 
                onClick 내에서 함수롤 새로 만들어서 onRemove를 호출하는 형태로 해주어야함  
                함수형태로 사용하지않고 바로 호출해버리면 랜더링이 끝나자마자 해당 함수가 바로 호출된다. 
            */}
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList ({ users, onRemove, onToggle }) {
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
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
};

// React.memo의 2번째 파라메터로 prevProps와 nextProps를 비교해서, true, false값에 따라 리랜더링 여부를 결정할수 있다.
// True: 리랜더링 안함, false: 리랜더링 
export default React.memo(UserList, (prevProps, nextProps) => prevProps.users === nextProps.users);