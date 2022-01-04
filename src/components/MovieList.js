import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "black",
      }}
    >
      {movies.map((movie, i) => (
        <div style={{ marginRight: 20 }} key={i}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
