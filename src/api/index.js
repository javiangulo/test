import axios from "axios";
const token =
  "Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: token }
});
