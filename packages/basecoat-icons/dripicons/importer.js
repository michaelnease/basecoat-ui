const generateCss = require('../../scripts/utils/generateCss');
const generateJson = require('../../scripts/utils/generateJson');
const prepareIcons = require('../../scripts/utils/prepareIcons');
const extraFromJson = require('../../scripts/utils/extraFromJson');
const detectLicense = require('../../scripts/utils/detectLicense');
const getIconsFromCss = require('../../scripts/utils/getIconsFromCss');
const getSvgs = require('../../scripts/utils/getSvgs');
const copySvgs = require('../../scripts/utils/copySvgs');
const getFonts = require('../../scripts/utils/getFonts');
const copyFonts = require('../../scripts/utils/copyFonts');
const copyLicense = require('../../scripts/utils/copyLicense');
const jsonfile = require('../../scripts/utils/jsonfile');
const clean = require('../../scripts/utils/clean');
const fs = require('fs-extra');
const config = require('../../config');
const path = require('path');

let options = {
  source: path.join(config.sets.customs, 'dripicons'),
  name: 'dripicons',
  class: 'dripicons',
  prefix: 'dripicons-',
  className: 'Dripicons',
  title: 'Dripicons',
  description: "Dripicons V2 is available for free for use in both personal and commercial projects.",
  author: 'Amit Jakhu',
  homepage: 'https://github.com/amitjakhu/dripicons',
  version: '2.0.0',
  classifiable: false
};

let paths = {
  // bower: path.join(options.source, '.bower.json'),
  license: path.join(options.source, 'readme.txt'),
  css: path.join(options.source, 'webfont', 'webfont.css'),
  html: path.join(options.source, 'webfont', 'icons-reference.html'),
  fonts: path.join(options.source, 'webfont', 'fonts'),
  svgs: path.join(options.source, 'SVG'),
  dest: __dirname,
  svgsDest: path.join(__dirname, 'icons')
};

// options =  Object.assign(options, extraFromJson(paths.bower, ['homepage']));
options.license = detectLicense(paths.license);
options.fonts = getFonts(paths.fonts);
options.svgs = getSvgs(paths.svgs);

module.exports = function(callback) {
  options.icons = getIconsFromCss(paths.css, 'dripicons-');
  options = prepareIcons(options);
  clean(paths.dest)
  generateCss(paths.dest, options.name, options);
  generateJson(paths.dest, options.className, options);
  copyFonts(paths.dest, paths.fonts, options);
  copySvgs(paths.svgsDest, paths.svgs, options.svgs);
  copyLicense(paths.dest, path.join(options.source, 'LICENSE'));
  jsonfile(paths.dest, options);
  callback()
};
