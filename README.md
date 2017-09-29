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

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
