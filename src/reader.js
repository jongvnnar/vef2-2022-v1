import {readFile, stat } from 'fs/promises';

export async function readDataFile(path) {
  const info = await stat(path);
  if (info.isDirectory() || !info.isFile()) {
    continue;
  }

  const data = await readFile(path);
  const str = data.toString('utf-8');

  return str;
}
