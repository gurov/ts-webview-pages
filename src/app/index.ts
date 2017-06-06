import './../main.css';

import { Webview1Router } from './webview1.router';
import { apiService } from './services/api-service';
import { Webview2Router } from './webview2.router';

declare const CURRENT_WEBVIEW: string;

let router = null;

window['init'] = function (tokens: string) {

    // set tokens after init
    apiService.setTokens(tokens);

    if (router) {
        return;
    }

    switch(CURRENT_WEBVIEW) {
        case 'webview1':
            router = new Webview1Router();
            break;
        case 'webview2':
            router = new Webview2Router();
            break;

    }
};


// Call init for develop mode
if (!apiService.authToken && location.host === 'localhost:9000') {
    (<any>window).init(`
        {
        "authToken": "Bearer LKHLK...YUYI",
        "refreshToken": "",
        "developMode": true
        }`
    );
}


