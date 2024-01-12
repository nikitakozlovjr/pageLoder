import buildPathToWrite from "./buildPathToWrite.js";
import writeData from './writeData.js'

const createFileWithData = async (dirname, url, data) => {
    const pathToWrite = buildPathToWrite(dirname, url);
    await writeData(pathToWrite, data);
    console.log(pathToWrite);
};

export default createFileWithData;