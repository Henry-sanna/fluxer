
const base = '{server}{service}'
export const services = {
    'LOGIN': '/login',
    'LOGOUT': '/logout',
    'OAUTH': '/oauth2'
}

const replace = (str, params) => {
    let res = str;
    for (const key in params) {
        if (Object.hasOwnProperty.call(params, key)) {
            const element = params[key];
            res = res.replace(`{${key}}`, element)
        }
    }
    return res;
}



export const get = async (service, data = {}) => {
    if (services[service]) {
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.json() // parses JSON response into native JavaScript objects
    }
    return null
}

export const post = async (data = {}) => {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POSt', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}