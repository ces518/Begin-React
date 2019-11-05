import { useState, useReducer, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // form의 값을 변경하는 change 함수
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
};

export default useInputs;



///////////////////////////////

 
function reducer (state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value,
            }
        default:
            break;
    }
}

function useInputs2(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
    },[]);
    return [form, onChange];
};