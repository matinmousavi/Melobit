import { Link } from "react-router-dom";
import React from "react";
import "./NewSong.css";

export default function NewSong({src , subLink , musicName , singger}) {
  return (
    <>
        <div className="new-song-cart">
            <img src={src} alt="" />
            <div className="song-cart-description">
              <Link
                className="music-name"
                to={`/song/${subLink}/Tk5lWFE`}
              >
                {musicName}
              </Link>
              <Link className="singger" to="/artist/hamid-hiraad/ZDZaTzE">
                {singger}
              </Link>
            </div>
          </div>
    </>
  );
}