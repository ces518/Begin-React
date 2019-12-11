import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import NewButton from './components/NewButton';

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
    return (
        <ThemeProvider theme={{palette}}>
            <AppBlock>
                <ButtonGroup>
                    <NewButton size="large" fullWidth>BUTTON</NewButton>
                    <NewButton size="small" color="gray" fullWidth>BUTTON</NewButton>
                    <NewButton color="pink" outline fullWidth>BUTTON</NewButton>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
        
    );
};

export default StyledComponents;