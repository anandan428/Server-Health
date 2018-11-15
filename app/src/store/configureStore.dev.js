import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../modules/reducers';
import reduxImmutableStatevariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createBrowserHistory';
import {
    routerMiddleware
} from 'react-router-redux';

export const history = createHistory();

export default function configureStore(intialState){
    const sageMiddleware = createSagaMiddleware();
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    const store = createStore(
        rootReducer,
        intialState,
        compose(
            applyMiddleware(
                sageMiddleware,
                createLogger(),
                reduxImmutableStatevariant(),
                routerMiddleware(history)
            ),
            devToolsExtension()
        )
    );
    store.runSaga = sageMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
