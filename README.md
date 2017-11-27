# react-web-seed
React web-seed with [Webpack][webpack], [SASS][sass], and [airbnb][airbnb] linter. Uses [Handlebars][handlebars] templating for `index.html`.  

Utilizes [React Router][react-router] for dynamic routes.

## Prerequisites  

You will need to have [NPM][npm] installed and available for use via the command-line.

## Setup  

1. Fork the repository on Github
2. Clone the forked repository `git clone {your_fork_url}`
3. In the command-line, navigate to the project's root folder
4. From the root folder, run `npm install`

That should get you through project checkout and installation of all dependencies. At this point, you should be ready to run the app.

## Running 

1. In the command-line, navigate to the project's root directory
2. Execute the command `npm start`
3. Open a browser, go to `localhost:8080/#/`

## Building for Production  
When you are ready to build the application for production, you should update the npm version. The version can be found in the `package.json` file. The recommended way for changing the version is through the command-line using npm's version command like this:  
`npm version {version_number} -m "{message}"`  

For example:  
  
`npm version 2.0.0 -m "add new amazing feature"`

Running npm's version command will build the project's production-ready files into the `dist` folder and create a git tag using the version number.

This will generate versioned files such as: `app.{version}.js`. If the app's version is `1.0.0`, the files will use this version number and would look like this `app.1.0.0.js`. 

It is a good idea to push your tags to your git remote like this:  
`git push origin --tags`

[webpack]: https://webpack.js.org/
[sass]: http://sass-lang.com/guide
[airbnb]: https://www.npmjs.com/package/eslint-config-airbnb-base
[handlebars]: http://handlebarsjs.com/
[react-router]: https://reacttraining.com/react-router/
[npm]: https://nodejs.org/en/

