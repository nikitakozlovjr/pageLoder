import getData from "./html/getData.js";
import createFileWithData from './html/index.js';

const pageloader = async (url, dirname = process.cwd()) => {
    const data = await getData(url);
    await createFileWithData(dirname, url, data)
};

export default pageloader;