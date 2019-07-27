# @icon/caomei-icons

[![npm version](https://img.shields.io/npm/v/@icon/caomei-icons.svg)](https://www.npmjs.org/package/@icon/caomei-icons)

This repository is a module of the full [icon][icon] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@icon/caomei-icons` with this command.

```bash
npm install --save @icon/caomei-icons
```

## Usage

There are many ways/formats of how to use caomei-icons. The fastest and recommended way is via SVG directly. Or use the webfont version if you want to include all icons at once:

### SVG icons -- when you need just a few icons in your project

1 . If you want to use just a few icons. Find the icons you need in "icons" folder. Then use them as regular images:

```
<img height="32" width="32" src="@icon/caomei-icons/icons/add.svg" />
```

2 . Icons can be served from a CDN such as [Unpkg][Unpkg]. Simply use the `@icon/caomei-icons` npm package in the URL like the following:

```
<img height="32" width="32" src="https://unpkg.com/@icon/caomei-icons/icons/add.svg" />
```

### Icons font -- ideal when you want to include all icons at once

1 . Install `@icon/caomei-icons` with this command. In the `<head>` of your html, reference the location to your `caomei-icons.css`.

```
<head>
...
<link rel="stylesheet" href="@icon/caomei-icons/caomei-icons.css">
...
</head>
```

2 . Use [unpkg.com][Unpkg] to load directly caomei-icons without installing anything:

```
<head>
...
<link rel="stylesheet" href="https://unpkg.com/@icon/caomei-icons/caomei-icons.css">
...
</head>
```

> Place caomei-icons with `<i>` tag in your html like this. Icon class names are to be used with the `czs` class prefix.

```
<i class="czs czs-caomei"></i>
```


## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues][github issues].

## License

Caomei-icons is copyright by xiangsudian, font is licensed under the [SIL OFL 1.1][SIL], css files are licensed under the [MIT License][MIT], documentation is licensed under the [CC BY 3.0 License][CCBY3.0].

[CCBY3.0]: http://creativecommons.org/licenses/by/3.0/
[MIT]: https://opensource.org/licenses/mit-license.html
[SIL]: http://scripts.sil.org/OFL
[icon]: https://github.com/thecreation/icons
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[github issues]: https://github.com/thecreation/icons/issues
[sass]: http://sass-lang.com/
[Unpkg]: https://unpkg.com