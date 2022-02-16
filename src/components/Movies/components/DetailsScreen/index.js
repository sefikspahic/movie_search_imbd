import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import axios from "../../../../utils/axios";

const DetailsScreenContainer = styled.div`
  position: relative;
  padding: 30px 0;
`;

const MovieCover = styled.div`
  position: relative;

  > img {
    width: 100%;
    max-width: 100%;
  }
`;
const MovieListContainer = styled.div`
  position: relative;
  padding: 30px 0;
`;

const SeachTitle = styled.h4`
  margin-bottom: 30px;
`;
const DetailsScreen = () => {
  const { currentMovie } = useSelector((state) => state.currentMovie);
  const [awards, setAwards] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [getLike, setGetLike] = useState(0);
  const [getLikeImage, setGetLikeImage] = useState(0);
  const params = useParams();

  useEffect(() => {
    if (!currentMovie || !params.id) return;

    Promise.all([
      getAwards(),
      getReviews(),
      getLikeThis(),
      getLikeThisImaege(),
    ]);
  }, []);

  const getAwards = () => {
    axios
      .request("/title/get-awards", {
        params: { tconst: params.id },
      })
      .then((response) => {
        if (response.status === 200) {
          let data = response.data.resource;

          if (data.awards && data.awards.length > 0) {
            setAwards(data.awards.length);
          }
        }
      });
  };

  const getReviews = () => {
    axios
      .request("/title/get-user-reviews", {
        params: { tconst: params.id },
      })
      .then((response) => {
        if (response.status === 200) {
          setReviews(response.data.totalReviews);
        }
      });
  };
  const getLikeThis = () => {
    axios
      .request("/title/get-more-like-this", {
        params: { tconst: params.id },
      })
      .then((response) => {
        if (response.status === 200) {
          setGetLike(response.data);
          console.log("kao ovaj", response.data);
        }
      });
  };
  const getLikeThisImaege = () => {
    axios
      .request("/title/get-images", {
        params: { tconst: params.id },
      })
      .then((response) => {
        if (response.status === 200) {
          setGetLikeImage(response.data);
          console.log("slike", response.data);
        }
      });
  };

  return (
    <DetailsScreenContainer>
      <div className="container">
        <Row>
          <Col md={4}>
            <MovieCover>
              <img src={currentMovie.cover} />
            </MovieCover>
          </Col>
          <Col md={8}>
            <div className="current-movie-details">
              <h4>{currentMovie.title}</h4>

              <div className="movie-details-box">
                <p>Awards: {awards}</p>
                <p>Reviews: {reviews}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr />
      <MovieListContainer>
        <p className="container">
          Movie like this:{" "}
          {/* <Row>
            {getLike.map((value, data) => {
              return (
                <div>
                  <Col md={3}>{value}</Col>
                </div>
              );
            })}
          </Row> */}
        </p>
      </MovieListContainer>
    </DetailsScreenContainer>
  );
};

export default DetailsScreen;
