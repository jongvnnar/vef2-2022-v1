import { join } from 'path';
import { calculateAnalysis } from '../calc.js';
import { parse } from '../parser.js';

export function newFilename(slug, basePath = '') {
  if (typeof slug !== 'string') {
    return null;
  }

  if (slug === '') {
    return null;
  }

  const filename = join(basePath, `${slug}.html`);

  return filename;
}

export function sortFilenames(array) {
  return [...array].sort((filename1, filename2) => {
    const num1 = parseInt(filename1.split('.')[0], 10);
    const num2 = parseInt(filename2.split('.')[0], 10);
    return num1 - num2;
  });
}

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
export function getDataFileAnalysis(fileName, data) {
  const originalData = data.split('\n');
  const parsedData = parse(data);
  const analysis = calculateAnalysis(parsedData);
  return { fileName, analysis, parsedData, originalData };
}
