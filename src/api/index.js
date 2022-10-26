import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/',
});

export const fetchOrgChartData = async () => {
  try {
    const { data } = await instance.get('/orgchart/data', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    return data;
  } catch (e) {
    return [];
  }
};
