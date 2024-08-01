import axios from 'axios';
import YAML from 'yaml';

export const fetchYml = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = YAML.parse(response.data);
    return data;
  } catch (error) {
    console.error('Error fetching YML file:', error);
    throw error;
  }
};
