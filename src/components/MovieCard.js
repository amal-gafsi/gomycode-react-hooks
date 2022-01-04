import React from "react";
import { Card } from "react-bootstrap";
import Rate from "./Rate";
import { Link } from "react-router-dom";

//see router sleem's work, you can pass the whole movie in a state and wall it with location

export default function MovieCard({ movie }) {
  return (
    <Card
      style={{
        width: 300,
        marginBottom: 30,
        backgroundColor: "#191e4d",
        borderRadius: 20,
      }}
    >
      <Card.Header style={{ color: "yellow", fontSize: 25 }}>
        <Rate rating={movie.rating} />
        <Card.Title style={{ fontWeight: "bold", fontStyle: "italic" }}>
          {movie.title}
        </Card.Title>
      </Card.Header>
      <Card.Img
        style={{ height: 400, borderRadius: 40 }}
        variant="top"
        src={movie.posterURL}
      />
      <Card.Body style={{ color: "white", height: 80 }}>
        <Link
          to={`/movies/${movie.title}`}
          style={{
            width: 200,
            borderRadius: 40,
            borderWidth: "1",
            borderColor: "white",
          }}
          variant="danger"
        >
          Show Details
        </Link>
      </Card.Body>
    </Card>
  );
}
