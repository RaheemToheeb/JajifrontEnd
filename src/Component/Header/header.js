import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Headerwrap>
          <Logo to={"/"}>
            <img src="/log.png" />
            Jajilite
          </Logo>
          <Navwrap>
            <Nav to={"/Fault"}>
              <nav>Home</nav>
              <nav>Contact</nav>
              <nav>Subcribe</nav>
              <nav>Compalaint</nav>
            </Nav>
            <Sign to={"/signin"}>SignIn</Sign>
            <Login to={"/signup"}>SignUp</Login>
          </Navwrap>
        </Headerwrap>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00441B;
  position: fixed;;
  z-index:10000;
  /* background-colo;r: #749d76; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 95%;

  /* background-color: red; */
`;
const Headerwrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.1rem;
  color: white;
  /* background-color: white; */
  /* align-items: center; */
`;
const Logo = styled(Link)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: white;
  width: 40%;
  font-family: monoton;
  font-size: 2rem;
  text-decoration: none;
  /* background-color: red; */

  img {
    width: 80px;
    height: 80px;
    /* background-color: red; */
    background-size: cover;
  }
`;
const Login = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: white;
  color: #00441B;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
`;
const Sign = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color:#00441B;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid white;
  text-decoration: none;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* color: #749d76; */
  width: 60%;
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

const Navwrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;
