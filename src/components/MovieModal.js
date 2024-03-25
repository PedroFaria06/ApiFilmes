import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { useMovieContext } from "../modules/MovieContext";

function MovieModal({ show, handleClose }) {
  const { selectedMovie, poster } = useMovieContext();

  const modalStyle = {
    backgroundColor: "red",
    color: "white",
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        
        <Modal.Title>{selectedMovie ? selectedMovie.title : "Carregando..."}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        <Row>
          <Col xs={12} md={6}>
            <img src={poster} alt={selectedMovie ? selectedMovie.title : ""} style={{ maxWidth: "100%" }} />
          </Col>
          <Col xs={12} md={6}>
            {selectedMovie ? (
              <div>
                <p>{selectedMovie.overview}</p>
                <p>Avaliação: {selectedMovie.vote_average}</p>
                <p>Data de lançamento: {selectedMovie.release_date}</p>
                
              </div>
            ) : (
              "Carregando..."
            )}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
