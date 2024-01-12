import axios from 'axios';

const getData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

export default getData;