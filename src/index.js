import getData from "./httpRequest/getData.js";
import getFilename from './jobfilepath/getFilename.js';
import writeData from './jobfilepath/writeData.js';
import path from 'path';

const pageloader = async (url, dirname = process.cwd()) => {
    const data = await getData(url);
    const pathToWrite = dirname === process.cwd() 
                    ? path.join(dirname, getFilename(url)) 
                    : path.join(process.cwd(), dirname, getFilename(url));
    await writeData(pathToWrite, data);
};

export default pageloader;