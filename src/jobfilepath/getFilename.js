const getFilename = (url) => {
    const siteName = url.replace(/(^\w+:|^)\/\//, '');
    const result = siteName.split('')
                        .map((el) => /[^a-z^0-9]/.test(el) ? '-' : el)
                        .join('')
                        .concat('.html');     
    return result;
};

export default getFilename;