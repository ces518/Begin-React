import React from 'react';
import qs from 'qs';

// 쿼리 파라메터는 location props를 통해 받아올 수 있다.
// search 라는 키값으로 ?key=aaa 의 형태로 전달 받을수 있음.
// 이를 추출해 내는 작업을 해야하는데 이는 qs 라는 라이브러리로 편리하게 가능하다.
function About ({ location }) {
    
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, // 이 옵션을 넣어야 ? 가 사라진다.
    });

    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는, 리액트 라우터 기초를 실수 해보는 예제 프로젝트 입니다.
            </p>
            {detail && <p>detail 값이 true 입니다.</p>}
        </div>
    );
};

export default About;