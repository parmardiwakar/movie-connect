import React from "react";

import classes from "./MovieCard.module.css";

const MovieCard = ({ data }) => {
  return (
    <div>
      <p>{data.title || data.name}</p>
      <p>{data.release_date}</p>
    </div>
  );
};

export default MovieCard;
