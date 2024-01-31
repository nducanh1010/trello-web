import { API_ROOT } from "@/utils/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-type": "application/json",
  },
});
apiClient.interceptors.response.use(
  function (response) {
    console.log("res", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default apiClient;
