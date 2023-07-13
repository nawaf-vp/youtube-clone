import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
let ordering = ["date","relevance","rating","title","viewCount"];
let index = Math.floor(Math.random() * ordering.length);

const options = {
  params: {
    maxResults: 40,
    regionCode: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async(url,channel)=>{
  options.params.order = !channel?ordering[index] : "date";
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);


/* export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
 */
  return data;
}; 


