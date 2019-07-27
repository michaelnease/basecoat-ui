const generateCss = require('../../scripts/utils/generateCss');
const generateJson = require('../../scripts/utils/generateJson');
const prepareIcons = require('../../scripts/utils/prepareIcons');
const extraFromYml = require('../../scripts/utils/extraFromYml');
const detectLicense = require('../../scripts/utils/detectLicense');
const getIconsFromYml = require('../../scripts/utils/getIconsFromYml');
const getSvgs = require('../../scripts/utils/getSvgs');
const copySvgs = require('../../scripts/utils/copySvgs');
const getFonts = require('../../scripts/utils/getFonts');
const copyFonts = require('../../scripts/utils/copyFonts');
const copyLicense = require('../../scripts/utils/copyLicense');
const jsonfile = require('../../scripts/utils/jsonfile');
const clean = require('../../scripts/utils/clean');
const config = require('../../config');
const path = require('path');

let options = {
  source: path.join(config.sets.customs, 'fontelico.font'),
  name: 'fontelico',
  class: 'emo',
  prefix: 'emo-',
  className: 'Fontelico',
  description: 'Fontello project',
  homepage: 'http://fontello.github.io/fontelico.font/demo.html',
  version: '1.0.0',
  classifiable: false
};

let paths = {
  css: path.join(options.source, 'font', 'fontelico.css'),
  fonts: path.join(options.source, 'font'),
  svgs: path.join(options.source, 'src', 'svg'),
  yml: path.join(options.source, 'config.yml'),
  dest: __dirname,
  svgsDest: path.join(__dirname, 'icons')
};

let yml = extraFromYml(paths.yml, [['meta', ['author', 'homepage', 'license']], ['font', ['fullname']], 'glyphs']);

options = Object.assign(options, {
  title: yml.font.fullname,
  author: yml.meta.author,
  // homepage: yml.meta.homepage,
  license: yml.meta.license
});

options.fonts = getFonts(paths.fonts);
options.svgs = getSvgs(paths.svgs);

module.exports = function(callback) {
  clean(paths.dest);
  options.icons = getIconsFromYml(yml.glyphs, 'emo-');
  options = prepareIcons(options);
  generateCss(paths.dest, options.name, options);
  generateJson(paths.dest, options.className, options);
  copyFonts(paths.dest, paths.fonts, options);
  copySvgs(paths.svgsDest, paths.svgs, options.svgs, 'emo-');
  jsonfile(paths.dest, options);
  callback();
};
