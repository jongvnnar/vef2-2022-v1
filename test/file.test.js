import { describe, expect, it } from '@jest/globals';
import { join } from 'path';
import { dirExists } from '../src/lib/file';

describe('Dir exists', () => {
  it('tells me if a directory exists', async () => {
    expect(await dirExists('./')).toBeTruthy();
  });
  it('tells me if a directory doesn\'t exist', async () => {
    expect(await dirExists(join('../', 'doesntexist'))).toBeFalsy();
  });
});
