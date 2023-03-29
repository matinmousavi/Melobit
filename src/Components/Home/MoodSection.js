import React from "react";
import "./MoodSection.css";
import { Link } from "react-router-dom";
import { useSongStyle } from "../../hooks";

export default function MoodSection() {
  const { data: songStyle } = useSongStyle();

  const moodSection = songStyle?.filter((song) => song.id < 5);
  return (
    <>
      {moodSection?.map((mood) => {
        return (
          <Link
            key={mood.id}
            to="/Melobit/mood"
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