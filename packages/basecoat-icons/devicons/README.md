# @icon/devicons

[![npm version](https://img.shields.io/npm/v/@icon/devicons.svg)](https://www.npmjs.org/package/@icon/devicons)

This repository is a module of the full [icon][icon] repository.

## Install

This repository is distributed with [npm]. After [installing npm][install-npm], you can install `@icon/devicons` with this command.

```bash
npm install --save @icon/devicons
```

## Usage

There are many ways/formats of how to use devicons. The fastest and recommended way is via SVG directly. Or use the webfont version if you want to include all icons at once:

### SVG icons -- when you need just a few icons in your project

1 . If you want to use just a few icons. Find the icons you need in "icons" folder. Then use them as regular images:

```
<img height="32" width="32" src="@icon/devicons/icons/git.svg" />
```

2 . Icons can be served from a CDN such as [Unpkg][Unpkg]. Simply use the `@icon/devicons` npm package in the URL like the following:

```
<img height="32" width="32" src="https://unpkg.com/@icon/devicons/icons/git.svg" />
```

### Icons font -- ideal when you want to include all icons at once

1 . Install `@icon/devicons` with this command. In the `<head>` of your html, reference the location to your `devicons.css`.

```
<head>
...
<link rel="stylesheet" href="@icon/devicons/devicons.css">
...
</head>
```

2 . Use [unpkg.com][Unpkg] to load directly devicons without installing anything:

```
<head>
...
<link rel="stylesheet" href="https://unpkg.com/@icon/devicons/devicons.css">
...
</head>
```

> Place devicons with `<i>` tag in your html like this. Icon class names are to be used with the `devicons` class prefix.

```
<i class="devicons devicons-git"></i>
```


## Bugs, Ideas, Pull Requests

If you have any ideas or found bugs, please send me Pull Requests or let me know with [GitHub Issues][github issues].

## License

Devicons is copyright by Theodore Vorillas, licensed under the [MIT][license].

[license]: https://opensource.org/licenses/MIT
[icon]: https://github.com/thecreation/icons
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
[github issues]: https://github.com/thecreation/icons/issues
[Unpkg]: https://unpkg.com