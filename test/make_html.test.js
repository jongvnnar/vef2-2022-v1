import { describe, expect, it } from '@jest/globals';
import { showAnalysis, showData, siteTemplate } from '../src/make_html';

describe('Show analysis', () => {
  it('Handles success case', () => {
    const analysis = {
      variance: 1,
      max: 2,
      mean: 3,
      median: 4,
      min: 5,
      stddev: 6,
      sum: 7,
      range: 8,
    };
    expect(showAnalysis({ analysis })).toEqual(
      `<section>
  <h2><span>Tölulegar upplýsingar</span></h2>
  <ul>
    <li><strong>Dreifni: </strong>1</li>
    <li><strong>Hágildi: </strong>2</li>
    <li><strong>Meðaltal: </strong>3</li>
    <li><strong>Miðgildi: </strong>4</li>
    <li><strong>Lággildi: </strong>5</li>
    <li><strong>Staðalfrávik: </strong>6</li>
    <li><strong>Summa: </strong>7</li>
    <li><strong>Talnasvið: </strong>8</li>
  </ul>
</section>`
    );
  });
  it('handles no input', () => {
    expect(showAnalysis({})).toBe(`<section>
  <h2><span>Tölulegar upplýsingar</span></h2>
  <ul>
    <li><strong>Dreifni: </strong>-</li>
    <li><strong>Hágildi: </strong>-</li>
    <li><strong>Meðaltal: </strong>-</li>
    <li><strong>Miðgildi: </strong>-</li>
    <li><strong>Lággildi: </strong>-</li>
    <li><strong>Staðalfrávik: </strong>-</li>
    <li><strong>Summa: </strong>-</li>
    <li><strong>Talnasvið: </strong>-</li>
  </ul>
</section>`);
  });
});

describe('Show data files', () => {
  it('handles success case', () => {
    const data = [12, 5, 4, 3];
    const title = 'Data';
    expect(showData({ title, data })).toEqual(`<section class=\"data_wrapper\">
  <h2>Data</h2>
  <p class = \"data\">12</br>5</br>4</br>3</p>
</section>`);
  });
  it('handles no data', () => {
    const data = [];
    const title = 'Data';
    expect(showData({ title, data })).toEqual(`<section class=\"data_wrapper\">
  <h2>Data</h2>
  <p class = \"data\">Engin gögn</p>
</section>`);
  });
});

describe('Site template', () => {
  describe('handles success case with no back button', () => {
    expect(siteTemplate('title', 'site', false, 'subtitle')).toEqual(`
  <!doctype html>
  <html>
    <head>
      <title>title</title>
      <link rel=\"stylesheet\" href=\"./styles.css\">
    </head>
    <body>
    <div class=\"wrapper\">
    <header>
      <h1>title</h1>
      <h3>subtitle</h3>

    </header>
    <main>
    site
    </main>
    </div>
    </body>
  </html>`);
  });
  it('handles success case with back button', () => {
    expect(siteTemplate('title', 'site', true, 'subtitle')).toEqual(`
  <!doctype html>
  <html>
    <head>
      <title>title</title>
      <link rel=\"stylesheet\" href=\"./styles.css\">
    </head>
    <body>
    <div class=\"wrapper\">
    <header>
      <h1>title</h1>
      <h3>subtitle</h3>
<p><a href="/">← Til baka</a></p>
    </header>
    <main>
    site
    </main>
    </div>
    </body>
  </html>`);
  });
  it('handles default case for back button', () => {
    expect(siteTemplate('title', 'site')).toEqual(`
  <!doctype html>
  <html>
    <head>
      <title>title</title>
      <link rel=\"stylesheet\" href=\"./styles.css\">
    </head>
    <body>
    <div class=\"wrapper\">
    <header>
      <h1>title</h1>
      <h3></h3>

    </header>
    <main>
    site
    </main>
    </div>
    </body>
  </html>`);
  });
});
