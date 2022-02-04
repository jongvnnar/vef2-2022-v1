import { mkdir, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { calculateAnalysis } from './calc.js';
import { dirExists } from './lib/file.js';
import { newFilename } from './lib/utils.js';
import { makeAnalysisPage, makeIndex, siteTemplate } from './make_html.js';
import { parse } from './parser.js';
import { readDataFile } from './reader.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

/**
 *
 * @param {string} fileName
 * @param {string} data
 * @returns {object} analysis object
 *  * fileName
 *  * analysis
 *  * parsedData
 *  * originalData
 */
function getDataFileAnalysis(fileName, data) {
  const originalData = data.split('\n');
  const parsedData = parse(data);
  const analysis = calculateAnalysis(parsedData);
  return { fileName, analysis, parsedData, originalData };
}

async function main() {
  const files = await readdir(DATA_DIR);
  if (!(await dirExists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  const analyses = [];
  for (const file of files) {
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
      continue;
    }
  }
  const index = siteTemplate(
    'Gagnavinnsla',
    makeIndex(analyses),
    false,
    'Jón Gunnar Hannesson'
  );
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
  console.log(calculateAnalysis([0]));
}

main().catch((err) => console.error(err));
