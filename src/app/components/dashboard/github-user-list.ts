import { apiService } from "../../services/api-service";
import { User } from "../../models/dashboard";

function getUserItemList(user: User): string {
    return `
    <div class="media mb-2">
        <img class="w-25 d-flex img-thumbnail mr-3" src="${user.avatar_url}" alt="${user.name}">
        <div class="media-body">
            <h5 class="mt-0">
                <a href="#user-article/${user.login}">${user.login}</a>
            </h5>
            ${user.bio || ''}
        </div>
    </div>
    `;
}

export function updateUserList(elementId: string, users: string[]) {

    const userList = users.map(login => apiService.getGithubUserDetails(login));

    Promise.all(userList).then(response => {
        document.getElementById(elementId).innerHTML = response
            .map(user => getUserItemList(user)).join('');
    });

}
