'use strict';
var render = require('../lib/renderer');
var should = require('chai')
  .should();

describe('Hexo-Renderer-Bourbon', function () {
  it('should process Sass files', function () {

    var ctx = {
      config: {
        bourbon: {
          indentedSyntax: true,
          outputStyle: 'nested',
          precision: 8,
          imagePath: 'images',
          sourceComments: false,
          omitSourceMapUrl: false,
          sourceMapEmbed: false,
          sourceMapContents: false
        }
      }
    };

    var nSass = render.bind(ctx);

    var sass = [
      '$font-stack: Helvetica, sans-serif',
      '$primary-color: #333',
      '',
      'body',
      '  font: 100% $font-stack',
      '  color: $primary-color'
    ].join('\n');

    var sassRes = [
      'body {',
      '  font: 100% Helvetica, sans-serif;',
      '  color: #333; }'
    ].join('\n') + ('\n');

    var sassCss = nSass({
      text: sass,
      path: './somepath/path.sass'
    });

    ctx = {};
    sassRes.should.equal(sassCss);
  });

  it('should create sourcemaps', function () {

    var ctx = {
      config: {
        bourbon: {
          indentedSyntax: true,
          outputStyle: 'nested',
          precision: 5,
          imagePath: './images',
          sourceComments: true,
          omitSourceMapUrl: true,
          sourceMapEmbed: true,
          sourceMapContents: true,
          sourceMapRoot: './'
        }
      }
    };

    var nSass = render.bind(ctx);

    var sass = [
      '$font-stack: Helvetica, sans-serif',
      '$primary-color: #333',
      '',
      'body',
      '  font: 100% $font-stack',
      '  color: $primary-color'
    ].join('\n');

    var sassRes = [
      '/* line 4, D:/Repos/hexo-renderer-bourbon/path.sass */',
      'body {',
      '  font: 100% Helvetica, sans-serif;',
      '  color: #333; }'
    ].join('\n') + ('\n');

    var sassCss = nSass({
      text: sass,
      path: './path.sass'
    });

    ctx = {};
    sassRes.should.equal(sassCss);
  });
});
