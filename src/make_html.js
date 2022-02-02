import { max } from './calc.js';
import { newFilename } from './lib/utils.js';

const BARGRAPH_HEIGHT = 150;
function makeBarGraph(data) {
  if (data.length === 0) {
    return '<svg></svg>';
  }
  const width = (1 / data.length) * 100;
  const maximum = max(data);

  const rects = data.map((value, index) => {
    const x = (index / data.length) * 100;
    const height = (BARGRAPH_HEIGHT / maximum) * value;
    const y = BARGRAPH_HEIGHT - height;

    return `<rect x="${x}%" y="${y}" width="${width}%" height="${height}"/>`;
  });

  return `<svg>
  ${rects.join('\n\t')}
</svg>`;
}

export function makeCard(title = 'Unknown dataset', data, link = '#') {
  return `
  <section>
  <a href = ${link}>
  <div>
  <h2>${title}</h2>
  ${makeBarGraph(data)}
  </div>
  </a>
</section>
        `;
}

export function makeIndex(analyses) {
  return analyses
    .map((analysis) => {
      const link = newFilename(analysis.fileName.split('.')[0]);
      return makeCard(analysis.fileName, analysis.parsedData, link);
    })
    .join('\n');
}
/**
 * Takes HTML for a single blog entry and returns it with the site template.
 */
export function siteTemplate(title, site, showBack = false, subtitle = '') {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="../public/styles.css">
    </head>
    <body>
    <div class="wrapper">
    <header>
      <h1>${title ?? 'Óþekkt síða'}</h1>
      <h3>${subtitle}</h3>
    </header>
    <main>
    <div class ="content">
    ${site}
    </div>
    </main>
    </div>
    </body>
  </html>`;
}
