export class User {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    location: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export class Tip {
    public id: string;
    public title: string;
    public description: string;
}