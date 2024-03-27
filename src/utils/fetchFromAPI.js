import axios from 'axios'

//const axios = require('axios');

const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  url: BASE_URL ,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '722485400fmsh16b92fefea8b363p104d38jsn620e8ee33316',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}