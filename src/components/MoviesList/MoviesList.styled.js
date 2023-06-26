import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
`;

export const MovieImg = styled.img`
  width: auto;

`;

export const MovieListItem = styled.li``;

export const MovieTitle = styled.h1`
  padding-left: 50px;
  font-size: 1.5em;
  color: #d70005;
`;

export const ListItemTitle = styled.h2`
  padding-top: 2px;
  font-size: 0.8em;
  color: #efefef;
  margin: 0;
`;

export const ListItemText = styled.p`
  padding-top: 2px;
  margin: 0;
  font-size: 0.7em;
  color: #efefef;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #efefef;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 140px;
  transition: transform 0.25s;
  &:hover  {
    transform: scale(1.3);
  }
`;
