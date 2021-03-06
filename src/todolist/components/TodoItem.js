import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

// TodoItemBlock 커서를 올렷을때만 Remove 아이콘을 보이게끔 한다.
const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.done && 
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done &&
        css`
            color: #ced4da;
        `}
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover {
        /* Styled Components 인 Remove 컴포넌트를 불러온다. */
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem ({ id, done, text }) {
    // 하나의 Context에서 state와 dispatch를 모두 가져왔다면, 컴포넌트 최적화가 힘듬
    const dispatch = useTodoDispatch();

    const onToggle = () => 
        dispatch({
            type: 'TOGGLE',
            id
        });

    const onRemove = () => 
        dispatch({
            type: 'REMOVE',
            id
        });

    return (
       <TodoItemBlock>
           <CheckCircle done={done} onClick={onToggle}> {done && <MdDone />} </CheckCircle>
           <Text done={done}>{text}</Text>
           <Remove onClick={onRemove}>
               <MdDelete />
           </Remove>
       </TodoItemBlock>
    );
};

export default React.memo(TodoItem);