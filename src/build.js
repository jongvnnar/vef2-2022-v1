import { mkdir, readdir, stat } from 'fs/promises';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

/**
 * Check whether directory exists
 * @param {*} dir Directory to check
 * @returns Boolean promise indicating if directory exists
 */
async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  console.log('whatup');
}

main().catch((err) => console.error(err));
