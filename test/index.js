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
          imagePath: '/images',
          outFile: './test.css',
          sourceMap: true,
          sourceMapEmbed: true,
          sourceMapRoot: '/'
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
      '  color: #333; }',
      '',
      '/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJInNvdXJjZVJvb3QiOiAiLyIsCgkiZmlsZSI6ICJ0ZXN0LmNzcyIsCgkic291cmNlcyI6IFsKCQkic3RkaW4iCgldLAoJInNvdXJjZXNDb250ZW50IjogW10sCgkibWFwcGluZ3MiOiAiQUFHQSxJQUFJLENBQUM7RUFDSCxJQUFJLEVBQUUsSUFBSSxDQUpDLFNBQVMsRUFBRSxVQUFVO0VBS2hDLEtBQUssRUFKUyxJQUFJLEdBRWQiLAoJIm5hbWVzIjogW10KfQ== */'
    ].join('\n');

    var sassCss = nSass({
      text: sass
    });

    ctx = {};
    sassRes.should.equal(sassCss);
  });
});
