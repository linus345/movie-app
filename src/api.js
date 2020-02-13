import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const imageBase = "https://image.tmdb.org/t/p";

export const getPopular = () => {
  return instance.get("/popular");
}

export const getTop = () => {
  return instance.get("/top");
}

export const getComing = () => {
  return instance.get("/coming");
}
