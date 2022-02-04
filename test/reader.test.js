import { describe, expect, it } from '@jest/globals';
import { join } from 'path';
import { readDataFile } from '../src/reader';

const TESTDIR = './test/testfiles';
describe('reader', () => {
  it('reads regular file', async () => {
    const data = await readDataFile(join(TESTDIR, 'regular.txt'));
    expect(data).toEqual(`1 2 3

4 5
`);
  });
  it('reads an empty file', async () => {
    const data = await readDataFile(join(TESTDIR, 'empty.txt'));
    expect(data).toEqual('');
  });
  it('understands utf-8', async () => {
    const data = await readDataFile(join(TESTDIR, 'utf8.txt'));
    expect(data).toEqual(`ó mæ god
þetta
eru

íslenskir stafir
`);
  });
  it('throws if attempting to read directory', async () => {
    await expect(readDataFile(TESTDIR)).rejects.toThrow();
  });
  it('throws if file not found', async () => {
    await expect(
      readDataFile(join(TESTDIR, 'doesntexist.txt'))
    ).rejects.toThrow();
  });
});
