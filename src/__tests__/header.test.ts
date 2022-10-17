import { readFileSync } from 'fs';
import { join } from 'path';

import { readHeader } from '../header';

const filePath = join(__dirname, 'data', 'AFM', 'AFM.spm');
const buffer = readFileSync(filePath);

describe('read header', () => {
  it('return the header', () => {
    const header = readHeader(buffer);
    // the number of keys for next tests was taken form the original file
    expect(Object.keys(header['File list'])).toHaveLength(10);
    expect(Object.keys(header['Equipment list'])).toHaveLength(3);
    expect(Object.keys(header['Scanner list'][0])).toHaveLength(143);
    expect(Object.keys(header['Ciao scan list'])).toHaveLength(714);
    expect(Object.keys(header['Fast Scan list'])).toHaveLength(30);
    expect(Object.keys(header['Ciao image list'][0])).toHaveLength(36);
    expect(Object.keys(header['Ciao image list'][1])).toHaveLength(36);
    expect(header['Ciao image list']).toHaveLength(2);
    expect(header['Scanner list']).toHaveLength(1);
    expect(header).toMatchSnapshot();
  });
});
