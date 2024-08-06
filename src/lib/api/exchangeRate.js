import axios from 'axios';

const exchangeRate = axios.create({
  baseURL: 'http://apilayer.net/api/',
});

export const getRealTimeRate = async () => {
  const response = await exchangeRate.get('/live');
  return response;
};

export const getHistoricalRate = async () => {
  const response = await exchangeRate.get('');
  return response;
};
