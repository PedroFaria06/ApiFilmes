import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  Button,
} from "react-bootstrap";
import SearchInput from "../../components/SearchInput";
import MovieModal from "../../components/MovieModal";
import MovieCard from "../../components/MovieCard";
import { useMovieContext } from "../../modules/MovieContext";
import api from "../../services/api";
import "./Home.css";

function Home() {
  const { setSelectedMovie, setPoster } = useMovieContext();

  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [emptyInput, setEmptyInput] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMostRecentMovies = async () => {
    try {
      setLoading(true);
      const response = await api.get("/discover/movie", {
        params: {
          page,
        },
      });
      setMovies(response.data.results);
      setCount(response.data.total_results);
    } catch (error) {
      console.error("Erro na solicitação à API: ", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovies = async () => {
    if (searchQuery.trim().length > 0) {
      // Handle search
      try {
        setLoading(true);
        const response = await api.get("/search/movie", {
          params: {
            query: searchQuery,
            page,
          },
        });

        setMovies(response.data.results);
        setCount(response.data.total_results);
      } catch (error) {
        console.error("Erro na solicitação à API: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      // Fetch most recent titles
      fetchMostRecentMovies();
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, searchQuery]);

  const openModal = async (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);

    if (movie.poster_path) {
      const posterResponse = await api.get(`/movie/${movie.id}/images`);
      if (posterResponse.data.posters && posterResponse.data.posters.length > 0) {
        const posterPath = posterResponse.data.posters[0].file_path;
        setPoster(`https://image.tmdb.org/t/p/original${posterPath}`);
      }
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
    setPoster(null);
  };

  const onTapSearch = () => {
    if (searchQuery.trim().length < 1) {
      setEmptyInput(true);
      setSearchQuery("");
      setPage(1);
    } else {
      setPage(1);
      fetchMovies();
    }
  };

  const dataFiltered = useMemo(() => movies, [movies]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < Math.ceil(count / 20)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="black-background">
      <Container>
        <h1 className="red-title">FilmesJS</h1>
        <p className="red-title">Aqui você encontra tudo sobre os principais filmes</p>
        <SearchInput
          placeholder="Busque seu filme"
          value={searchQuery}
          onChange={setSearchQuery}
          onTapSearch={onTapSearch}
          emptyInput={emptyInput}
        />
        <Row>
          {dataFiltered.map((movie) => (
            <Col key={movie.id} lg={3} md={4} sm={6} xs={12}>
              <MovieCard movie={movie} openModal={openModal} />
            </Col>
          ))}
        </Row>

        <div className="page-counter">
          <span style={{ color: "white" }}>
            Página {page} de {Math.ceil(count / 20)}
          </span>
        </div>

        <div className="page-navigation">
          <Button variant="primary" onClick={handlePrevPage}  disabled={page === 1}>
            Anterior
          </Button>
          <Button variant="primary" onClick={handleNextPage} disabled={page === Math.ceil(count / 20)}>
            Próxima
          </Button>
        </div>

        <Pagination
          count={Math.ceil(count / 20)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />

        <MovieModal show={showModal} handleClose={closeModal} />
      </Container>
    </div>
  );
}
//build
export default Home;
