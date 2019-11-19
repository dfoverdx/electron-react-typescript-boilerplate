import React, { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { remote } from 'electron';

const TitleBar: FC<{ title: string, icon?: ReactNode }> = ({ title, icon }) => {
    const win = remote.getCurrentWindow();
    return <div className="w-100 d-flex flex-row title-bar">
        <div className="draggable pl-2">
            {icon && <div className="mr-2">{icon}</div>}
            {title}
        </div>
        <div className="btns ml-auto">
            <button className="btn-min" onClick={() => win.minimize()} disabled={!win.minimizable}>
                <FontAwesomeIcon icon={faWindowMinimize} fixedWidth />
            </button>
            <button className="btn-max" onClick={() => win.maximize()} disabled={!win.maximizable}>
                <FontAwesomeIcon icon={faWindowMaximize} fixedWidth />
            </button>
            <button className="btn-close" onClick={() => win.close()} disabled={!win.closable}>
                <FontAwesomeIcon icon={faTimes} fixedWidth />
            </button>
        </div>
        <style jsx>{`
            .title-bar {
                background-color: #202225;
                color: #72767D;
                font-weight: bold;
                font-variant: small-caps;
            }

            .draggable {
                -webkit-app-region: drag;
                flex: 1;
            }

            button {
                background: none;
                border: none;
                color: #B9BBBE;
            }

            button:hover {
                background-color: rgba(255, 255, 255, .5);
            }

            .btn-close:hover {
                background-color: #DC3545;
            }

            button:focus, button:active {
                outline: none;
            }
        `}</style>
    </div>
};

export default TitleBar;