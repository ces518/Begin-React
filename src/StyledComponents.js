import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import NewButton from './components/NewButton';
import Dialog from './components/Dialog';

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color};
    border-radius: 50%;
    ${props => props.huge && css` 
        width: 10rem;
        height: 10rem;
    `}
`;

const AppBlock = styled.div`
    width: 512px;
    magin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

// ${props => props.huge && ``}; 의 형태로 사용하면 동작은 한다.
// 단점은 해당 함수 내부에서의 템플릿 리터럴은 Tagged Template Literal이 아니기 때문에 props를 더 받아올 수 없다.
// 이를 해결하기 위해 styled-components의 css를 가져와서 이를 사용해주면 props를 사용이 가능하다.

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }

`;

function StyledComponents () {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(true);
    };
    const onConfirm = () => {
        setDialog(false);
    };
    const onCancel = () => {
        setDialog(false);
    }
    return (
        <ThemeProvider theme={{palette}}>
            <>
                <AppBlock>
                    <ButtonGroup>
                        <NewButton size="large" fullWidth>BUTTON</NewButton>
                        <NewButton size="small" color="gray" fullWidth>BUTTON</NewButton>
                        <NewButton color="pink" outline fullWidth>BUTTON</NewButton>
                    </ButtonGroup>
                    <NewButton color="pink" size="large" onClick={onClick}>삭제</NewButton>
                </AppBlock>
                <Dialog 
                    title="정말 삭제하시겠습니까 ?"
                    confirmText="삭제" 
                    cancelText="취소"
                    visable={dialog}
                    onConfirm={onConfirm}
                    onCancel={onCancel}    
                >
                    데이터를 정말로 삭제하시겠습니까 ?
                </Dialog>
            </>
        </ThemeProvider>
        
    );
};

export default StyledComponents;