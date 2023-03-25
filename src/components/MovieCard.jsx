import React, { useContext } from "react";
import configContext from "../context/config-context";

import classes from "./MovieCard.module.css";

const MovieCard = ({ data }) => {
  const context = useContext(configContext);

  const picPath = data.poster_path || data.profile_path || "/";

  const imageSrc = `${context.baseUrl}original${picPath}`;

  return (
    <div>
      <img style={{width:"200px", height:"200px"}} src={imageSrc} />
      <p>{data.media_type}</p>
      <p>{data.title || data.name}</p>
      <p>{data.release_date}</p>
    </div>
  );
};

export default MovieCard;
