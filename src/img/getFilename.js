import path from 'node:path';

const getFilename = (src) => {
    const extname = path.extname(src);
    const filename = src.slice(0, src.length - extname.length).split('')
                        .map((el) => /[^a-z^0-9]/.test(el) ? '-' : el)
                        .join('')
                        .slice(1)
                        .concat(extname); 
    return filename;
};


export default getFilename;