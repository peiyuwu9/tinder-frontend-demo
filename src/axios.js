import axios from "axios";

const instance = axios.create({
  baseURL: "https://peiyu-tinder-backend.herokuapp.com/",
});

export default instance;
