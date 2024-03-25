import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

function MovieModal({ show, handleClose, movie, poster }) {
  const modalStyle = {
    backgroundColor: "red", 
    color: "white", 
    
  };
  

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Body style={modalStyle}>
        <Row>
          <Col xs={12} md={6}>
            <img src={poster} alt={movie ? movie.title : ""} style={{ maxWidth: "100%" }} />
          </Col>
          <Col xs={12} md={6}>
            {movie ? (
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
                <p>Avaliação: {movie.vote_average}</p>
                <p>Data de lançamento: {movie.release_date}</p>
                {/* More info */}
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
