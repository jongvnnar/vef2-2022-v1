/**
 * parses numbers with icelandic separators to english numbers
 * @param {string} number written using icelandic separators
 * @returns {string} number written using english separators
 */
export function icelandicParser(number) {
  return number.replaceAll('.', '').replaceAll(',', '.');
}

/**
 * Parses data from data files.
 * @param {String} input data
 * @returns {Array<number>} array of valid numbers from data.
 */
export function parse(input) {
  // split input by line
  let content = input.split('\n');

  // parse Icelandic values
  content = content.map(icelandicParser);

  // Fancy map&filter using reduce.
  const retVal = content.reduce((arr, str) => {
    // ignore comments and empty lines
    if (str.trim().startsWith('#') || str.trim().length === 0) return arr;

    // parse number
    const num = Number(str);

    // if num is not NaN add it to array, which is returned at end.
    if (!Number.isNaN(num)) arr.push(num);

    return arr;
  }, []);
  return retVal;
}
