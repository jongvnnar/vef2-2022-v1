import { describe, expect, it } from '@jest/globals';
import { join } from 'path';
import {
  getDataFileAnalysis,
  newFilename,
  sortFilenames,
} from '../src/lib/utils';
const BASEPATH = '../uhm';
const SLUG = 'file';
describe('newFilename', () => {
  it('handles success case', () => {
    expect(newFilename(SLUG, BASEPATH)).toEqual(join(BASEPATH, 'file.html'));
  });
  it('handles success with no base path', () => {
    expect(newFilename(SLUG)).toEqual('file.html');
  });
  it('returns null if slug is invalid 1', () => {
    expect(newFilename(2)).toBeNull();
  });
  it('returns null if slug is invalid 2', () => {
    expect(newFilename(null)).toBeNull();
  });
  it('returns null if slug is invalid 3', () => {
    expect(newFilename('')).toBeNull();
  });
});

const ARRAY = ['1.txt', '3.html', '5.html', '2.txt'];
const SORTED_ARRAY = ['1.txt', '2.txt', '3.html', '5.html'];
describe('Filename sorter', () => {
  it('sorts regular array', () => {
    expect(sortFilenames(ARRAY)).toEqual(SORTED_ARRAY);
  });
  it('sorts empty array', () => {
    expect(sortFilenames([])).toEqual([]);
  });
});

describe('analysis object maker', () => {
  it('handles regular case', () => {
    const name = 'name';
    const data = `1
    2
    3
    4
    5`;
    const result = getDataFileAnalysis(name, data);
    expect(result).toEqual({
      analysis: {
        max: 5,
        mean: 3,
        median: 3,
        min: 1,
        range: 4,
        stddev: 1.4142135623730951,
        sum: 15,
        variance: 2,
      },
      fileName: 'name',
      originalData: data.split('\n'),
      parsedData: [1, 2, 3, 4, 5],
    });
  });
});
