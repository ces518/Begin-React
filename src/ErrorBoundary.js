import React, { Component } from 'react';

// 에러를 처리할 ErrorBoundary 컴포넌트

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch (error, info) {
        // error: 에러에 대한 정보
        // info: 에러가 난 곳에 대한 정보
        console.error('에러가 발생했습니다.');
        console.error(error, info);

        // 에러상태를 true로 변경
        this.setState({
            error: true,
        });
    }

    render () {
        // 에러 상태가 true면 에러 화면을 출력
        if (this.state.error) {
            return <h1>에러 발생 !!</h1>
        }
        return this.props.children;
    }
};

export default ErrorBoundary;