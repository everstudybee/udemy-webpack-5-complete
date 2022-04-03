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

1. Make changes in files as in the example
2. `npm install --save-dev sass sass-loader` - install modules for Sass handling

### 18. Using Latest JavaScript Features With Babel

1. Make changes in files as in the example
2. `npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties` - install module for babel handling

### 19. What Is Webpack Plugin?

1. No commit

### 20. Minification of the Resulting Webpack Bundle

1. Make changes in files as in the example
2. Webpack v5 comes with the latest terser-webpack-plugin out of the box.
3. Install only if you want to customize the options for example turn off this plugin
4. `npm install --save-dev terser-webpack-plugin`

### 21. Extracting CSS Into a Separate Bundle With mini-css-extract-plugin, Part 1

1. Make changes in files as in the example
2. `npm install --save-dev mini-css-extract-plugin`

### 22. Extracting CSS Into a Separate Bundle, Part 2

1. Make changes in files as in the example

### 23. Browser Caching

1. Make changes in files as in the example
2. Extra step.
3. Move image to `dist/img`
4. Move css to `dist/css`

### 24. How To Clean Dist Folder Before Generating New Bundles

1. Make changes in files as in the example
2. In Webpack 5 this step is not necessary. It is enough to add in `output -> clean: true`

### 25. Generating HTML Files Automatically During Webpack Build Process

1. No commit
2. I did this in step 14

### 26. Customizing Generated HTML Files

1. Make changes in files as in the example

### 27. Integration with Handlebars

1. Make changes in files as in the example
2. [The template option html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md)
3. `npm install --save-dev handlebars-loader`
4. `npm install --save handlebars`

### 28. More Webpack Plugins

1. No commit

### 29. Introduction

1. No commit

### 30. Mode

1. Make changes in files as in the example
2. [Info about modes](https://webpack.js.org/configuration/mode/#usage)
3. Development mode use source map as default

### 31. Managing Webpack Config for Production and Development Use Cases

1. Make changes in files as in the example

### 32. Faster Development with webpack dev server

1. Make changes in files as in the example

### 33. Cleaning Up A Bit

1. No commit

### 34. Introduction

1. No commit

### 35. Creating KiwiImage Component

1. Make changes in files as in the example

### 36. Code Splitting in Webpack: Multiple JS and CSS Bundles

1. Make changes in files as in the example (not full implementation)
2. There are still bugs

### 37. How To Generate Multiple HTML Files

1. Make changes in files as in the example (not full implementation)
2. There are still not finish




## Learn

## Icons

1. https://handlebarsjs.com/
2. https://babeljs.io/
3. https://ejs.co/
