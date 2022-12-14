import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/',
});

instance.defaults.withCredentials = true;

export const fetchOrgChartData = async () => {
  try {
    const { data } = await instance.get('/orgchart/data', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      auth: {
        username: process.env.REACT_APP_LOGIN,
        password: process.env.REACT_APP_PASSWORD,
      },
    });

    return data;
  } catch (e) {
    return [];
  }
};
