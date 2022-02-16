import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

import axios from "../../../../utils/axios";
import Movie from "./components/Movie";
import LoadingSpinner from "../../../Spinner";

import { setMovie } from "../../../../redux/Movie/movie.actions";

const MovieListContainer = styled.div`
  position: relative;
  padding: 30px 0;
`;

const SeachTitle = styled.h4`
  margin-bottom: 30px;
`;

const MoviesList = () => {
  const { search } = useSelector((state) =>{
    console.log(state)
    return state.search});
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(search)
    if (search === "") {
      setMovies([]);
    } else {
      getData();
    }
  }, [search]);

  const getData = () => {
    setIsLoading(true);
    axios
      .request("/auto-complete", {
        params: { q: search },
      })
      .then((response) => {
        if (response.status === 200 && response.data.d) {
          let data = response.data.d.map((item) => {
            return {
              id: item.id,
              title: item.l,
              cover: item.i ? item.i.imageUrl : "",
              genre: item.q,
              releaseYear: item.y,
            };
          });
          console.log("podatic svi", response);

          if (data.length > 0) {
            setMovies(data);
            setIsLoading(false);
          }
        }
      });
  };

  const handleOpenDetails = (movie) => {
    dispatch(setMovie(movie));

    navigate(`/movies/${movie.id}`);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <MovieListContainer>
      <div className="container">
        {movies.length > 0 && (
          <SeachTitle>
            Search results for: <strong>{search}</strong>
          </SeachTitle>
        )}
        <Row>
          {movies.map((item, idx) => {
            return (
              <Col md={3} key={idx}>
                <Movie movie={item} handleOpenDetails={handleOpenDetails} />
              </Col>
            );
          })}
        </Row>
      </div>
    </MovieListContainer>
  );
};

export default MoviesList;
