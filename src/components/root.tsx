import React, { PureComponent } from 'react';

export default class Root extends PureComponent {
    render() {
        return <div className="d-flex flex-column h-100">
            <div className="flex-fill">This is the body</div>
        </div>;
    }
};