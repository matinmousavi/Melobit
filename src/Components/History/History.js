import React from 'react'
import './History.css'
import {Link} from 'react-router-dom'
import {BsFillPlayFill , BsFillShareFill} from 'react-icons/bs'
import {GrFavorite} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'
import {FiMoreHorizontal} from 'react-icons/fi'
import { useSongStyle } from '../../hooks'

export default function History() {
  const {data: weekTrending} = useSongStyle()

  return (
    <>
    {weekTrending?.map(song =>{
      return(
        <div key={song.id} className='history-parent'>
          <section  className='history-content'>
        <div className='music-info'>
          <div className="music-cover">
            <img src={song.src} alt="" />
          </div>
          <div className="music-description mt-2">
            <Link to='/song/masoud-sadeghloo/seil/a1pwUk8' className='nmusic-name'>{song.musicName}</Link>  
            <Link to='/artist/masoud-sadeghloo/S2xPWA' className='music-singger'>{song.singger}</Link>
            <p>{song.playCount} Plays</p>          
          </div>
        </div>
        <div className='music-icons'>
          <BsFillPlayFill />
          <GrFavorite />
          <BsFillShareFill />
          <MdDelete />
          <FiMoreHorizontal />
          <span>{song.time}</span>
        </div>
      </section>
        </div>
        )
      })}
    </>
  )
}
