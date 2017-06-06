# ts-webview-pages
Simple boilerplate typescript code for building webviews.
Without frameworks. With authorization.

Example in iframe [here](https://gurov.github.io/ts-webview-pages/dist/)

## Features

* Typescript (Fewer errors, easier refactoring)
* No frameworks (Small final bandle)
* A simple code (Without: two way bindings, reactive programming, etc.)
* Auth requests (Just pass authToken from Android)

## Description

**NOTE**: ts-webview-pages intended for small projects!
(4-5 pages with 2-5 articles)


### Structure of templates

* webview1.html
    * article1
    * article2
    * ...
* webview2.html
    * article1
* ...


Every webview has next javascript:
```javascript
// set name of webview
const CURRENT_WEBVIEW = 'dashboard';
```

### Structure of typescript code

```
src/
├── app/
│   ├── components/
│   │   └── webview1/
│   │       └── component1.ts
│   ├── webview1.router.ts
│   ├── index.ts
│   ├── models/
│   │   └── webview1.ts
│   └── services/
│       └── api-service.ts
└── templates/
    └── webview1.html
```
#### index.ts
* Set `window.init` function
* Set auth tokens to `api-service.ts`
* Load `CURRENT_WEBVIEW` router

#### webview1.router.ts
* Set `window.onhashchange` function
* Load components by `location.hash`

#### component1.ts
* Call `api-service.ts`
* Push component template to page be html element id

#### api-service.ts
* API requests

## Webpack

Webpack script build the project to `dist` directory:
```
dist/
├── [hash].bundle.js
├── [hash].bundle.js.map
├── [hash].main.css
├── [hash].main.css.map
├── webview2.html
└── webview1.html
```


## How to use in Android

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    WebSettings settings = webview.getSettings();
    settings.setJavaScriptEnabled(true);
    webview.setWebViewClient(new WebViewClient() {
        public void onPageFinished(WebView view, String url) {
            JSONObject authTokens = new JSONObject();
            authTokens.put("authToken": "Bearer LKHLK...YUYI");
            // pass tokens to js
            view.evaluateJavascript("javascript:init('" + authTokens + "')", null);
        }
    });
    webview.loadUrl("https://example.com/dashboard.html");
}
```


