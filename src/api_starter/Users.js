import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// LOADING, SUCCESS, ERROR 액션을 관리
function reducer (state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`unhandled action type = ${action.type}`); // 잘못된 액션이 들어왔을때 보통 에러를 발생시킨다.
    };
};

function Users () {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchUsers = async () => {
        dispatch({ type: 'LOADING' });
        try {            
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            // 응답 코드를 확인
            console.log(e.response.status);
            dispatch({ type: 'ERROR', error: e });
        }
    };

    // 컴포넌트 최초 요청시 axios로 api 데이터를 가져온다.
    useEffect(() => {
        //
        fetchUsers();
        //
    }, []);

    const { loading, data: users, error } = state;

    if (loading) {
        return  <div>로딩중</div>
    }
    if (error) {
        return <div>에러 발생</div>
    }
    if (!users) {
        return null;
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
};

export default Users;


