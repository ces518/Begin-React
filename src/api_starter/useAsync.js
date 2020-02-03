import { useReducer, useEffect, useCallback } from 'react';

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

// callback은 api를 호출하는 함수
// 특정 상태가 바뀔때마다 API가 재호출 될것이다.
// deps는 useEffect의 2번째 파라메터에 넣는것을 그대로 받아와 사용한다.
function useAsync (callback, deps = [], skip = false) {
    
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchData = useCallback(async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    }, [callback]);

    useEffect(() => {
        if (skip) {
            return;
        }
        fetchData();
        // eslint에서 특정 구문만 경고를 무시하고 싶을경우 아래의 주석을 추가
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData];
};

export default useAsync;