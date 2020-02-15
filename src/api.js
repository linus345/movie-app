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

export const getMovie = (movieId) => {
  return instance.get(`/movie/${movieId}`);
}

export const getGenres = () => {
  return instance.get("/genre/movie/list");
}

export const getMoviesByGenreId = (genreId) => {
  return instance.get(`/genre/${genreId}`);
}
