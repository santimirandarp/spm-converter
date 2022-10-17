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
  const keyValue = /.(?<key>.*?):\s*(?<value>.*)\.*/;
  while (i < lines.length) {
    const res = keyValue.exec(lines[i]);
    const key = res?.groups?.key;
    const val = res?.groups?.value;
    if (key && val) {
      subObject[key] = val.trim();
      i++;
    } else {
      break;
    }
  }
  return [subObject, i - 1];
}
