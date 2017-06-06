import { Tip, User } from '../models/webview1';
import { isJson } from './helpers';

class ApiService {

    public authToken: string = '';
    public driverId: number = 0;

    private cacheStore = {};

    constructor() {

    }

    getGithubUserDetails(login: string) {
        return this.cache<User>('https://api.github.com/users/' + login, null, 30);
    }

    getTips(): Promise<Tip[]> {
        return this.cache<Tip[]>('./tips.json', null, 60 * 60 * 24);
    }

    setTokens(tokensStr: string): void {
        if (isJson(tokensStr)) {
            const tokensObj = JSON.parse(tokensStr);
            if (tokensObj && tokensObj.authToken) {
                this.authToken = tokensObj.authToken;
            }
            if (tokensObj && tokensObj.driverId) {
                this.driverId = tokensObj.driverId;
            }
        }
    }

    getJson<T>(path: string): Promise<T> {
        let options = {};

        // For auth requests
        // options = {
        //     credentials: 'include',
        //     headers: { authorization: this.authToken }
        // };
        return fetch(path, options).then(response => <Promise<T>>response.json());
    }

    cache<T>(url: string, params: string, sec: number = 20) {
        const key = url + btoa(JSON.stringify(params));

        if (key in this.cacheStore && (+new Date() - this.cacheStore[key].timestamp < sec * 1000)) {
            return Promise.resolve(<T>this.cacheStore[key].data);
        } else {
            return this.getJson<T>(url).then(response => {
                this.cacheStore[key] = {
                    timestamp: +new Date(),
                    data: response
                };
                return response;
            })
        }
    }

}

export let apiService = new ApiService();

