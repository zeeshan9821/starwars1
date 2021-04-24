import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './shared/store.js';
import Routes from './shared/routes.js';
import './assets/css/main.css';
import './assets/css/error-page.css';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';

window._app_container = document.getElementById('root');


render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="fluidContainer">
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>,
    window._app_container
)
registerServiceWorker();
