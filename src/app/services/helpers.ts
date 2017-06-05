
export function isJson(s: string): boolean {
    try {
        JSON.parse(s);
    } catch (e) {
        return false;
    }
    return true;
}

// export function sortObject(key: string) {
//     return function(a, b){
//         let keyA = new Date(a[key]);
//         let keyB = new Date(b[key]);
//         if(keyA < keyB) return -1;
//         if(keyA > keyB) return 1;
//         return 0;
//     }
// }

// export function addLineWrapping(text: string) {
//     return text.replace(/\r?\n/g, "<br /><br />");

// }

export function displayArticle(articleName: string): void {
    let articles = document.getElementsByTagName('article');
    for(let i = 0; i < articles.length; i++)
    {
        articles[i].classList.add('hidden-xl-down');
    }
    document.getElementById(articleName).classList.remove('hidden-xl-down');
}

// export function serialize(obj) {
//     let str = [];
//     for(let p in obj)
//         if (obj.hasOwnProperty(p)) {
//             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//         }
//     return str.join("&");
// }

