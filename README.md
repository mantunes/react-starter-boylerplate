React App Boilerplate
===========
Redlight Software

<br />

## What

This is a simple React App boilerplate. It includes a number of tools already configured and ready to use. From this branch we forked another two to create a React-Redux and a React-Redux-GraphQL boilerplates.

<br />

## How

<br/>

### install dependencies (package.json)

```npm install``` or ```yarn```

### run

```npm start``` or ```yarn start```

### test

```npm test``` or ```yarn test```

<br />

## Tools

<br/>

### eslint & prettier

These two tools are already pre-configured, and you can run them with:

```npm run lint``` or ```yarn lint```

If you want to clean up your code using eslint and prettier rules, you can run:

```npm run format``` or ```yarn format```

<br />

### dotenv

You can add keys to the ".env" file, and the name should follow this pattern:

REACT\_APP_[key]=[value]

<br />

### SASS

This boilerplate already includes a listener for preprocessing SASS files and generating CSS files. It should run along with ```npm start``` or ```yarn start```, but you can also run it alone with:

```npm run watch-css``` or ```yarn watch-css```

<br/>

### CSS Modules

This project uses CSS Modules.

> What are CSS Modules?
>
> According to the repo, CSS modules are:
>
> CSS files in which all class names and animation names are scoped locally by default.

You can read more about CSS Modules here -> [Part 1](https://css-tricks.com/css-modules-part-1-need/), [Part 2](https://css-tricks.com/css-modules-part-2-getting-started/) and [Part 3](https://css-tricks.com/css-modules-part-3-react/).

<br />

### CI

There's a Wercker pre-configured to automatically test your code using eslint and jest. Don't forget to setup Wercker on your repo and account.

---

## React-Redux specific

<br />

### Redux

The 'setup-redux' branch uses a different file structure. It's called "Ducks File Structure", and you can read more [here](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c) and [here](https://github.com/erikras/ducks-modular-redux).

<br />

### React-Router

React-router is another tool thats already integrated in the boilerplate. You can take a look at 'src/Router.js' to better understand it's behaviour.

You simply need to ```dispatch(push("/login"));``` to send a user to the specific page.

Read more about React-Router [here](https://github.com/ReactTraining/react-router).

<br />

### Jest

You can use the following commands to run the tests:

```npm test``` or ```yarn test```

We already implemented some examples to test Action Creators, Reducers and Components, including sync and async calls.

We recommend to continue to use the same file organization:

```
src

  components

    molecules

      List

        index.js               <- component file

        index.test.js          <- jest tests file

        __snapshots__          <- snapshots folder

          index.test.js.snap   <- snapshot file

```

<br />

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
