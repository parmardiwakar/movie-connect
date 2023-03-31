import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import { fetchData } from "../utils/tmdb-api-call";
import classes from "./SearchResult.module.css";

const SearchResult = () => {
  const { query } = useParams();

  const abortController = new AbortController();

  const [fetchedQueryData, setFetchedQueryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const url = `/search/multi?query=${query}&page=${pageNum}&include_adult=false`;

    const fetchResults = () => {
      if (hasMore) {
        fetchData(url, abortController).then((res) => {
          setIsLoading(false);
          setHasMore(res.page !== res.total_pages);
          setFetchedQueryData([...fetchedQueryData, ...res.results]);
        });
      }
    };
    fetchResults();

    return () => {
      abortController.abort();
    };
  }, [pageNum]);

  const loadMoreData = () => {
    if (hasMore) {
      setPageNum((prev) => prev + 1);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div>
        {!isLoading &&
          fetchedQueryData.map((result) => (
            <MovieCard key={result.id} data={result} />
          ))}
      </div>
      {hasMore && <button onClick={loadMoreData}>Load More</button>}
      {!hasMore && <p style={{ color: "red" }}>Search Complete!</p>}
    </main>
  );
};

export default SearchResult;
