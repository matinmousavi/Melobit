import React from "react";
import "./MoodSection.css";
import { Link } from "react-router-dom";
import { songStyle } from "../../Data";

export default function MoodSection() {
  const moodSection = songStyle.filter((song) => song.id < 5);
  return (
    <>
      {moodSection.map((mood) => {
        return (
          <Link
            key={mood.id}
            to="/melobit/mood"
            className="mood-section-link"
            style={{ background: `${mood.backGround}` }}
          >
            {mood.title}
          </Link>
        );
      })}
    </>
  );
}
