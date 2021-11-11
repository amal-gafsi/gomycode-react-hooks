import React from "react";
import { Card, Button } from "react-bootstrap";
import Rate from "./Rate";

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
      </Card.Header>
      <Card.Img
        style={{ height: 400, borderRadius: 40 }}
        variant="top"
        src={movie.posterURL}
      />
      <Card.Body style={{ color: "white", height: 220 }}>
        <Card.Title style={{ fontWeight: "bold", fontStyle: "italic" }}>
          {movie.title}
        </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
