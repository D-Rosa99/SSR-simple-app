import axios from "axios";
//https://react-ssr-api.herokuapp.com
export const request = async (url, method) => await axios[method](url);
