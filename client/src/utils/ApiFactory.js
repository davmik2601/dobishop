import Axios from '../plugins/axios';

class ApiFactory {
    constructor() {
        this.instance = Axios;
        // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        this.pendingRequests = {}
    }

    call({method, url}, data) {
        let request_key = `/api/${url}/${method}`;
        this.pendingRequests[request_key] = new Promise((resolve, reject) => {
            this.instance[method](`/api/${url}`, data)
                .then(res => {
                    resolve(res);
                }).catch(err => {
                reject(err);
            }).finally(() => {
                delete this.pendingRequests[request_key];
            })
        })
        return this.pendingRequests[request_key];
    }

    post(url, data) {
        return this.call({method: 'post', url: url}, data)
    }

    get(url, data) {
        return this.call({method: 'get', url: url}, data)
    }
}

export default new ApiFactory();