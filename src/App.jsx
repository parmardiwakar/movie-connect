import { useEffect } from "react";

import { fetchData } from "./utils/tmdb-api-call";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import SearchResult from "./pages/SearchResult";

import "./App.module.css";

function App() {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="App">App</div>;
}

export default App;
