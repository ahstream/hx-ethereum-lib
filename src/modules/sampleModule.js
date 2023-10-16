import { round } from '@ahstream/hx-lib';

// Exports -------------------------------------------------------

export function sampleRound(x, y) {
  const result = round(x, y);
  console.log(`round(${(x, y)}) = ${result}`);
  return result;
}
