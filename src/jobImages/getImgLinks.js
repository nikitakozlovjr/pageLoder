const getImgLinks = (html) => {
    const img = html.match(/<img.*\/>/g);
    return img;
}

export default getImgLinks;