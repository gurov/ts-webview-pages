import { apiService } from './services/api-service';
import { displayArticle } from './services/helpers';

import { updateTipDetails, updateTipList } from './components/webview1/tip-list';
import { updateUserList } from "./components/webview1/github-user-list";
import { updateUserDetails } from "./components/webview1/github-user-details";


export class Webview1Router {

    constructor() {

        window.onhashchange = () => {

            if (location.hash === "#main-article") {
                displayArticle('main-article');
                this.updateMain();
            }
            if (~location.hash.indexOf('tip-details-article')) {
                displayArticle('tip-details-article');
                const tipId = location.hash.split('/')[1];
                updateTipDetails('tip-details-title', 'tip-details-description', tipId);
            }
            if (~location.hash.indexOf('#user-article')) {
                displayArticle('user-article');
                const login = location.hash.split('/')[1];
                updateUserDetails('github-user-details', login);
            }
        };
        // for default page
        window.location.hash = '#main-article';
        this.updateMain();

    }

    updateMain() {
        updateUserList('github-users', ['gurov', 'rnixik', 'otokarev']);
        updateTipList('tip-list');
    }

}
