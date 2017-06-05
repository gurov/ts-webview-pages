import './../main.css';

import { DashboardRouter } from './dashboard.router';
import { apiService } from './services/api-service';
import { ProfilePage } from './profile';

declare const CURRENT_PAGE: string;

let router = null;

window['init'] = function (tokens: string) {

    // set tokens after init
    apiService.setTokens(tokens);

    if (router) {
        return;
    }

    switch(CURRENT_PAGE) {
        case 'dashboard':
            router = new DashboardRouter();
            break;
        case 'profile':
            router = new ProfilePage();
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


