import React, { useState } from "react";
import { MovieList } from "../components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handlerFetchMovie() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/film/");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  }

  return (
    <>
      <section>
        <button onClick={handlerFetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
