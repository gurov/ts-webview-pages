
export function isJson(s: string): boolean {
    try {
        JSON.parse(s);
    } catch (e) {
        return false;
    }
    return true;
}

export function displayArticle(articleName: string): void {
    let articles = document.getElementsByTagName('article');
    for(let i = 0; i < articles.length; i++)
    {
        articles[i].classList.add('hidden-xl-down');
    }
    document.getElementById(articleName).classList.remove('hidden-xl-down');
}
