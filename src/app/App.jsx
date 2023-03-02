import React, { useState } from "react";
import { MovieList } from "../components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlerFetchMovie() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/film/");

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  //-------------------------------------------

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  //-------------------------------------------

  return (
    <>
      <section>
        <button onClick={handlerFetchMovie}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
