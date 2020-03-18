import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const imageBase = "https://image.tmdb.org/t/p";

export const discoverMovies = (by, query = null) => {
  let params = {};
  if(query) {
    params.page = query.get("page") || "1";
  }
  return instance.get(`/${by}`, { params });
}

export const getMovie = (movieId) => {
  return instance.get(`/movie/${movieId}`);
}

export const getGenres = () => {
  return instance.get("/genre/movie/list");
}

export const getMoviesByGenreId = (genreId, query = null) => {
  let params = {};
  if(query) {
    params.page = query.get("page") || "1";
  }
  return instance.get(`/genre/${genreId}`, { params });
}
