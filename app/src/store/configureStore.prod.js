import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../modules/reducers';
import createHistory from 'history/createBrowserHistory';
import {
    routerMiddleware
} from 'react-router-redux';

export const history = createHistory();

export default function confiureStore(intialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        intialState,
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        )
    )

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END);
    return store;
}