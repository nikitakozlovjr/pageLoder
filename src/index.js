import getData from "./httpRequest/getData.js";
import getFilename from './jobfilepath/getFilename.js';
import writeData from './jobfilepath/writeData.js';
import path from 'path';

const pageloader = async (url, dirname = process.cwd()) => {
    console.log(dirname);
    const data = await getData(url);
    const pathToWrite = path.join(dirname, getFilename(url));
    console.log(pathToWrite);
    return await writeData(pathToWrite, data);
};

export default pageloader;