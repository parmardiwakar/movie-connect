import { Outlet } from "react-router-dom";

import configContext from "./context/config-context";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./AppLayout.module.css";
import { fetchData } from "./utils/tmdb-api-call";
import { useEffect, useState } from "react";

function App() {
  const abortController = new AbortController();
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    const { data } = fetchData("/configuration", abortController).then(res => {
      setBaseUrl(res?.images.base_url);
    })

    return () => {
      abortController.abort();
  };
  }, []);

    

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <configContext.Provider value={{baseUrl}}>
          <Outlet />
        </configContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
