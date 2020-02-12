import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
    users: {
        loading: false,
        data: null,
        error: null,
    },
    user: {
        loading: false,
        data: null,
        error: null,
    },
};


// 로딩 상태
const loadingState = {
    loading: true,
    data: null,
    error: null,
};

// 성공시 상태 함수
const success = (data) => ({
    loading: false,
    data,
    error: null,
});

// 에러발생시 상태 함수
const error = e => ({
    loading: false,
    data: null,
    error: e,
});

// 하나의 요청당 3개의 액션을 정의한다.
// GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR
function usersReducer (state, action) {
    switch (action.type) {
        case 'GET_USERS': {
            return {
                ...state,
                users: loadingState,
            }
        }
        case 'GET_USERS_SUCCESS': {
            return {
                ...state,
                users: success(action.data),
            }
        }
        case 'GET_USERS_ERROR': {
            return {
                ...state,
                users: error(action.error)
            }
        }
        case 'GET_USER': {
            return {
                ...state,
                user: loadingState,
            }
        }
        case 'GET_USER_SUCCESS': {
            return {
                ...state,
                user: success(action.data),
            }
        }
        case 'GET_USER_ERROR': {
            return {
                ...state,
                user: error(action.error)
            }
        }
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
export async function getUsers (dispatch) {
    dispatch({ type: 'GET_USERS'});
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_USERS_ERROR', error: e });
    }
};


export async function getUser (dispatch, id) {
    dispatch({ type: 'GET_USER'});
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_USER_ERROR', error: e });
    }
};