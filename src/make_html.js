import { max } from './calc.js';
import { newFilename } from './lib/utils.js';

const BARGRAPH_HEIGHT = 150;
/**
 * Creates very simple bargraph ignoring negative values
 * I allow for negative values to be ignored since these graphs weren't really supposed to be in the
 * project anyways
 * @param {Array<number>} data
 * @returns svg containing a bargraph
 */
export function makeBarGraph(data) {
  if (data.length === 0 || !data) {
    return '<svg></svg>';
  }
  const width = (1 / data.length) * 100;
  const maximum = max(data);
  const rects = data.map((value, index) => {
    if (value < 0) return '';
    const x = (index / data.length) * 100;
    const height = (BARGRAPH_HEIGHT / maximum) * value;
    const y = BARGRAPH_HEIGHT - height;

    return `<rect x="${x}%" y="${y || 0}" width="${width}%" height="${
      height || 0
    }"/>`;
  });

  return `<svg>
  ${rects.join('\n\t')}
</svg>`;
}

export function makeCard(title, data, link = '#') {
  return `
  <section class="card">
  <a href = ${link}>
  <div>
  <h2>${title || 'Unknown dataset'}</h2>
  ${makeBarGraph(data)}
  </div>
  </a>
</section>
        `;
}

export function makeIndex(analyses) {
  return `<div class = "content">
  ${analyses
    .map((analysis) => {
      const link = newFilename(analysis.fileName.split('.')[0]);
      return makeCard(analysis.fileName, analysis.parsedData, link);
    })
    .join('\n')}
    </div>`;
}

export function showAnalysis({ analysis }) {
  return `<section>
  <h2><span>Tölulegar upplýsingar</span></h2>
  <ul>
    <li><strong>Dreifni: </strong>${analysis?.variance ?? '-'}</li>
    <li><strong>Hágildi: </strong>${analysis?.max ?? '-'}</li>
    <li><strong>Meðaltal: </strong>${analysis?.mean ?? '-'}</li>
    <li><strong>Miðgildi: </strong>${analysis?.median ?? '-'}</li>
    <li><strong>Lággildi: </strong>${analysis?.min ?? '-'}</li>
    <li><strong>Staðalfrávik: </strong>${analysis?.stddev ?? '-'}</li>
    <li><strong>Summa: </strong>${analysis?.sum ?? '-'}</li>
    <li><strong>Talnasvið: </strong>${analysis?.range ?? '-'}</li>
  </ul>
</section>`;
}

export function showData({ title, data }) {
  return `<section class="data_wrapper">
  <h2>${title}</h2>
  <p class = "data">${data.length ? data.join('</br>') : 'Engin gögn'}</p>
</section>`;
}

export function makeAnalysisPage({ analysis, parsedData, originalData }) {
  return `
  <div class="analysis_content">
  <div class="analysis_wrapper">
    ${showAnalysis({ analysis })}
  </div>
    ${showData({ title: 'Upprunaleg gögn', data: originalData })}
    ${showData({ title: 'Þáttuð gögn', data: parsedData })}
  </div>`;
}
/**
 * Takes HTML for a single site and returns it with the site template.
 */
export function siteTemplate(title, site, showBack = false, subtitle = '') {
  const back = showBack ? '<p><a href="/">← Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? 'Óþekkt síða'}</title>
      <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
    <div class="wrapper">
    <header>
      <h1>${title ?? 'Óþekkt síða'}</h1>
      <h3>${subtitle}</h3>
${back}
    </header>
    <main>
    ${site ?? ''}
    </main>
    </div>
    </body>
  </html>`;
}
