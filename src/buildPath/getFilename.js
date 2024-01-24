const getFilename = (url) => {
    const siteName = url.replace(/(^\w+:|^)\/\//, '');
    const filename = siteName.split('')
                        .map((el) => /[^a-z^0-9]/.test(el) ? '-' : el)
                        .join('')
                        .concat('.html');     
    return filename;
};

export default getFilename;