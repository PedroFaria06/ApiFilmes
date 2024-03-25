import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Card, Row, Col, Pagination } from "react-bootstrap";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const moviesPerPage = 20;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/discover/movie", {
          params: {
            page,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Erro na solicitação à API: ", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="home">
      <Header onSearch={(searchQuery) => console.log(searchQuery)} />

      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} lg={3} md={4} sm={6} xs={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

      <Pagination>
        <Pagination.Prev
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1}
        />
        <Pagination.Next onClick={() => setPage((prevPage) => prevPage + 1)} />
      </Pagination>
    </div>
  );
}

export default Home;
