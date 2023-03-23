import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { fetchData } from "./utils/tmdb-api-call";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";

import "./AppLayout.module.css";


function App() {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    fetchData("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <>
    <Header />
    <div className="App">App</div>
    <Outlet />
    <Footer />
  </>
}

export default App;
