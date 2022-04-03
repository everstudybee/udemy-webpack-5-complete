## Webpack 5: The Complete Guide For Beginners

[GitHub](https://github.com/vp-online-courses/webpack-tutorial)

### feat: standard code with js

1. `npm init -y`
2. `npm install --sava-dev webpack webpack-cli`


### 7. Integrating Webpack Into Our JS Application

1. Make changes in files as in the example
2. `npx webpack`
3. `npx webpack --stats detailed` - more details in output

### 8. Custom Webpack Configuration

1. Make changes in files as in the example
2. `npm run build` - start compilation with this command

### 9. Introduction to Asset Modules

1. No commit

### 10. Handling Images With Webpack

1. Make changes in files as in the example

### 11. publicPath

1. Make changes in files as in the example
2. `publicPath: 'https://mywebside.com/img'` - add to direct path to image

### 12. Asset/inline Module Type

1. No commit

### 13. General Asset Type

1. Make changes in files as in the example
2. `type: 'asset'` - this way Webpack decide automatically how to divide small image as `asset/inline` and bigger as `asset/resource`
3. `maxSize: 3 * 1024` - limit inline file size to 3 kilobytes
4. Extra step, add `devServer` for automatic page reload.
5. `npm install --save-dev webpack-dev-server` [Webpack DevServer](https://webpack.js.org/configuration/dev-server/)

### 14. Asset/source Module Type

1. Make changes in files as in the example
2. Extra step.
3. `npm install --save-dev html-webpack-plugin` - Install [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin#install)
4. `npm install --save-dev html-webpack-harddisk-plugin` - [HtmlWebpackHarddiskPlugin](https://github.com/jantimon/html-webpack-harddisk-plugin#installation) necessary to working with `devServer` and HMR

### 15. What Is Webpack Loader?

1. No commit

### 16. Handling CSS With Webpack

1. Make changes in files as in the example
2. Organize element with components
3. `npm install --save-dev css-loader style-loader` - install modules for css handling 

### 17. Handling SASS






## Learn

1. How to add image to `dist/img`?
2. Hot to take image from `src/img`? 
3. How to add original filename to generated image filename?
4. 
