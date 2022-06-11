import React from "react";
import styled from "styled-components";
import {GiAfrica} from "react-icons/gi"

const Hero = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <Text1>Light Up Africa Initiative </Text1>
        <Text2><GiAfrica/></Text2>
      </Wrapper>
    </Container>
  <Over/>
    </>
  );
};

export default Hero;
const NewContainer = styled.div``;
 const Afr = styled.div`
 height: 300px;
 width:300px;
 background-image:url("/Asset/batter2.jpg")
 background-position:center;
 object-fit:cover;
//  background-color:black;
 `

const Over = styled.div`
  width:100%;
  height:100vh;
  background:rgba(0, 0, 0, 70%);
  position:relative;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position:absolute;
  /* background-image: url("/solar21.jpeg"); */
  /* background-image: url("/pawame_kid_power.jpg__1170x0_q85_subsampling-2_upscale.jpg"); */
  background-image: url("/village.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* margin-top: 40px; */
  /* background-position: center; */
  /* opacity: 0.95; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position:relative;
  z-index:500;
  /* background-color:transparent; */
  /* opacity: 0.8; */

  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  width: 100%;
  height: 80%;
  color: white;
  /* background-color: red; */
`;

const Text1 = styled.div`
  font-size: 3rem;
  /* color: white; */
  font-weight: bold;
  margin-top:80px;
`;
const Text2 = styled(GiAfrica)`
height:200px;
width:200px;
  font-size: 3rem;
  /* color: white; */
`;
