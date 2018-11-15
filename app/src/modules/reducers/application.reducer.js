export default function application({ types }) {
    if (!Array.isArray(types) || types.length !== 4) {
        throw new Error("types must be array type");
    }
    if (!types.every(t => typeof t === 'string')) {
        throw new Error("Undefoned data type")
    }

    const [requestType, successType, updateType, failureType] = types;

    return function updateCategoryParams(state = {
        currentApplication: {},
        isFetching: false
    }, action) {
        switch (action.type) {
            case requestType:
                return Object.assign({}, state, {
                    isFetching: true
                })
            case successType:
                return Object.assign({}, state, {
                    isFetching: false,
                    currentApplication: action.payload
                });
            case updateType:
                return Object.assign({}, state, {
                    isFetching: false,
                    currentApplication: action.payload
                });
            case failureType:
                return Object.assign({}, state, {
                    isFetching: false
                });
            default:
                return state;
        }
    }
}