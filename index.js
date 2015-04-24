'use strict';
var renderer = require('./lib/renderer');

hexo.extend.renderer.register('scss', 'css', renderer);
hexo.extend.renderer.register('sass', 'css', renderer);
