import React from "react";
import { Link } from 'react-router-dom';
import './RecentAlbums.css'

export default function RecentAlbums({src , albumName , subLink }) {
  return (
    <>
      <div className="recent-album-cart">
        <img src={src} alt="" />
        <div className="album-cart-description">
          <Link className="music-name" to={`/song/${subLink}/Tk5lWFE`}>
            {albumName}
          </Link>
        </div>
      </div>
    </>
  );
}
