import 'isomorphic-fetch';

const API_ROOT = 'http://localhost:8000/api/';

function callApi(endPoint, params) {
    let fullURL = ((endPoint.indexOf(API_ROOT) === -1) ? API_ROOT + endPoint : endPoint);
    fullURL = new URL(fullURL);
    if (params) {
        Object.keys(params).forEach(key => fullURL.searchParams.append(key, params[key]));
    }

    return fetch(fullURL, {
        credentials: 'include'
    })
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
        .then(
            response => ({ response }),
            error => ({ error: error.message || 'Something really went wrong' })
        );
}

function postApi(endPoint, data) {
    const fullURL = endPoint.indexOf(API_ROOT) === -1 ? API_ROOT + endPoint : endPoint;

    let postHeaders = new Headers();

    postHeaders.append("Content-Type", "application/json");
    return fetch(fullURL, {
        credentials: 'include',
        method: 'POST',
        headers: postHeaders,
        body: data
    }).then((response) => {
        if (!response.ok) {
            return Promise.reject(response.json);
        }

        return response.json();
    }).then(
        response => ({ response }),
        error => ({ error: error.message || 'Something really went wrong' })
    );

}

export const fetchUser = () => callApi(`User`);
export const fetchApplication = (id) => callApi(`Application`, {
    applicationId: id
});
export const updateUser = user => postApi(`User`,
    JSON.stringify(user.payload)
);
export const updateApplication = application => postApi(`Application`,
    JSON.stringify(application.payload)
)