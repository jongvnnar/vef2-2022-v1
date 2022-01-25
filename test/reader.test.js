import { describe, expect, it } from '@jest/globals';
import { readDataFile } from '../src/reader';

describe('reader', () => {
  it('reads data file', () => {
    const input = '1';
    const result = readDataFile(input);
    expect(result).toBe('1');
  });
});
