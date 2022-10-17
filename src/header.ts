import type { BinaryData } from 'cheminfo-types';
import { IOBuffer } from 'iobuffer';

import { StringObject } from './types';
import { getKeyValues } from './utility/headerKeyVals';
import { getLength } from './utility/headerLength';
import { imageItem } from './utility/imageItem';

/**
 *
 * @param spmFile - spm file as a binary data
 * @returns - json object with the header information
 */
export function readHeader(spmFile: BinaryData): StringObject {
  const io = new IOBuffer(spmFile);
  const header: StringObject = { 'Ciao image list': [], 'Scanner list': [] };
  const regex = {
    keyValue: /.(?<key>.*?):\s*(?<value>.*)/,
    object: /^\\\*/,
  };

  /* seems safe amount to get to the data length */
  const length = getLength(io.readUtf8(150));
  io.offset = 0;

  const lines = io.readUtf8(length).split('\r\n');
  for (let i = 0; i < lines.length - 2; i++) {
    const currentLine = lines[i];
    const [, topLevelKey] = currentLine.split(regex.object);
    if (topLevelKey) {
      let [subObject, lastIRead] = getKeyValues(lines, ++i);
      if (topLevelKey === 'Ciao image list') {
        subObject = imageItem(subObject);
        header[topLevelKey].push(subObject);
      } else if (topLevelKey === 'Scanner list') {
        header[topLevelKey].push(subObject);
      } else {
        header[topLevelKey] = subObject;
      }
      i = lastIRead;
    }
  }
  return header;
}
