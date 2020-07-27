import axios from 'axios';
import { apiHost, apiKey } from '../constants/api';

// const host = 'https://gateway.marvel.com:443';
// const apiKey = 'apikey=7dfbc6c94360911be200a49f57c70466';

export const getCharacters = async () => {
  try {
    const { data } = await axios.get(
      `${apiHost}/v1/public/characters?${apiKey}`
    );
    console.log('data', data);
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};

// export const getChatacterById = async () => {
//   try {
//     const { data } = await axios.
//   }
// }
