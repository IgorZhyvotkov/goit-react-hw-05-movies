import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsContent,
  ReviewsItem,
  ReviewsList,
  ReviewsNotAnswer,
  ReviewsTitle,
} from './Reviews.styled';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=dfc4dcf378e2f794649c11a1b66cbaf1';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getReviews = async () =>
      await fetch(`${BASE_URL}${id}/reviews?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(reviewsData => {
          setReviews(reviewsData.results);
        })
        .catch(err => console.error(err));
    getReviews();
  }, [id]);

  if (!reviews.length) {
    return (
      <ReviewsNotAnswer>There is no reviews</ReviewsNotAnswer>
    );
  }

  return (
    <ReviewsList>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <ReviewsItem key={id}>
            <ReviewsTitle>{author}</ReviewsTitle>
            <ReviewsContent>{content}</ReviewsContent>
          </ReviewsItem>
        );
      })}
    </ReviewsList>
  );
}
  
  export default Reviews;
  