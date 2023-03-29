import { useQuery } from "react-query";
import {
  getAllAlbumInformations,
  getAllArtists,
  getAllSinggerPics,
  getAllSongInformations,
  getAllSongStyle,
  getAllTodayTrending,
  getAllWeekTrending,
} from "./api";

export const useSinggerPics = () => {
  return useQuery("pics", getAllSinggerPics);
};
export const useSongInformations = () => {
  return useQuery("song-info", getAllSongInformations);
};
export const useAlbumInformations = () => {
  return useQuery("album-info", getAllAlbumInformations);
};
export const useArtists = () => {
  return useQuery("artist", getAllArtists);
};
export const useTodayTrending = () => {
  return useQuery("today-trending", getAllTodayTrending);
};
export const useWeekTrending = () => {
  return useQuery("week-trending", getAllWeekTrending);
};
export const useSongStyle = () => {
  return useQuery("song-style", getAllSongStyle);
};
