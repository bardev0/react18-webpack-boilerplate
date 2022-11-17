<!--- made using :
 webpack :
 https://www.youtube.com/watch?v=IZGNcSuwBZs
 https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k

 react:
 https://www.youtube.com/watch?v=WDpxqopXd9U
 --->

### to simply run app
```
npm install
npm run build
npm run run-dev
```

# React app - boilerplate code

**using webpack & babel**

## basics

### install modules

```
npm init -y

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

npm install --save-dev path html-webpack-plugin

npm install react react-dom
```

### create folder structure

```
mkdir src dist src/styles src/assets
```
### create babel and webpack configurations

#### babel

```
touch .babelrc
```

###### in _.babelrc_

```
{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}
```
### webpack

```
touch webpack.config.js
```
###### in _webpack.config.js_

- adding configuration for input/ output
- adding HTMLWebpackPlugin for packaging template.html

```
cconst path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Web Server",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
```

### create html template and js template 

```
touch ./src/template.html ./src/index.js
```


###### in _template.html_

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React with Webpack and Babel</title>
    </head>
    <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">
            <!-- This div is where our app will run -->
        </div>
    </body>
</html>
```

### webpack & package.json configuration

#### add build script
###### in _package.json_
```
  "scripts": {
    "build" : "webpack"
  }
```

### simple compiler is ready
```
npm run build
```
## set up webpack dev server
#### add web server script

###### in _package.json_
```
  "scripts": {
	"run-dev": "webpack serve"
  }
```

### set port of server
###### in _webpack.config.js_

```
devServer: {
  port: 3010,
  hot: true, // watches source code and reloads server !! only with caching and cleanup enabled
  open: true // opens up the browser with start of the server
}
```

### file is ready to be deployed by webpack's own server

```
npm run run-dev
```

## add react
### react file structure
```
mkdir ./src/components
touch ./App.js
```

### babel rules
###### in _webpack.config.js_
```
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
```

### react _index.js_
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### react _App.js_

```
import React from "react";

function App() {
  return (
    <div>
      <p>Boilerplate code</p>
    </div>
  );
}

export default App;


```
## add styling by CSS
### instal required modules
```
npm install --save-dev style-loader css-loader
```

### create css file
```
touch ./src/styles.css
```

### import css into _index.js_
```
import './styles.css'
```

### edit _webpack.config.js_
_in *modules*
```
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader','css-loader'] //loaders are working in reverse order
}
```