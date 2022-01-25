/**
 * Calculate the variance of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the variance of the dataset
 */
export function variance(data) {
  const avg = mean(data);
  const variance = data.reduce(
    (total, currentValue) => total + Math.pow(currentValue - avg, 2),
    0
  );
  return variance / data.length;
}
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
  sortedData.sort();
  return data.length % 2 === 1
    ? sortedData[Math.floor(data.length / 2)]
    : (sortedData[Math.floor((data.length - 1) / 2)] +
        sortedData[Math.floor((data.length + 1) / 2)]) /
        2;
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
 * Calculate the stddev of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the stddev of the dataset
 */
export function stddev(data) {
  return Math.sqrt(variance(data));
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
 * Calculate the range of a dataset
 * @param {Array<number>} data numerical data
 * @returns {number} the range of the dataset
 */
export function range(data) {
  return max(data) - min(data);
}
