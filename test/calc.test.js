import { describe, expect, it } from '@jest/globals';
import {
  calculateAnalysis,
  max,
  mean,
  median,
  min,
  range,
  stddev,
  sum,
  variance,
} from '../src/calc';

describe('variance', () => {
  it('works for known example', () => {
    const data = [2, 7, 3, 12, 9];
    const result = variance(data);
    expect(result).toBe(13.84);
  });
  it('works for zero variance example', () => {
    const data = [5, 5, 5, 5, 5, 5, 5];
    const result = variance(data);
    expect(result).toBe(0);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = variance(data);
    expect(result).toBeNaN();
  });
});
describe('standard deviation', () => {
  it('works for known example', () => {
    const data = [2, 7, 3, 12, 9];
    const result = stddev(data);
    expect(result).toBeCloseTo(3.72);
  });
  it('works for zero variance example', () => {
    const data = [5, 5, 5, 5, 5, 5, 5];
    const result = stddev(data);
    expect(result).toBe(0);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = stddev(data);
    expect(result).toBeNaN();
  });
});

describe('max', () => {
  it('works for known example', () => {
    const data = [-2, -7, 3, 12, 9];
    const result = max(data);
    expect(result).toBe(12);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = max(data);
    expect(result).toBeNaN();
  });
});

describe('min', () => {
  it('works for known example', () => {
    const data = [-2, -7, 3, 12, 9];
    const result = min(data);
    expect(result).toBe(-7);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = min(data);
    expect(result).toBeNaN();
  });
});

describe('mean', () => {
  it('works for known example', () => {
    const data = [2, 7, 3, 12, 9];
    const result = mean(data);
    expect(result).toBe(6.6);
  });
  it('works for zero variance example', () => {
    const data = [5, 5, 5, 5, 5, 5, 5];
    const result = mean(data);
    expect(result).toBe(5);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = mean(data);
    expect(result).toBeNaN();
  });
});

describe('median', () => {
  it('works for known odd-number length dataset', () => {
    const data = [6, 3, 3, 1, 8, 7, 9];
    const result = median(data);
    expect(result).toBe(6);
  });
  it('works for known even-number length dataset', () => {
    const data = [3, 2, 9, 8, 5, 6, 4, 1];
    const result = median(data);
    expect(result).toBe(4.5);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = mean(data);
    expect(result).toBeNaN();
  });
});

describe('sum', () => {
  it('works for known dataset', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = sum(data);
    expect(result).toBe(55);
  });
  it('works for known dataset with negative numbers', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
    const result = sum(data);
    expect(result).toBe(35);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = sum(data);
    expect(result).toBeNaN();
  });
});

describe('range', () => {
  it('works for known dataset', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = range(data);
    expect(result).toBe(9);
  });
  it('works for known dataset with negative numbers', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
    const result = range(data);
    expect(result).toBe(19);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = range(data);
    expect(result).toBeNaN();
  });
});

describe('variance', () => {
  it('works for known example', () => {
    const data = [2, 7, 3, 12, 9];
    const result = calculateAnalysis(data);
    const expectedResult = {
      variance: 13.84,
      max: 12,
      mean: 6.6,
      median: 7,
      min: 2,
      stddev: 3.7202150475476548,
      sum: 33,
      range: 10,
    };
    expect(result).toStrictEqual(expectedResult);
  });
});
