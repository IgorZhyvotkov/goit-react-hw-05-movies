import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 ;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid orangered;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 700;
  font-size: 1.4em;
  margin: 0;
  color: #ebebeb;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: aliceblue;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
