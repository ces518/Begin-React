import React from 'react';

function User ({ user }) {
    // 유저가 없다면, 에러.
    // 하지만 아무것도 랜더링 하지 않음
    // if (!user) return null;
    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
};

export default User;