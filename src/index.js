import getData from "./httpRequest/getData.js";
import createFileWithData from './jobfilepath/index.js';

const pageloader = async (url, dirname = process.cwd()) => {
    const data = await getData(url);
    await createFileWithData(dirname, url, data)
};

export default pageloader;