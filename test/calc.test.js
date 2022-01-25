import {
  variance,
  max,
  mean,
  median,
  min,
  stddev,
  sum,
  range,
} from '../src/calc';
import { describe, expect, it } from '@jest/globals';

describe('variance', () => {
  it('works for known example', () => {
    const data = [2, 7, 3, 12, 9];
    const result = variance(data);
    expect(result).toEqual(13.84);
  });
  it('works for zero variance example', () => {
    const data = [5, 5, 5, 5, 5, 5, 5];
    const result = variance(data);
    expect(result).toEqual(0);
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
    expect(result).toEqual(0);
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
    expect(result).toEqual(12);
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
    expect(result).toEqual(-7);
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
    expect(result).toEqual(6.6);
  });
  it('works for zero variance example', () => {
    const data = [5, 5, 5, 5, 5, 5, 5];
    const result = mean(data);
    expect(result).toEqual(5);
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
    expect(result).toEqual(6);
  });
  it('works for known even-number length dataset', () => {
    const data = [3, 2, 9, 8, 5, 6, 4, 1];
    const result = median(data);
    expect(result).toEqual(4.5);
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
    expect(result).toEqual(55);
  });
  it('works for known dataset with negative numbers', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
    const result = sum(data);
    expect(result).toEqual(35);
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
    expect(result).toEqual(9);
  });
  it('works for known dataset with negative numbers', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
    const result = range(data);
    expect(result).toEqual(19);
  });
  it('works for empty dataset', () => {
    const data = [];
    const result = range(data);
    expect(result).toBeNaN();
  });
});
