import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //If this function gets triggered then set state of hasError
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooooops. That is not good</h1> //Default State
        }
        return this.props.children
    }
}

export default ErrorBoundary;