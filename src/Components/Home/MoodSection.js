import React from 'react'
import './MoodSection.css'
import { Link } from 'react-router-dom'
import { songStyle } from './../../Datas'

export default function MoodSection() {
  const moodSection = songStyle.filter(song => song.id < 5)
  return (
    <>
    {moodSection.map(mood=> {
      return (
      <Link key={mood.id} to='/mood' className='mood-section-link'  style={{background : `${mood.backGround}`}} >
        {mood.title}
    </Link>
      )
    })}
    </>
  )
}

// 'linear-gradient(to left, rgba(170, 7, 107, 0.5), rgba(97, 4, 95, 0.5)) , url(images/Mood/romantic.webp'