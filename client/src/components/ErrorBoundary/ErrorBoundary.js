import React from 'react';

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './ErrorBoundaryStyles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
    
        this.state  = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry, This Page Is Broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;