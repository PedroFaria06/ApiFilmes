import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      {movie.poster_path && (
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100px", height: "150px" }}
        />
      )}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
