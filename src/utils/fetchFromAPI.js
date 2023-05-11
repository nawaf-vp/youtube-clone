import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 80,
  },
  headers: {
    'X-RapidAPI-Key':'d4c7ca26a2msh36f1566b505a969p1e1da8jsnf756a0cc02d9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}; 


