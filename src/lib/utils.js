import { join } from 'path';

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

const FILENAMES = [
  '1.txt',
  '10.txt',
  '11.txt',
  '12.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
];
export function sortFilenames(array) {
  return [...array].sort((filename1, filename2) => {
    const num1 = parseInt(filename1.split('.')[0]);
    const num2 = parseInt(filename2.split('.')[0]);
    return num1 - num2;
  });
}

console.log(sortFilenames(FILENAMES));
