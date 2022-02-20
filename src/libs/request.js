import axios from "axios";

export default async (url, method) => await axios[method](url);
