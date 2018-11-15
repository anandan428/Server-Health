import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './modules/sagas';


const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history = { history }>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
