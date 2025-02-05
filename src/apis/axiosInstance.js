import axios from "axios";

class AxiosInstance {
  baseUrl;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  instance(endPoint) {
    return axios.create({
      baseURL: this.baseUrl + endPoint,
    });
  }
}

const httpClient = new AxiosInstance(import.meta.env.VITE_BASE_URL || "");
// const httpClient = new AxiosInstance("/mock");

export const partnerApi = httpClient.instance("/partner");
export const historyApi = httpClient.instance("/history");
