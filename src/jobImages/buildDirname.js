const buildDirname = (url) => {
    const siteName = url.replace(/(^\w+:|^)\/\//, '');
    const dirname = siteName.split('')
                        .map((el) => /[^a-z^0-9]/.test(el) ? '-' : el)
                        .join('')
                        .concat('_files');     
    return dirname;
};

export default buildDirname;