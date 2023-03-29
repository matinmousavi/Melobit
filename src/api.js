import axios from "axios";

const GET_ALL_SINGGERPICS = "http://localhost:3000/singgerPics";
const GET_ALL_SONGINFORMATIONS = "http://localhost:3000/songInformations";
const GET_ALL_ALBUMINFORMATIONS = "http://localhost:3000/albumInformations";
const GET_ALL_ARTISTS = "http://localhost:3000/artistInformations";
const GET_ALL_TODAYTRENDING = "http://localhost:3000/todayTrending";
const GET_ALL_WEEKTRENDING = "http://localhost:3000/weekTrending";
const GET_ALL_SONGSTYLE = "http://localhost:3000/songStyle";

export const getAllSinggerPics = () => {
  return axios
    .get(GET_ALL_SINGGERPICS)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllSongInformations = () => {
  return axios
    .get(GET_ALL_SONGINFORMATIONS)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllAlbumInformations = () => {
  return axios
    .get(GET_ALL_ALBUMINFORMATIONS)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllArtists = () => {
  return axios
    .get(GET_ALL_ARTISTS)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllTodayTrending = () => {
  return axios
    .get(GET_ALL_TODAYTRENDING)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllWeekTrending = () => {
  return axios
    .get(GET_ALL_WEEKTRENDING)
    .then((response) => response.data)
    .catch((err) => err.message);
};
export const getAllSongStyle = () => {
  return axios
    .get(GET_ALL_SONGSTYLE)
    .then((response) => response.data)
    .catch((err) => err.message);
};
