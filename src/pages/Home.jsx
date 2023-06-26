import { getMovies } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    const fetch = async () => {
      try {
        const movie = await getMovies();

        if (!movie.results.length) {
          throw new Error('No matches found');
        }
        setMovies([...movie.results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
