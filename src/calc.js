/**
 * Calculate the max of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the max of the dataset
 */
export function max(data) {
  if (data.length === 0) return Number.NaN;
  return Math.max(...data);
}
/**
 * Calculate the min of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the min of the dataset
 */
export function min(data) {
  if (data.length === 0) return Number.NaN;
  return Math.min(...data);
}
/**
 * Calculate the range of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the range of the dataset
 */
export function range(data) {
  return max(data) - min(data);
}
/**
 * Calculate the sum of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the sum of the dataset
 */
export function sum(data) {
  if (data.length === 0) return Number.NaN;
  return data.reduce((total, currentValue) => total + currentValue, 0);
}
/**
 * Calculate the mean of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the mean of the dataset
 */
export function mean(data) {
  return sum(data) / data.length;
}
/**
 * Calculate the median of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the median of the dataset
 */
export function median(data) {
  const sortedData = [...data];
  sortedData.sort((a, b) => a - b);
  return data.length % 2 === 1
    ? sortedData[Math.floor(data.length / 2)]
    : (sortedData[Math.floor((data.length - 1) / 2)] +
        sortedData[Math.floor((data.length + 1) / 2)]) /
        2;
}

/**
 * Calculate the variance of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the variance of the dataset
 */
export function variance(data) {
  const avg = mean(data);
  const retVal = data.reduce(
    (total, currentValue) => total + (currentValue - avg) ** 2,
    0
  );
  return retVal / data.length;
}
/**
 * Calculate the stddev of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the stddev of the dataset
 */
export function stddev(data) {
  return Math.sqrt(variance(data));
}

/**
 * Calculate numerical analysis of a dataset
 * @param {Array<number>} data numerical data
 * @returns {object} An object containing the following analysis
 * * variance
 * * max
 * * mean
 * * median
 * * minimum
 * * standard deviation
 * * sum
 * * range
 */
export function calculateAnalysis(data) {
  return {
    variance: Number.isNaN(variance(data)) ? undefined : variance(data),
    max: Number.isNaN(max(data)) ? undefined : max(data),
    mean: Number.isNaN(mean(data)) ? undefined : mean(data),
    median: Number.isNaN(median(data)) ? undefined : median(data),
    min: Number.isNaN(min(data)) ? undefined : min(data),
    stddev: Number.isNaN(stddev(data)) ? undefined : stddev(data),
    sum: Number.isNaN(sum(data)) ? undefined : sum(data),
    range: Number.isNaN(range(data)) ? undefined : range(data),
  };
}
