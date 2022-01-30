import { mkdir, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { calculateAnalysis } from './calc';
import { dirExists } from './lib/file';
import { newFilename } from './lib/utils';
import { siteTemplate } from './make_html';
import { parse } from './parser';
import { readDataFile } from './reader';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

/**
 *
 * @param {string} fileName
 * @param {string} data
 * @returns {object} analysis object
 *  * fileName
 *  * changedAt
 *  * analysis
 *  * parsedData
 *  * originalData
 */
function getDataFileAnalysis(fileName, data) {
  const originalData = data.split('\n');
  const changedAt = new Date();
  const parsedData = parse(data);
  const analysis = calculateAnalysis(parsedData);
  return { fileName, changedAt, analysis, parsedData, originalData };
}

async function main() {
  const files = await readdir(DATA_DIR);
  if (!(await dirExists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  for (const file of files) {
    const path = join(BLOG_DIR, file);
    const data = await readDataFile(path);
    const analysedFile = getDataFileAnalysis(file, data);
    const parsed = parse(fileStr);
    const filename = newFilename(parsed.metadata.slug, OUTPUT_DIR);

    if (filename) {
      await writeFile(filename, blog, { flag: 'w+' });
      blogs.push(parsed.metadata);
    } else {
      console.warn('missing slug for md file', path);
    }
  }

  /**
   * búa til filename, búa til skrá fyrir file. Skrifa file í output dir.
   * pusha hverju filename í blogs. -> breyta blogs í analyses,
   * senda analyses í makeIndex sem býr til lista yfir þau.
   *
   */
  const index = siteTemplate('Gagnavinnsla');
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
  console.log('whatup');
}

main().catch((err) => console.error(err));
