import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Color, Titlebar } from 'custom-electron-titlebar';
import packageJson from '../package.json';
import './app.scss';
import Root from './components/root';

const titlebar = new Titlebar({
    backgroundColor: Color.fromHex('#36393F'),
});

titlebar.updateTitle(packageJson.productName || packageJson.name);

function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Root />
        </AppContainer>,
        document.getElementById('app'));
}

renderApp();

// React hot reloading
declare global {
    interface NodeModule {
        hot?: {
            accept(rootPath: string, render: () => void): void;
        };
    }
}

if (module.hot) {
    module.hot.accept('./components/root', renderApp);
}