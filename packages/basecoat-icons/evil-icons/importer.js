const generateJson = require('../../scripts/utils/generateJson');
const extraFromJson = require('../../scripts/utils/extraFromJson');
const getIconsFromCss3 = require('../../scripts/utils/getIconsFromCss3');
const prepareIcons = require('../../scripts/utils/prepareIcons');
const getSvgs = require('../../scripts/utils/getSvgs');
const copySvgs = require('../../scripts/utils/copySvgs');
const copyLicense = require('../../scripts/utils/copyLicense');
const generateFontsFromSvg = require('../../scripts/utils/generateFontsFromSvg');
const jsonfile = require('../../scripts/utils/jsonfile');
const clean = require('../../scripts/utils/clean');
const fs = require('fs-extra');
const path = require('path');

let options = {
  source: path.join(`${__dirname}/node_modules/`, 'evil-icons'),
  name: 'evil-icons',
  class: 'evil',
  prefix: 'evil-',
  className: 'EvilIcons',
  title: 'Evil Icons',
  classifiable: false
};

let paths = {
  package: path.join(options.source, 'package.json'),
  svgs: path.join(options.source, 'assets', 'icons'),
  dest: __dirname,
  svgsDest: path.join(__dirname, 'icons')
};

let info = extraFromJson(paths.package, ['homepage', 'description', 'version', 'author', 'license']);

options.license = info.license;
options.author = info.author.name;
options.homepage = info.homepage;
options.description = info.description;
options.version = info.version;
options.svgs = getSvgs(paths.svgs);

module.exports = function(callback) {
  clean(paths.dest)
  copySvgs(paths.svgsDest, paths.svgs, options.svgs, 'ei-');
  generateFontsFromSvg(paths.dest, options, () => {
    options.icons = getIconsFromCss3(`${__dirname}/${options.name}.css`, 'evil-');
    options = prepareIcons(options);
    generateJson(paths.dest, options.className, options);
    copyLicense(paths.dest, path.join(options.source, 'LICENSE.txt'));
    jsonfile(paths.dest, options);
    callback()
  });
};
