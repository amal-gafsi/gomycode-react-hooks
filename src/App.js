import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./MoviesData";
import Filter from "./components/Filter";
import Add from "./components/Add";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../src/components/MovieDetails";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const addNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Add addNewMovie={addNewMovie} />
          <Filter movies={movies} />
        </Route>
        <Route
          exact
          path="/movies/:name"
          render={(props) => <MovieDetails {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default App;
