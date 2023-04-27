import React from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import requests from "../../request";
import "./home.scss";
import { useRef, useState, useEffect } from "react";
import axios from "../../axios";

const Home = ({ username }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  const filter = (filter) => {
    const filterList = [];
    movies.map((movie) =>
      movie?.genre_ids?.map((genre) => {
        if (genre === filter) {
          filterList.push(movie);
        }
      })
    );
    return filterList;
  };

  return (
    <div className="home">
      <Navbar username={username} />
      <Featured fetchUrl={requests.fetchTrending} />
      <List title="NETFLIX ORIGINALS" movies={movies} />
      <List title="Drama" movies={filter(18)} />
      <List title="Crime" movies={filter(80)} />
      <List title="Animation" movies={filter(16)} />
    </div>
  );
};

export default Home;
