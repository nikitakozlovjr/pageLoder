import * as cheerio from 'cheerio';

const getImgLinks = (html) => {
    const pictures = html.match(/<img.*\/>/g);
    return pictures.map((img) => {
        const $ = cheerio.load(img);
        return $('img').attr('src');
    })
};

export default getImgLinks;