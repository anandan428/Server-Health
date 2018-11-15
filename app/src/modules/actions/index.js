const REQUEST = 'REQUEST';
const SUCCESS  = 'SUCCESS';
const FAILURE = 'FAILURE';
const UPDATE = 'UPDATE';

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, UPDATE, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}

export const USER = createRequestTypes('USER');
export const APPLICATION = createRequestTypes('APPLICATION');
export const LOAD_USER = 'LOAD_USER';
export const LOAD_APPLICATION = 'LOAD_APPLICATION';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_APPLICATION = 'UPDATE_APPLICATION';

function action(type, payload = {}) {
    return { type, payload } 
}

export const user = {
    request: () => action(USER[REQUEST]),
    success: (response) => action(USER[SUCCESS], response),
    update: (response) => action(USER[UPDATE], response),
    failure: (error) => action(USER[FAILURE], error)
}

export const application = {
    request: () => action(USER[REQUEST]),
    success: (response) => action(USER[SUCCESS], response),
    update: (response) => action(USER[UPDATE], response),
    failure: (error) => action(USER[FAILURE], error)
}

export const initUser = () => action(LOAD_USER);
export const initApplication = (id) => action(LOAD_APPLICATION);