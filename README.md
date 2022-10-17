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

## Current output

Currently just parses the header (needs more test files), in this way:
```
  {
      'File list': {
        Version: '0x09400202',
        Date: '04:49:10 PM Wed Dec 15 2021',
        'Start context': 'OL2BIG',
        'Data length': '80960',
        'User Rating': '0'
      },
      'Equipment list': {
        Description: 'Dimension Fastscan',
        Vision: 'uEye UI148xLE-C #1',
        'Scanner file': '1bd0e_fsz133.scn'
      },
      'Scanner list': {
        'Scanner type': 'Dim 4000',
        'Head Type': 'Morpheus',
        'Serial Number': '1bd0e',
        'Z serial': 'fsz133',
        'Part Number': '931-014-972',
        'Z Part Number': '860-010-800',
        'Piezo size': 'G',
        'File name': '1bd0e_fsz133.scn',
        'Retracted offset der': '14',
        'Extended offset der': '-12',
        'Allow rotation': 'Allow',
        'Piezo cal': '440',
        'X max': '440',
        'Y max': '440',
        'X sensitivity': '54.45',
        'X derate': '0.07',
        'X mag': '1.2',
        'X mag1': '0.85',
        'X arg': '3.4',
        'Fast arg derate': '0',
        'Rounding Minimum': '0',
        Orthogonality: '0',
        'Y sensitivity': '54.45',
        'Y derate': '0.07',
        'Y mag': '0.9',
        'Y mag1': '1.18',
        'Y arg': '3.7',
        'Slow arg derate': '0.005',
        'X slow sensitivity': '54.44',
        'X slow derate': '0.074',
        'Y fast sensitivity': '54.44',
        'Y fast derate': '0.074',
        'X slow-fast coupling': '0.12171',
        'X slow-fast coupling derating': '-0',
        'Y slow-fast coupling': '0.147242',
        'Y slow-fast coupling derating': '-0',
        'Fast cal freq': '2.50401',
        'Slow cal freq': '4.89064',
        'Xs-Yf coupling': '0.00170358',
        'Xs-Yf coupling derating': '-1.23204e-005',
        'Ys-X
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
