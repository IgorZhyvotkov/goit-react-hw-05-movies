const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_DAY = 'trending/movie/day';
const KEY = 'api_key=dfc4dcf378e2f794649c11a1b66cbaf1';

export const getMovies = async () => {

  const response = await fetch(`${BASE_URL}${TREND_DAY}?${KEY}`)
  if (!response.ok) {
    throw new Error("Dont give up! Try again!");
  }
  
  return response.json();
};


