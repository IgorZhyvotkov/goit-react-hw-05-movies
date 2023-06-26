import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  DetailsArticle,
  DetailsLink,
  DetailsList,
  DetailsSection,
  DetailsSubTitle,
  DetailsText,
  DetailsTitle,
  MovieDetailsContainer,
  DetailsImg,
} from './MoviesDetails.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const KEY = 'api_key=dfc4dcf378e2f794649c11a1b66cbaf1';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location?.state?.from ?? '/');
  const { id } = useParams();
  const { poster_path, original_title, overview, runtime } = movieDetails;

  useEffect(() => {
    setIsLoading(true);

    const getMovieData = () =>
      fetch(`${BASE_URL}${id}?${KEY}`)
        .then(response => response.json())
        .then(movieData => {
          setMovieDetails(movieData);
        })
        .catch(err => console.error(err))
        .finally(setIsLoading(false));
    getMovieData();
  }, [id]);

  useEffect(() => {
    if (!movieDetails.genres) {
      return;
    }
    const genres = movieDetails.genres.map(genre => genre.name);
    setGenres(genres.join(', '));
  }, [movieDetails, genres]);

  return (
    <MovieDetailsContainer>
      {movieDetails.success === false ? (
        <h2>Not found results</h2>
      ) : (
        <DetailsSection>
          <DetailsImg
            src={`${IMG_BASE_URL}${poster_path}`}
            alt={original_title}
          />
          <DetailsArticle>
            <DetailsTitle>{original_title}</DetailsTitle>
            <DetailsText>Runtime: {runtime}min.</DetailsText>
            <DetailsSubTitle>Overview</DetailsSubTitle>
            <DetailsText>{overview}</DetailsText>
            <DetailsSubTitle>Genres</DetailsSubTitle>
            <DetailsText>{genres}</DetailsText>
          </DetailsArticle>
          <DetailsList>
            <DetailsLink to={goBackLink.current}>Back</DetailsLink>
            <li>
              <DetailsLink to="cast">Cast</DetailsLink>
            </li>
            <li>
              <DetailsLink to="reviews">Reviews</DetailsLink>
            </li>
          </DetailsList>
        </DetailsSection>
      )}

      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
      {isLoading && <div>Loading...</div>}
    </MovieDetailsContainer>
  );
};

export default MoviesDetails;
