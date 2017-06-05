import { apiService } from './services/api-service';
import { displayArticle } from "./services/helpers";

export class ProfilePage {

    constructor() {

        window.onhashchange = () => {

            if (location.hash === "#profile-article") {
                displayArticle('profile-article');
                this.updateProfile();
            }


        };
        // for default page
        window.location.hash = '#profile-article';
        this.updateProfile();

    }


    updateProfile() {

    }

}
