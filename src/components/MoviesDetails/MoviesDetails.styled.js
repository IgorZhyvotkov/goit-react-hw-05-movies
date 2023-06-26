import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
  width: 100%;
`;

export const DetailsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid orangered;
`;
export const DetailsImg = styled.img`
  width: 300px;
`;

export const DetailsArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 700px;
  justify-content: center;

  gap: 20px;
`;

export const DetailsTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const DetailsSubTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const DetailsText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`;

export const DetailsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  `;

export const DetailsLink = styled(Link)`
  display: block;
  width: 60px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: aliceblue;
  font-weight: 500;
  border: 1px solid orangered;

  :hover {
    color: white;
    background-color: orangered;
  }
`;
