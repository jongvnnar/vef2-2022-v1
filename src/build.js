import { mkdir, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { dirExists } from './lib/file.js';
import { siteTemplate } from './make_html.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await dirExists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  const index = siteTemplate('');
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
  console.log('whatup');
}

main().catch((err) => console.error(err));
