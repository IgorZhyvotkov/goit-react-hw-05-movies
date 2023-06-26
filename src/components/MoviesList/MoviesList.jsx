import {
  MovieTitle,
  MovieListItem,
  MovieList,
  MovieImg,
  ListItemTitle,
  ListItemText,
  MovieLink,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <>
      <MovieTitle>Tranding today</MovieTitle>
      <MovieList>
        {movies.map(({ id, original_title, poster_path, release_date }) => {
          return (
            <MovieListItem key={id}>
              <MovieLink to={`/movies/${id}`}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt="img"
              />
              <ListItemTitle>{original_title}</ListItemTitle>
              <ListItemText>{release_date}</ListItemText> </MovieLink>
             
            </MovieListItem>
          );
        })}
      </MovieList>
    </>
  );
};

export default MoviesList;
