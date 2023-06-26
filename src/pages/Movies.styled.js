import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 5px;
list-style: none;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MoviesForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
 
  padding: 0;
  width: 100%;
`;

export const MoviesInput = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 5px;
  width: 400px;

`;

export const MoviesButton = styled.button`
  border: 1px solid orangered;
  border-radius: 10px;
  font-size: 16px;
  padding: 5px;
  background-color: transparent;
  color: #efefef;

  :hover {
    color: #efefef;
    background-color: orangered;
  }
`;

export const MoviesLink = styled(NavLink)`
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