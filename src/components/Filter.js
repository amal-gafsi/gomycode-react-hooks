import React, { useState } from "react";
import MovieList from "./MovieList";
import Rate from "./Rate";

export default function Filter({ movies }) {
  const [search, setSearch] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const filteredMovies =
    // search.length === 0
    //   ? movies
    movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()) &&
        movie.rating >= searchRate
    );

  return (
    <div
      style={{
        paddingTop: 70,
      }}
    >
      <input
        style={{ borderRadius: 7, width: 300, height: 40 }}
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          position: "absolute",
          color: "red",
          marginLeft: 570,
          marginTop: -90,
          fontSize: 30,
        }}
      >
        <Rate rating={searchRate} setSearchRate={setSearchRate} />
      </div>
      <div style={{ paddingTop: 50 }}>
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}
