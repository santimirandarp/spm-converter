export function getLength(data: string): number {
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
