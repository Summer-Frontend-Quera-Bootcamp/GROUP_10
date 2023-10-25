import axios from "axios";

const API_URL = "https://quera.iran.liara.run/";

const login = async (userData) => {
  const response = await axios.post(API_URL + "accounts/login/", userData);
  if (response.data) {
    localStorage.setItem(
      "authToken",
      JSON.stringify({
        accessToken: response.data.data.accessToken,
        refreshToken: response.data.data.refreshToken,
      })
    );
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

const register = async (userData) => {
  const response = await axios.post(API_URL + "accounts/register/", userData);
  return response.data;
};

const forgetPass = async (email) => {
  const response = await axios.post(API_URL + "accounts/reset-password", email);
  return response.data;
};

const authService = {
  register,
  login,
  forgetPass,
};

export default authService;
