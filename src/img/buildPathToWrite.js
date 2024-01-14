import path from 'node:path';
import buildDirName from './buildDirname.js';
import getFilename from './getFilename.js';

const buildPathToWrite = (dirname, url, src) => {
    return dirname === process.cwd()
                            ? path.join(process.cwd(), buildDirName(url), getFilename(src))
                            : path.join(process.cwd(), dirname, buildDirName(url), getFilename(src));
};


export default buildPathToWrite;