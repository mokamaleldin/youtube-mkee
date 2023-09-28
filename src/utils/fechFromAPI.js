import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

//the error is here
//const axios = require('axios');

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}

//'64d19cc865msha135ab2ade42ebcp11e7ddjsn9a672d4c4449'