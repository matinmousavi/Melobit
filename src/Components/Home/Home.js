import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {
  songInformations,
  albumInformations,
  artistInformations,
  singgerPics,
  todayTrending,
  weekTrending , 
} from "./../../Datas";
import NewSong from "./NewSong";
import RecentAlbums from "./RecentAlbums";
import TrendingArtists from "./TrendingArtists";
import TodayTrending from "./TodayTrending";
import MoodSection from "./MoodSection";
import TopGenres from "./TopGenres";
import { Typography } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home() {
  return (
    <>
      <section className="main-image">
        <Swiper
          loop={true}
          className="mySwiper"
        >
          {singgerPics.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt="aron afshar" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="new-songs">
        <div className="new-songs-header">
          <Typography variant="h2" className="section-header-child">
            New songs
          </Typography>
          <Link className="view-more" to="/songs/new">
            <span>VIEW MORE</span>
            <IoIosArrowForward />
          </Link>
        </div>
        <div className="new-songs-content">
          {songInformations.map((song) => {
            return <NewSong key={song.id} {...song} />;
          })}
        </div>
      </section>
      <section>
        <Typography variant="h2" className="section-header-child">
          Recent albums
        </Typography>
        <div className="recent-albums-content">
          {albumInformations.map((album) => {
            return <RecentAlbums key={album.id} {...album} />;
          })}
        </div>
      </section>
      <section>
        <Typography variant="h2" className="section-header-child">
          Week trending artists
        </Typography>
        <div className="Week-trending-artists-content">
          {artistInformations.map((artist) => {
            return <TrendingArtists key={artist.id} {...artist} />;
          })}
        </div>
      </section>
      <section>
        <div className="new-songs-header">
        <Typography variant="h2" className="section-header-child">
          Today trending
        </Typography>
        <Link className="view-more" to="/songs/new">
            <span>VIEW MORE</span>
            <IoIosArrowForward />
          </Link>
        </div>
        <div className="Week-trending-artists-content">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        
        className="mySwiper"
      >
          {todayTrending.map((trending) => {
            return <SwiperSlide key={trending.id}><TodayTrending {...trending} /></SwiperSlide>;
          })}
          </Swiper>
        </div>
      </section>
      <section>
      <div className="new-songs-header">
        <Typography variant="h2" className="section-header-child">
        Week trending
        </Typography>
        <Link className="view-more" to="/songs/new">
            <span>VIEW MORE</span>
            <IoIosArrowForward />
          </Link>
      </div>
        <div className="Week-trending-artists-content">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        
        className="mySwiper"
      >
          {weekTrending.map((trending) => {
            return <SwiperSlide key={trending.id}><TodayTrending {...trending} /></SwiperSlide>;
          })}
          </Swiper>
        </div>
      </section>
      <section>
        <Typography variant="h2" className="section-header-child">
        What's your mood?
        </Typography>
        <div className="mood-content">
               <MoodSection />
        </div>
      </section>
      <section>
        <Typography variant="h2" className="section-header-child">
        Top genres
        </Typography>
        <div className="mood-content">
               <TopGenres />
        </div>
      </section>
    </>
  );
}
