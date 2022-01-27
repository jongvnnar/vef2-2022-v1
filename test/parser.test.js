import { describe, expect, it } from '@jest/globals';
import { icelandicParser, parse } from '../src/parser';

describe('Icelandic number parser', () => {
  it('parses IS thousands separator integers', () => {
    const input = '100.000';

    const parsed = icelandicParser(input);
    expect(parsed).toEqual('100000');
  });
  it('parses IS thousands separator floats', () => {
    const input = '100.000,2';

    const parsed = icelandicParser(input);
    expect(parsed).toEqual('100000.2');
  });
  it('parses Icelandic floats', () => {
    const input = '12,5';
    const parsed = icelandicParser(input);
    expect(parsed).toEqual('12.5');
  });
});

describe('parser', () => {
  it('parses a single integer', () => {
    const input = '123456789';

    const parsed = parse(input);
    expect(parsed).toEqual([123456789]);
  });
  it('parses a negative integer', () => {
    const input = '-123456789';

    const parsed = parse(input);
    expect(parsed).toEqual([-123456789]);
  });
  it('parses scientific notation 1', () => {
    const input = '1e2';
    const parsed = parse(input);
    expect(parsed).toEqual([100]);
  });
  it('parses scientific notation 2', () => {
    const input = '1e-2';
    const parsed = parse(input);
    expect(parsed).toEqual([0.01]);
  });
  it('parses multiple integers', () => {
    const input = `1234
    5678`;
    const parsed = parse(input);
    expect(parsed).toEqual([1234, 5678]);
  });
  it('parses IS thousands separator integers', () => {
    const input = '100.000';

    const parsed = parse(input);
    expect(parsed).toEqual([100000]);
  });
  it('parses IS thousands separator floats', () => {
    const input = '100.000,2';

    const parsed = parse(input);
    expect(parsed).toEqual([100000.2]);
  });
  it('parses Icelandic floats', () => {
    const input = '12,5';
    const parsed = parse(input);
    expect(parsed).toEqual([12.5]);
  });
  it('Ignores comments', () => {
    const input = '#125';
    const parsed = parse(input);
    expect(parsed).toEqual([]);
  });
  it('Ignores whitespace', () => {
    const input = '      1         ';
    const parsed = parse(input);
    expect(parsed).toEqual([1]);
  });
  it('Ignores empty lines 1', () => {
    const input = '            ';
    const parsed = parse(input);
    expect(parsed).toEqual([]);
  });
  it('Ignores empty lines 2', () => {
    const input = '';
    const parsed = parse(input);
    expect(parsed).toEqual([]);
  });
  it('Ignores empty lines 3', () => {
    const input = `
    1`;
    const parsed = parse(input);
    expect(parsed).toEqual([1]);
  });
  it('ignores text outside comments', () => {
    const input = `aaaaa
    14,2
    bbbbbbb`;
    const parsed = parse(input);
    expect(parsed).toEqual([14.2]);
  });
  it('ignores malformed numbers 1', () => {
    const input = '100aa';
    const parsed = parse(input);
    expect(parsed).toEqual([]);
  });
  it('ignores malformed numbers 2', () => {
    const input = 'aa100';
    const parsed = parse(input);
    expect(parsed).toEqual([]);
  });
});
