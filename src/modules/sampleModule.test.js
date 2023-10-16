import { sampleRound } from './sampleModule.js';

test('sampleRound', () => {
  expect(sampleRound(0, 0)).toEqual(0);
  expect(sampleRound(0, 1)).toEqual(0);
  expect(sampleRound(1, 0)).toEqual(1);
  expect(sampleRound(1, 1)).toEqual(1);
  expect(sampleRound(1.2, 0)).toEqual(1);
  expect(sampleRound(1.2, 1)).toEqual(1.2);
  expect(sampleRound(1.2, 2)).toEqual(1.2);
  expect(sampleRound(1.2345, 1)).toEqual(1.2);
  expect(sampleRound(1.2345, 2)).toEqual(1.23);
  expect(sampleRound(1.2345, 3)).toEqual(1.234);
  expect(sampleRound(1.2345, 4)).toEqual(1.2345);
  expect(sampleRound(1.2345, 5)).toEqual(1.2345);
  expect(sampleRound(-1, 0)).toEqual(-1);
  expect(sampleRound(-1, 1)).toEqual(-1);
  expect(sampleRound(-1.2, 0)).toEqual(-1);
  expect(sampleRound(-1.2, 1)).toEqual(-1.2);
  expect(sampleRound(-1.2, 2)).toEqual(-1.2);
});
