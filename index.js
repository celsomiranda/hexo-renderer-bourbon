'use strict';

var renderer = require('./lib/renderer');
var assign = require('object-assign');

hexo.config.bourbon = assign({
  imagePath: 'images' ,
  omitSourceMapUrl: false,
  indentedSyntax: false,
  precision: 8,
  outputStyle: 'nested',
  sourceComments: 'none' ,
  sourceMapEmbed: false,
  sourceMapContents: false
}, hexo.config.bourbon);


hexo.extend.renderer.register('scss', 'css', renderer);
hexo.extend.renderer.register('sass', 'css', renderer);
