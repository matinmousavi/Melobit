import React from 'react'
import './TodayTrending.css'
import { Link } from 'react-router-dom'


export default function TodayTrending({src , subLink , playCount , singger , musicName}) {
  return (
    <>
        <div className="today-trending-cart">
        <img src={src} alt="" />
        <div className="today-trending-description">
          <Link className="music-name" to={`/song/${subLink}/Tk5lWFE`}>
            {musicName}
          </Link> <br />
          <Link className="singger-name" to={`/song/${subLink}/Tk5lWFE`}>
            {singger}
          </Link> <br />
          <Link className="play-count" to={`/song/${subLink}/Tk5lWFE`}>
            {playCount} Plays
          </Link>
        </div>
      </div>
    </>
  )
}
