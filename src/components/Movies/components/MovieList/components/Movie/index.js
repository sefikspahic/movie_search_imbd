import styled from "styled-components";

const MovieContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  .movie-thumb {
    position: relative;

    .view-details {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 1.875rem;
      height: 1.875rem;
      margin: auto;
      z-index: 20;
      opacity: 0;
      transition: all 0.35s ease-in-out;

      button {
        background: transparent;
        padding: 0;
        margin: 0;
        border: none;

        svg {
          width: 1.875rem;
          fill: #fff;
          height: 1.875rem;
        }
      }
    }
    &:hover {
      cursor: pointer;

      .view-details {
        opacity: 1;
      }
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      -webkit-transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -ms-transition: all 0.35s ease-in-out;
      -o-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
      opacity: 1;
      background: #000000ad;
      background: -moz-linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0018382353) 0%,
        #000000ad 100%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0018382353) 0%,
        black 100%
      );
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0018382353) 0%,
        #000000ad 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
    }
    .movie-image {
      img {
        width: 100%;
        display: block;
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        -ms-transition: all 0.35s ease-in-out;
        -o-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }
    }
  }

  .movie-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 50;

    h3 {
      display: block;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 0.3125rem;
      line-height: 1.4;
      color: #fff;
    }
  }

  .genre-label {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #34495e;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
  }

  .release-label {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #ffc107;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
  }
`;

const Movie = ({ movie, handleOpenDetails }) => {
  return (
    <MovieContainer>
      <div className="movie-thumb" onClick={() => handleOpenDetails(movie)}>
        <figure className="movie-image">
          <img src={movie.cover} />
        </figure>
        <span className="genre-label">{movie.genre}</span>
        <span className="release-label">{movie.releaseYear}</span>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </MovieContainer>
  );
};

export default Movie;
