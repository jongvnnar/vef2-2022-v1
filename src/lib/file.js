import { stat } from 'fs/promises';

/**
 * Check whether directory exists
 * @param {*} dir Directory to check
 * @returns {Promise<Boolean>}Boolean promise indicating if directory exists
 */
export async function dirExists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}
