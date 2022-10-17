import type { BinaryData } from 'cheminfo-types';
import { IOBuffer } from 'iobuffer';

type SimpleObject = { [key: string]: string };
/** keys are either strings or objects */
type StringObject = Record<string, SimpleObject>;

/**
 *
 * @param spmFile - spm file as a binary data
 * @returns - json object with the header information
 */
export function readHeader(spmFile: BinaryData): StringObject {
  const io = new IOBuffer(spmFile);
  const header: StringObject = {};
  const regex = {
    keyValue: /.(?<key>.*?):\s*(?<value>.*)/,
    object: /^\\\*/,
  };

  /* seems safe amount to get to the data length */
  const length = getDataLength(io.readUtf8(150));
  io.offset = 0;

  const headerAsLines = io.readUtf8(length).split('\r\n');

  for (let i = 0; i < headerAsLines.length; i++) {
    const currentLine = headerAsLines[i];
    const [, topLevelKey] = currentLine.split(regex.object);
    if (topLevelKey) {
      const [subObject, lastIRead] = getKeyValues(headerAsLines, ++i);
      header[topLevelKey] = subObject;
      i = lastIRead;
    }
  }

  return header;
}

export function getDataLength(data: string): number {
  const res = /Data length: (?<length>\d+)/.exec(data);
  const isThere = res?.groups?.length;
  if (isThere) {
    const headerLengthInBytes = parseInt(isThere, 10);
    if (headerLengthInBytes) {
      return headerLengthInBytes;
    } else {
      throw new Error('Could not parse data length value');
    }
  } else {
    throw new Error('Can not find the data length key in the file');
  }
}
/**
 *
 * @param lines  - array of lines
 * @param i - index of the first line to be parsed
 * @returns - object with the key value pairs and the index of the last line parsed
 */
function getKeyValues(lines: string[], i: number): [SimpleObject, number] {
  const subObject: SimpleObject = {};
  const keyValue = /.(?<key>.*?):\s*(?<value>.*)/;
  while (i < lines.length) {
    const res = keyValue.exec(lines[i]);
    const key = res?.groups?.key;
    const val = res?.groups?.value;
    if (key && val) {
      subObject[key] = val;
      i++;
    } else {
      break;
    }
  }
  return [subObject, i - 1];
}
