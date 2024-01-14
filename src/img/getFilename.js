import path from 'node:path';

const getFilename = (src, url = '') => {
    const extname = path.extname(src);
    const firstPathFilename = src.slice(0, src.length - extname.length).split('')
                        .map((el) => /[^a-z^0-9]/.test(el) ? '-' : el)
                        .join('')
                        .concat(extname); 
    return {extname, firstPathFilename};
};

console.log(getFilename('/assets/professions/nodejs.png'))

export default getFilename;