import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const url = 'www.googleapis.com/youtube/v3/'

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '633b7e51efmsh2c82c299d1c1491p14b82ejsne2e5a243eacd',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
