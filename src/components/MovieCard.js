import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie, openModal }) {
  return (
    <Card className="movie-card">
      {movie.poster_path && (
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ maxWidth: "100%", maxHeight: "250px" }}
        />
      )}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button variant="primary" onClick={() => openModal(movie)}>
          Sinopse
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
