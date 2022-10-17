import { SimpleObject } from '../types';

export function imageItem(subImage: SimpleObject) {
  //keys converted
  const dataOffset = subImage['Data offset'];
  const dataLength = subImage['Data length'];
  const bytesPerPixel = subImage['Bytes/pixel'];

  if (dataOffset && typeof dataOffset === 'string') {
    subImage['Data offset'] = parseInt(dataOffset, 10);
  }
  if (dataLength && typeof dataLength === 'string') {
    subImage['Data length'] = parseInt(dataLength, 10);
  }
  if (bytesPerPixel && typeof bytesPerPixel === 'string') {
    subImage['Bytes/pixel'] = parseInt(bytesPerPixel, 10);
  }
  return subImage;
}
