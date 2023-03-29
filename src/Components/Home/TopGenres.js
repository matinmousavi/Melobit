import React from "react";
import "./TopGenres.css";
import { Link } from "react-router-dom";
import { useSongStyle } from "../../hooks";

export default function TopGenres() {
  const { data: songStyle } = useSongStyle();

  const moodSection = songStyle?.filter((song) => song.id > 4);
  return (
    <>
      {moodSection?.map((mood) => {
        return (
          <Link
            key={mood.id}
            to="/mood"
            className="top-genres-link"
            style={{ background: `${mood.backGround}` }}
          >
            {mood.title}
          </Link>
        );
      })}
    </>
  );
}
