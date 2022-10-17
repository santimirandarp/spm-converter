import { SimpleObject } from '../types';
/**
 *
 * @param lines  - array of lines
 * @param i - index of the first line to be parsed
 * @returns - object with the key value pairs and the index of the last line parsed
 */
export function getKeyValues(
  lines: string[],
  i: number,
): [SimpleObject, number] {
  const subObject: SimpleObject = {};
  const atKeyVal = /^\\(?<key>@\d?:?.*?):\s*(?<value>.*)\.*$/i;
  const keyValue = /^\\(?<key>.*?):\s*(?<value>.*)\.*$/;
  while (i < lines.length) {
    const currentLine = lines[i];
    if (currentLine.startsWith('\\*')) {
      break;
    } else if (currentLine.startsWith('\\@')) {
      const res = atKeyVal.exec(currentLine);
      const key = res?.groups?.key;
      const val = res?.groups?.value;
      if (key && val !== undefined) {
        subObject[key] = val.trim();
      }
    } else {
      const res = keyValue.exec(currentLine);
      const key = res?.groups?.key;
      const val = res?.groups?.value;
      if (key && val !== undefined) {
        subObject[key] = val.trim();
      }
    }
    i++;
  }
  return [subObject, i - 1];
}
