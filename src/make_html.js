export function makeIndex() {
  return `<!doctype html>
  <html>
    <head>
      <title>This is the title of the webpage!</title>
    </head>
    <body>
      <p>This is an example paragraph. Anything in the <strong>body</strong> tag will appear on the page, just like this <strong>p</strong> tag and its contents.</p>
    </body>
  </html>`;
}

export function makeCard() {
  return `
        <section>
          <h3>Forritara frambjóðandi</h3>
          <div class="image">
            <img src="images/madur.jpg" alt="">
          </div>
          <p>Frambjóðandi í forritaraflokknum ræðir vefforritun og hvernig forritun getur bjargað málunum.</p>
          <time datetime="2021-09-13T15:00">13.09.2021 — 15:00</time>
        </section>
        `;
}

/**
 * Takes HTML for a single blog entry and returns it with the site template.
 */
export function siteTemplate(title, site, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="navbar">Titill</div>
      ${site ?? ''}
      ${back}
    </body>
  </html>`;
}
