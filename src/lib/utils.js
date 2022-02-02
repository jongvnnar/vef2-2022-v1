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

export function sortFilenames(array) {
  return [...array].sort((filename1, filename2) => {
    const num1 = parseInt(filename1.split('.')[0]);
    const num2 = parseInt(filename2.split('.')[0]);
    return num1 - num2;
  });
}
