import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import TitleBar from './components/title-bar';

ReactDOM.render(
    <div className="d-flex flex-column h-100">
        <TitleBar title="Hello World" />
        <div className="flex-fill">This is the body</div>
    </div>,
    document.getElementById('app'));