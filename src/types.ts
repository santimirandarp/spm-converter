/* eslint-disable @typescript-eslint/naming-convention */
export type SimpleObject = { [key: string]: string | number };
/** keys are either strings or objects */
export interface StringObject {
  'Ciao image list': SimpleObject[];
  'Scanner list': SimpleObject[];
  [key: string]: SimpleObject | SimpleObject[];
}
