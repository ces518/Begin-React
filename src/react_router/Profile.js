import React from 'react';

const profileData = {
    june: {
        name: '박준영',
        description: 'Backend Developer'
    },
    homer: {
        name: '호머 심슨',
        description: '심슨 아빠'
    }
}
// url parameter 를 받아올때 match props를 사용한다
// Route 컴포넌트에서 자동으로 넣어주는 props 이다.
function Profile ({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>;
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
};

export default Profile;