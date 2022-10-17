import { readFileSync } from 'fs';
import { join } from 'path';

import { readHeader } from '../header';

const filePath = join(__dirname, 'data', 'AFM', 'AFM.spm');
const buffer = readFileSync(filePath);

describe('read header', () => {
  it('return the header', () => {
    const header = readHeader(buffer);
    expect(header['Ciao image list']).toHaveLength(2);
    expect(header['Scanner list']).toHaveLength(1);
    expect(header).toMatchSnapshot();
  });
});
