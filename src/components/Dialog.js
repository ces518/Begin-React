import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import NewButton from './NewButton';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    animation-duration: 0.25s;
    /* 빨라졌다 천천히 느려짐 */
    animation-timing-function: ease-out; 
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
        animation-name: ${fadeOut};
    ` };
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;

    h3 {
        margin: 0;
        font-size: 1.5rem;

    }

    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    /* 빨라졌다 천천히 느려짐 */
    animation-timing-function: ease-out; 
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
        animation-name: ${slideDown};
    ` };
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

// 기존 컴포넌트를 상속받아 특정 스타일을 덮어쓸 수 있음
const ShortMarginButton = styled(NewButton)`
    & + & {
        margin-left: 0.5rem;
    }
`;

function Dialog ({ title, children, confirmText, cancelText, visable, onConfirm, onCancel }) {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visable);

    useEffect(() => {
        // Dialog 가 켜져있다가 닫히는 시점을 캐치하기위해 localVisible 이라는 state값을 사용한다.
        if (localVisible && !visable) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        // visible 값이 바뀔때마다 localVisible 값에 동기화
        setLocalVisible(visable);
    }, [localVisible, visable]);

    if (!localVisible && !animate) return null;

    return (
        <DarkBackground disappear={!visable}>
            <DialogBlock disappear={!visable}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
};

Dialog.defaultProps = {
    cancelText: '취소',
    confirmText: '확인',
};


export default Dialog;