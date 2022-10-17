import { readFileSync } from 'fs';
import { join } from 'path';

import { IOBuffer } from 'iobuffer';

import { readHeader } from '../header';

const filePath = join(__dirname, "data", "AFM", "AFM.spm")
const buffer = new IOBuffer(readFileSync(filePath))

describe('read header', () => {
  
  it('return the header', () => {
   console.log(readHeader(buffer))
  });

});
