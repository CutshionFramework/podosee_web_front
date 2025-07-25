import { partnerApi, historyApi, newsApi } from './axiosInstance';

export const getPartner = async () => {
  try {
    const res = await partnerApi.get(`/`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error('Error fetching partner data:', error);
  }
};

export const getHistory = async () => {
  try {
    const res = await historyApi.get(`/`);
    return res.data;
  } catch (error) {
    console.error('Error fetching history data:', error);
  }
};

export const getNews = async () => {
  try {
    const res = await newsApi.get(`/`);
    return res.data;
  } catch (error) {
    console.error('Error fetching partner data:', error);
  }
};
