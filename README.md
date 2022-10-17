# spm-converter

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Parses Bruker's Scanning Probe Microscopy (SPM) images

## Installation

`$ npm i spm-converter`

## Usage

```js
import { join } from 'path';
import { fileCollectionFromPath } from 'filelist-utils';
import { convert as cv } from 'spm-converter';

async function run() {
  /* path to the root dir of experiments or any child */
  const fc = fileCollectionFromPath(join(__dirname, 'data'));

  const image = await cv(fc);

  return image
}

run()
  .then((r) => console.log(r))
  .catch((e) => console.error(e));
```

## License


[MIT](./LICENSE)

[ci-image]: https://github.com/cheminfo/spm-converter/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/spm-converter/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/spm-converter.svg
[codecov-url]: https://codecov.io/gh/cheminfo/spm-converter
[npm-image]: https://img.shields.io/npm/v/spm-converter.svg
[npm-url]: https://www.npmjs.com/package/spm-converter
[download-image]: https://img.shields.io/npm/dm/spm-converter.svg
[download-url]: https://www.npmjs.com/package/spm-converter
