import axios from 'axios';
import { apiHost, apiKey } from '../constants/api';

export const getCharacters = async () => {
  try {
    const { data } = await axios.get(
      `${apiHost}/v1/public/characters?${apiKey}`
    );
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};
