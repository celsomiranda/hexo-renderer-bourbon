# [Sass] renderer for [Hexo] with [Bourbon] support

An up-to-date [node-sass] wrapper that includes [Bourbon] mixins.

## Install

``` bash
$ npm i hexo-renderer-bourbon
```

## Usage

To enable Bourbon support you need to import it in your stylesheet.

``` scss
@import 'bourbon';
```

## Options

This renderer supports all the options exposed by node-sass.

#### imagePath
`imagePath` is a `String` that represents the public image path. When using the `image-url()` function in a stylesheet, this path will be prepended to the path you supply. eg. Given an `imagePath` of `/path/to/images`, `background-image: image-url('image.png')` will compile to `background-image: url("/path/to/images/image.png")`

#### indentedSyntax
`indentedSyntax` is a `Boolean` flag to determine if [Sass Indented Syntax](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html) should be used to parse provided string or a file.

#### omitSourceMapUrl
`omitSourceMapUrl` is a `Boolean` flag to determine whether to include `sourceMappingURL` comment in the output file.

#### outputStyle
`outputStyle` is a `String` to determine how the final CSS should be rendered. Its value should be one of `'nested'` or `'compressed'`.  Node-sass defaults to 'nested'.
(`'expanded'` and `'compact'` are not currently supported by libsass).

#### precision
`precision` is a `Number` that will be used to determine how many digits after the decimal will be allowed. For instance, if you had a decimal number of `1.23456789` and a precision of `5`, the result will be `1.23457` in the final CSS.

#### sourceComments
`sourceComments` is a `Boolean` flag to determine what debug information is included in the output file.

#### sourceMapEmbed
`sourceMapEmbed` is a `Boolean` flag to determine whether to embed `sourceMappingUrl` as data URI.

#### sourceMapContents
`sourceMapContents` is a `Boolean` flag to determine whether to include `contents` in maps.


## Example `_config.yml`

``` yaml
bourbon:
  outputStyle: nested
  precision: 8
  imagePath: images
  sourceComments: none
  indentedSyntax: false
  omitSourceMapUrl: false
  sourceMapEmbed: false
  sourceMapContents: false
```

[Hexo]: http://hexo.io/
[Bourbon]: http://bourbon.io/
[node-sass]: https://www.npmjs.com/package/node-sass
[Sass]: http://sass-lang.com/
