import fsp from 'node:fs/promises';

const writeFile = async (filepath, data) => await fsp.writeFile(filepath, data);

export default writeFile;