import axios from "axios";

const baseURL = "https://quera.iran.liara.run/";

const API = axios.create({ baseURL });

export default API;
