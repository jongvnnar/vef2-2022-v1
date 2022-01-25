import { mkdir, readdir, stat, writeFile } from 'fs/promises';
import { siteTemplate } from './make_html.js';
import { join } from 'path';
const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

/**
 * Check whether directory exists
 * @param {*} dir Directory to check
 * @returns {Promise<Boolean>}Boolean promise indicating if directory exists
 */
async function dirExists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await dirExists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  const index = siteTemplate();
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
  console.log('whatup');
}

main().catch((err) => console.error(err));
