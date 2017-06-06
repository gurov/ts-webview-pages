import { apiService } from "../../services/api-service";
import { User } from "../../models/webview1";

function getUserDetails(user: User): string {
    return `
    <table class="table">
        <tbody>
            <tr>
                <td class="w-50">
                    <img src="${user.avatar_url}" alt="${user.login}" class="img-thumbnail">
                </td>
                <td>
                    <h6>${user.name}</h6>
                    ${user.bio || ''}
                </td>
            </tr>
            <tr>
                <td>Public repos</td>
                <td>${user.public_repos}</td>
            </tr>
            <tr>
                <td>Followers</td>
                <td>${user.followers}</td>
            </tr>
            <tr>
                <td>Following</td>
                <td>${user.following}</td>
            </tr>
            <tr>
                <td>Created at</td>
                <td>${user.created_at.split('T')[0]}</td>
            </tr>
            <tr>
                <td>Updated at</td>
                <td>${user.updated_at.split('T')[0]}</td>
            </tr>
        </tbody>
    </table>
    `;
}
// export class User {
//     location: string;
// }
export function updateUserDetails(elementId: string, login: string) {

    apiService.getGithubUserDetails(login).then(response => {
        document.getElementById(elementId).innerHTML = getUserDetails(response);
    });

}
