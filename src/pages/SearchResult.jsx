import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import { fetchData } from "../utils/tmdb-api-call";
import classes from "./SearchResult.module.css";

const SearchResult = () => {
  const { query } = useParams();

  const [fetchedQueryData, setFetchedQueryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `/search/multi?query=${query}&page=1&include_adult=false`;

    const fetchMulti = () => {
      fetchData(url).then((res) => {
        setIsLoading(false);
        setFetchedQueryData(res);
      });
    };

    fetchMulti();
  }, []);

  return (
    <ul>
      {!isLoading &&
        fetchedQueryData?.results.map((result) => (
          <MovieCard key={result.id} data={result} />
        ))}
    </ul>
  );
};

export default SearchResult;
