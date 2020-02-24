import React from 'react';
import { withRouter } from 'react-router-dom';


function WithRouterSample ({ location, match, history }) {
    // location은 어디서 랜더링 되었든 동일한 정보를 불러온다.
    // match props는 현재 랜더링된 컴포넌트의 위치를 기준으로 정보를 불러온다.
    return (
        <div>
            <h4>location</h4>
            {/* 
                JSON.stringify: 객체를 json 문자열로 변환한다.
                2번째 파라메터로 null, 3번째 파라메터로 2 를 넣어주면 들여쓰기가 된다. (보기 쉽도록 포메팅)
             */}
            <textarea value={JSON.stringify(location, null ,2)} readOnly/>

            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} readOnly/>
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

// 컴포넌트를 내보낼때 withRouter 컴포넌트를 사용해 내보내면 
// Route 컴포넌트로 사용되지 않아도 location, match, history props를 사용할 수 있다.
// withRouter는 특정 조건에따라 페이징을 이동한다거나 할때 사용을 한다.
export default withRouter(WithRouterSample);