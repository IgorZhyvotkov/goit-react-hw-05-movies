import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  MoviesButton,
  MoviesContainer,
  MoviesForm,
  MoviesInput,
  MoviesLink,
  MoviesList,
  ListItemTitle,
  ListItemText,
} from './Movies.styled';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'api_key=dfc4dcf378e2f794649c11a1b66cbaf1';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) {
      return;
    }
    setIsLoading(true);
    const getMoviesByQuery = async () =>
      await fetch(
        `${BASE_URL}?${API_KEY}&query=${queryParams}&include_adult=false&language=en-US&page=1`
      )
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err))
        .finally(setIsLoading(false));

    getMoviesByQuery();
  }, [queryParams]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Select any query');
      return;
    }
    setSearchParams({ query });
    e.currentTarget.reset();
  };

  return (
    <MoviesContainer>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput type="text" value={query} onChange={onChange} />
        <MoviesButton type="submit">Search</MoviesButton>
      </MoviesForm>

      <MoviesList>
        {movies.map(({ id, original_title, poster_path, release_date }) => {
          return (
            <li key={id}>
              <MoviesLink to={`${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt="img"
                />
                <ListItemTitle>{original_title}</ListItemTitle>
                <ListItemText>{release_date}</ListItemText>
              </MoviesLink>
            </li>
          );
        })}
      </MoviesList>

      {!movies.length && <p>Find your movie</p>}
      {isLoading && <div>Loading...</div>}
    </MoviesContainer>
  );
};

export default Movies;
