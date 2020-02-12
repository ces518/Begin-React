import React, { useEffect } from 'react';
// import axios from 'axios';
// import useAsync from './useAsync';
// import { useAsync } from 'react-async';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

/*
async function getUser ({ id }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
};
*/

function User ({ id }) {
    /*
    const {
        data: user,
        error,
        isLoading,
        // skip true 와 같은 기능을 쓰고싶다면 run 을 불러온다.
        // run 
    } = useAsync({
        // 만약 skip true 와 같은 기능을 하고싶다면 
        // defferFn 으로 getUser 를 넣어준다.
        promiseFn: getUser,
        id,
        watch: id, // id값이 바뀌면 다시호출 한다.
        // reload : refetch 와 동일한 기능을 하는 함수
    }); 
    */
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { loading, data: user, error } = state.user; 

    if (loading) return <div>로딩중</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p><b>Email: </b>{user.email}</p>
        </div>
    );
};

export default User;