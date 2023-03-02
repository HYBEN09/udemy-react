import React, { useState } from "react";
import { MovieList } from "../components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function handlerFetchMovie() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("실패:", error);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={handlerFetchMovie}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
