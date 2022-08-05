import React from 'react'
import './TrendingArtists.css'
import { Link } from 'react-router-dom'

export default function TrendingArtists({src , singger , subLink}) {
  return (
    <>
        <div className="trending-artist-cart">
        <img src={src} alt="" />
        <div className="trending-artist-cart-description">
          <Link className="singger-name" to={`/song/${subLink}/Tk5lWFE`}>
            {singger}
          </Link>
        </div>
      </div>
    </>
  )
}
