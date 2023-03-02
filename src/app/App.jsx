import React, { useCallback, useEffect, useState } from "react";
import { AddMovie } from "../components/AddMovie";
import { MovieList } from "../components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //사용자가 페이지를 방문하자마자 데이터를 가져오는 것이 아니고
  //버튼을 누르는 것에 맞춰 데이터를 fetch해오는 방식 ➡️ useEffect

  //-------------------------------------------------------------
  const handlerFetchMovie = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // firebase
      const response = await fetch(
        "https://react-http-e9efe-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const data = await response.json();

      //loadedMovies에 전달받은 데이터의 키와 값들의 조합에 대해 새로운 객체를 푸쉬
      //response로 받은 중첩 객체를 타고 들어가게 됩니다.
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  //이 상수가 전체 코드를 파싱한 후 실행되어야 하므로
  //useEffect 호출을 이 함수 정의 구문의 뒤로 옮겨야 합니다.
  useEffect(() => {
    handlerFetchMovie();
    // 함수가 외부 상태를 사용한다면 의도치 않은 버그가 발생위험 ➡️ useCallback 훅을 사용
  }, [handlerFetchMovie]);

  //------------------------------------------------------
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-e9efe-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  //-------------------------------------------------------

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

  //----------------------------------------------------------

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={handlerFetchMovie}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
