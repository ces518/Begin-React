import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';


const colorStyles = css`
    ${({ theme, color }) => {
        const selectedColor = theme.palette[color];
        return css`
            background: ${selectedColor};
            &:hover {
                background: ${darken(0.1, selectedColor)};
            }
            &:active {
                background: ${lighten(0.1, selectedColor)};
            }
        `;
    }}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: line-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    
    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    ${colorStyles};


    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function NewButton ({ children, color, ...rest }) {
    return (
        <StyledButton 
            color={color} 
            {...rest}
        >{children}</StyledButton>
    );
};


NewButton.defaultProps = {
    color: 'blue',
};


export default NewButton;