React App Boilerplate
===========
Redlight Software

<br />

## What

This is a simple boilerplate to create a React App. It includes a number of tools already configured.

<br />

## How

### install dependencies

Installs all dependencies from package.json:

```npm install``` or ```yarn```

### run

```npm start``` or ```yarn start```

### test

```npm test``` or ```yarn test```

<br />

### eslint & prettier

These two tools are already pre-configured, and you can run them with:

```npm run lint``` or ```yarn lint```

If you want to clean up your code using eslint and prettier rules, you can run:

```npm run format``` or ```yarn format```

<br />

### branches

There are two branches:

1. setup
2. setup-redux

The only difference is the Redux packages and a few reducers examples on setup-redux.

The 'setup-redux' branch uses a different file structure. It's called "Ducks File Structure", and you can read more [here](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c) and [here](https://github.com/erikras/ducks-modular-redux).

<br />

### dotenv

You can add keys to the ".env" file, and the name should follow this pattern:

REACT\_APP_[key]=[value]

<br />

### SASS

This boilerplate already includes a listener for preprocessing SASS files and generating CSS files. It should run along with ```npm start``` or ```yarn start```, but you can also run it alone with:

```npm run watch-css``` or ```yarn watch-css```

<br />

### CI

There's a Wercker pre-configured to automatically test your code using eslint and jest. Don't forget to setup Wercker on your repo and account.

<br />

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).