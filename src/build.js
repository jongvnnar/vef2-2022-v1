import { mkdir, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { dirExists } from './lib/file.js';
import {
  getDataFileAnalysis,
  newFilename,
  sortFilenames,
} from './lib/utils.js';
import { makeAnalysisPage, makeIndex, siteTemplate } from './make_html.js';
import { readDataFile } from './reader.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  const files = await readdir(DATA_DIR);
  if (!(await dirExists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  const analyses = [];
  for (const file of sortFilenames(files)) {
    const path = join(DATA_DIR, file);

    try {
      const data = await readDataFile(path);
      const analysedFile = getDataFileAnalysis(file, data);
      const filename = newFilename(file.split('.')[0], OUTPUT_DIR);
      analyses.push(analysedFile);
      const site = siteTemplate(
        'Gagnavinnsla',
        makeAnalysisPage(analysedFile),
        true,
        analysedFile.fileName
      );
      writeFile(filename, site, { flag: 'w+' });
    } catch (e) {
      console.warn(e.message);
    }
  }
  const index = siteTemplate(
    'Gagnavinnsla',
    makeIndex(analyses),
    false,
    'Jón Gunnar Hannesson'
  );
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
