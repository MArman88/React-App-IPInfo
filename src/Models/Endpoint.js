
export class Endpoint {
    constructor(path, queries) {
        this.path = path;
        this.queries = queries;
    }

    getUrl(baseUrl) {
        let url = baseUrl
        if (this.path && typeof this.path === 'string' && this.path.trim() !== '') {
            if (url.endsWith('/')) {
                url += this.path.substring(1);
            } else if (this.path.startsWith('/')) {
                url += this.path;
            } else {
                url += '/' + this.path;
            }
        }
        if (this.queries && typeof this.queries === 'object') {
            let queryStr = ''
            for (const prop in this.queries) {
                if (queryStr === '') {
                    queryStr = `${prop}:${this.queries[prop]}`;
                }
                else {
                    queryStr += `&${prop}:${this.queries[prop]}`;
                }
            }
            if (this.queryStr !== '') {
                url = url.endsWith('/') ? url.substring(0, url.length - 1) : url;
                url += `?${queryStr}`;
            }
        }

        return url;
    }
}