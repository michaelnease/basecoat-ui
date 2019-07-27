# @icon/font-awesome-regular

[![npm version](https://img.shields.io/npm/v/font-awesome-regular.svg)](https://www.npmjs.org/package/font-awesome-regular)
[![Build Status](https://travis-ci.org/icon/icon.svg?branch=master)](https://travis-ci.org/icon/icon)

> TODO: fill in this description later

This repository is a module of the full [icon][icon] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `font-awesome-regular` with this command.

```bash
npm install --save font-awesome-regular
```

## Usage

The source files included are written in [Sass][sass] (SCSS) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "font-awesome-regular/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/src/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **CSS** version of this module, an npm script is included that will output a css version to `dist/font-awesome-regular.css` The built css file is also included in the npm package:

```bash
npm run build
```

## License

[MIT](./LICENSE) &copy; [Creation Studio Limited](https://creationstudio.com/)

[icon]: https://github.com/icon/icon
[docs]: http://icon.github.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
