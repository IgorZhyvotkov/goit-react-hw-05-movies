import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastTitle, CastImg } from './Cast.styled';
import { ReviewsNotAnswer } from 'components/Reviews/Reviews.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=dfc4dcf378e2f794649c11a1b66cbaf1';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getCast = async () =>
      await fetch(`${BASE_URL}${id}/credits?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(castData => {
          setCasts(castData.cast);
        })
        .catch(err => console.error(err));
    getCast();
  }, [id]);

  if (!casts.length) {
    return (
      <ReviewsNotAnswer>There is no casts about this movie</ReviewsNotAnswer>
    );
  }
  return (
    <CastList>
      {casts.map(cast => {
        const { id, profile_path, name, character } = cast;
        return (
          <CastItem key={id}>
            <CastImg
              src={
                profile_path
                  ? `${IMG_BASE_URL}${profile_path}`
                  : 'https://amiel.club/uploads/posts/2022-03/1647644740_26-amiel-club-p-siluet-cheloveka-kartinki-29.jpg'
              }
              alt={name}                     
            />
            <CastTitle>{name}</CastTitle>
            <CastTitle>Character: {character}</CastTitle>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
