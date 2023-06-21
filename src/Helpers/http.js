export function get(url, resolve, reject) {
    fetch(url).then(data => data.json())
        .then(result => resolve(result))
        .catch(error => reject(error))
}

export function post(url, data, resolve, reject, content_type = 'application/json') {
    fetch(url, {
        method: post,
        body: data,
        content_type: content_type
    }).then(data => data.json())
        .then(result => resolve(result))
        .catch(error => reject(error))
}

