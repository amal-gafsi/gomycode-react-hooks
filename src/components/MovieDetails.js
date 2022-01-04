import React from "react";
import ReactPlayer from "react-player";

export default function movieDetails({ match, movies }) {
  let movie = movies.find((el) => el.title === match.params.name);
  return (
    <div style={{ marginTop: "3%" }}>
      <h1 style={{ color: "red", textDecoration: "underline" }}>
        {movie.title}
      </h1>
      <p
        style={{
          color: "white",
          paddingLeft: "15%",
          paddingRight: "15%",
          margin: "5%",
          fontSize: 18,
        }}
      >
        {movie.description}
      </p>
      <ReactPlayer style={{ marginLeft: "25%" }} url={movie.trailerURL} />
    </div>
  );
}
