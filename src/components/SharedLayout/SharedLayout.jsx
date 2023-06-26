import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import {BiCameraMovie } from 'react-icons/bi'

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <BiCameraMovie/>
           <span>Enjoy best movies</span>
        </Logo>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
