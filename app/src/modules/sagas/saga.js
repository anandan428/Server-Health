import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { api } from '../../services';

const { user, application } = actions;

function* fetchEntity(entity, apiFn, id, url) {
    yield put(entity.request(id));
    let { response, error } = yield call(apiFn, url || id);
    if (response) {
        yield put(entity.success(response));
    }
    else
        yield put(entity.failure(error))
}

function* updateEntity(entity, apiFn, data, url) {
    yield put(entity.request());
    let { response, error } = yield call(apiFn, url || data);
    if (response) {
        yield put(entity.update(response));
    }
    else
        yield put(entity.failure(error))
}

export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);
export const fetchApplication = fetchEntity.bind(null, application, api.fetchApplication);
export const updateUser = updateEntity.bind(null, user, api.updateUser);
export const updateApplication = updateEntity.bind(null, application, api.updateApplication);

export function* watchLoadUser() {
    yield takeLatest(actions.LOAD_USER, fetchUser);
}

export function* watchLoadApplication() {
    yield takeLatest(actions.LOAD_APPLICATION, fetchApplication);
}

export function* watchUpdateUser() {
    yield takeLatest(actions.UPDATE_USER, updateUser);
}

export function* watchUpdateApplication() {
    yield takeLatest(actions.UPDATE_APPLICATION, updateApplication);
}