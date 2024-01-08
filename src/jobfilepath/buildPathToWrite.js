import getFilename from './getFilename.js';
import path from 'path';

const buildPathToWrite = (dirname, url) => {
    return dirname === process.cwd() 
                    ? path.join(dirname, getFilename(url)) 
                    : path.join(process.cwd(), dirname, getFilename(url));
};

export default buildPathToWrite;