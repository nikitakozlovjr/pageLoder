import axios from "axios";

const getData = async (url) => {
    const { data } = await axios.get(url, {
        responseType: "stream", 
    });
    return data;
};

export default getData;