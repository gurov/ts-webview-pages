import { apiService } from "../../services/api-service";
import { User } from "../../models/dashboard";

function convertUsersToLi(users: User[]): string {
    return users
        .map(user => `<li><a href="#user-article/${user.login}">${user.login}</li>`)
        .join('');
}

export function updateUserList(elementId: string, users: string[]) {

    const userList = users.map(login => apiService.getGithubUserDetails(login));

    Promise.all(userList).then(response => {
        document.getElementById(elementId).innerHTML = `<ul>${convertUsersToLi(response)}</ul>`;
    });

}
