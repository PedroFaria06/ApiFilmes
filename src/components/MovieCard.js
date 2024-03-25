import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie, openModal }) {
  const cardStyle = {
    backgroundColor: "red", 
    color: "white", 
    border: "none",
    cursor: "pointer", 
    height: "350px", 
    marginBottom: "10px", 
  };

  return (
    <Card className="movie-card" style={cardStyle} onClick={() => openModal(movie)}>
      {movie.poster_path && (
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ maxWidth: "100%", maxHeight: "200px" }}
        />
      )}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
