import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { moviesData } from "./MoviesData";
import Filter from "./components/Filter";
import Add from "./components/Add";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const addNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div style={{ backgroundColor: "black" }} className="App">
      <Add addNewMovie={addNewMovie} />
      <Filter movies={movies} />
    </div>
  );
}

export default App;
