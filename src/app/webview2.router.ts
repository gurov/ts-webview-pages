import { apiService } from './services/api-service';
import { displayArticle } from "./services/helpers";

export class Webview2Router {

    constructor() {

        window.onhashchange = () => {

            if (location.hash === "#main-article") {
                displayArticle('main-article');
                this.updateMain();
            }


        };
        // for default page
        window.location.hash = '#main-article';
        this.updateMain();

    }


    updateMain() {

    }

}
