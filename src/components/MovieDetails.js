import React from "react";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function MovieDetails({ match, movies }) {
  let history = useHistory();

  let movie = movies.find((el) => el.title === match.params.name);
  return (
    <div style={{ marginTop: "3%" }}>
      <Button
        variant="primary"
        onClick={() => history.goBack()}
        style={{ marginRight: "80%" }}
      >
        Go Back
      </Button>
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
