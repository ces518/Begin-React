import React, { useEffect } from 'react';

function HistorySample ({ history }) {
    // action: 마지막 액션
    // createHref: href를 만듬
    // go: n 만큼 이동
    // goBack: 뒤로 이동
    // goForward: 앞으로 이동
    // location: 현재 주소
    // push: 특정 주소로 이동
    // replace: 특정 주소로 이동 (방문기록을 남기지 않음)
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    const replaceToHome = () => {
        history.replace('/');
    }

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실 건가요?');
        return () => {
            // 컴포넌트 언마운트 전에 확인
            // 페이지 이탈 확인
            unblock();
        }
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            {/* <button onClick={replaceToHome}>홈으로 (replace)</button> */}
        </div>
    );
};

export default HistorySample;