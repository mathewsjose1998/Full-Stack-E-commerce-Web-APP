import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-39a29/us-central1/api",
});

export default instance;
