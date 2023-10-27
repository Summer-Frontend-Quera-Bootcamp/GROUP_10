import axios from "axios";
import { FieldValues } from "../../../Pages/AuthenticationPages/RegisterPage/RegisterPage";

const API_URL = "https://quera.iran.liara.run/";
const login = async (userData: FieldValues) => {
  const response = await axios.post(API_URL + "accounts/login/", userData);

  if (response.data) {
    localStorage.setItem(
      "authToken",
      JSON.stringify({
        access: response.data.access,
        refresh: response.data.refresh,
      })
    );
    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );
  }
  return response.data;
};
const register = async (userData: FieldValues) => {
    const response = await axios.post(API_URL + "accounts/", userData);
    return response.data;
  };
  
const forgot = async (userEmail: FieldValues) => {
  const response = await axios.post(API_URL + "accounts/reset-password/", userEmail);

  return response.data;
};


const authMethods = {
  register,
  login,
  forgot,
};

export default authMethods;
