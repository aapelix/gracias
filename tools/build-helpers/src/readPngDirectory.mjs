/* eslint-disable import/prefer-default-export */
import fs from "fs/promises";
import path from "path";

/**
 * reads the icon directory
 *
 * @param {string} directory
 * @param {string} fileExtension
 * @returns {array} An array of file paths containing svgs
 */
export const readPngDirectory = async (directory, fileExtension = ".png") => {
  const directoryContents = await fs.readdir(directory);

  return directoryContents.filter(
    (file) => path.extname(file) === fileExtension,
  );
};
