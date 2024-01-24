import Data from "./getData.js";
import axios from "axios";
import fsp from 'fs/promises';
import buildPathToWrite from "./buildPath/buildPathToWrite.js";


const pageloader = async (url, dirname = process.cwd()) => {
    const dataReturn = new Data(axios);
    const data = await dataReturn.getHtml(url);
    await fsp.writeFile(buildPathToWrite(dirname, url), data)
};

export default pageloader;