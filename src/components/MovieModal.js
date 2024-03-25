import React from "react";
import { Modal } from "react-bootstrap";

function MovieModal({ show, handleClose, movie, poster }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie ? movie.title : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movie ? (
          <div>
            <img
              src={poster}
              alt={movie.title}
              style={{ maxWidth: "100%" }}
            />
            <p>{movie.overview}</p>
            <p>Avaliação: {movie.vote_average}</p>
            <p>Data de lançamento: {movie.release_date}</p>
            {/* mais info */}
          </div>
        ) : (
          "Carregando..."
        )}
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
