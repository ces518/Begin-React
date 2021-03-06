import React, { createContext, useReducer, useContext } from 'react';
// import axios from 'axios';


// 모든 api 객체를 불러온다.
import * as api from './api';
import createAsyncDispatcher, { initialAsyncState, createAsyncHanlder } from './asyncActionUtils';

const initialState = {
    users: initialAsyncState,
    user: initialAsyncState,
};

const usersHandler = createAsyncHanlder('GET_USERS', 'users');
const userHandler = createAsyncHanlder('GET_USER', 'user');

// 하나의 요청당 3개의 액션을 정의한다.
// GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR
function usersReducer (state, action) {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default: {
            throw new Error(`Unhanlded action type ${action.type}`);
        }
    }
}

// 상태관리용 컨텍스트
const UsersStateContext = createContext(null);
// 액션 디스패치용 컨텍스트
const UsersDispatchContext = createContext(null);

// 컨텍스트를 분리하는 이유는 컴포넌트 최적화 및 불러와서 사용하기 편리하기 때문임 !

export function UsersProvider ({ children }) {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                { children }
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
};

export function useUsersState () {
    const state = useContext(UsersStateContext);
    if (!state) {
        throw new Error('Cannot find UserProvider');
    }

    return state;
}

export function useUsersDispatch () {
    const dispatch = useContext(UsersDispatchContext);
    if (!dispatch) {
        throw new Error('Cannot find UserDispatch');
    }
    return dispatch;
}

// useXXState 함수 사용 이유 ? > 에러가 났을때 좀 더 빨리 찾기위함


// 단순 api 요청뿐 아니라 특정 action을 dispatch 한다.

/*
export async function getUsers (dispatch) {
    dispatch({ type: 'GET_USERS'});
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_USERS_ERROR', error: e });
    }
};
*/
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);

/*
export async function getUser (dispatch, id) {
    dispatch({ type: 'GET_USER'});
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_USER_ERROR', error: e });
    }
};
*/
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);