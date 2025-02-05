import { partnerApi, historyApi } from "./axiosInstance";

export const getPartner = async () => {
  try {
    const res = await partnerApi.get(`/getPartner`);
    return res.data;
  } catch (error) {
    console.error("Error fetching partner data:", error);
  }
};

export const getHistory = async () => {
  try {
    const res = await historyApi.get(`/getHistory`, {
      params: { type: 2 },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching history data:", error);
  }
};
