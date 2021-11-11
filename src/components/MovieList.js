import { Grid } from "@mui/material";
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
      {movies.map((movie) => (
        <div style={{ marginRight: 20 }}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
