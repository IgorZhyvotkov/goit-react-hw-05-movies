import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  background-image: linear-gradient(
    to top,
    rgba(3, 18, 181, 0.6),
    rgba(300, 50, 70, 0.4)
  );
  background-color: rgba(117, 190, 218, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewsTitle = styled.h3`
  padding: 0;
  margin: 0;

  font-size: 20px;
  font-weight: 700;
`;

export const ReviewsNotAnswer = styled.h3`
  padding: 0;
  margin: 0 auto;

  font-size: 20px;
  font-weight: 700;
`;

export const ReviewsContent = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;
