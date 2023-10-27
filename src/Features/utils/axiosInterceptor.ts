import axios from "axios";
import { authTokenUpdate, logOut } from "../AuthUserSlice/AuthSlice/AuthUserSlice";
import store from "../app/store";
import API from "./apiConfig";
import "./interceptorHandler";

let authToken = JSON.parse(localStorage.getItem("authToken") || "null");

API.interceptors.request.use(
  async (config) => {
    if (authToken?.access) {
      config.headers['Authorization'] = `Bearer ${authToken.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const origReq = error.config;
    if (error.response.status === 401 && origReq.url.endsWith("/refresh")) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !origReq._retry) {
      origReq._retry = true;
      try {
        const token = JSON.parse(localStorage.getItem("authToken") || "{}");
        const response = await axios.post("https://quera.iran.liara.run/accounts/refresh/", {
          refresh: token.refresh,
        });
        const { access: newAccessToken, refresh: currentRefreshToken } = response.data;
        authToken = { access: newAccessToken, refresh: currentRefreshToken };
        localStorage.setItem("authToken", JSON.stringify(authToken));
        store.dispatch(authTokenUpdate(authToken));
        API.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        return API(origReq);
      } catch (refreshError) {
        store.dispatch(logOut());
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
