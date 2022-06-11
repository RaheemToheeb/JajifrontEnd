import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Container>
      <Job>Job Gallery</Job>
      <Wrapper>
        <Panel>
          <Imagewrap>
            <img src="/jaji1.jpeg" />
          </Imagewrap>
          <Writeup>
            <Description>Ikeja project</Description>
          </Writeup>
        </Panel>
        <Panel>
          <Imagewrap>
            <img src="/jaji6.jpeg" />
          </Imagewrap>
          <Writeup>
            <Description>Lekki Phase1 Project</Description>
          </Writeup>
        </Panel>
        <Panel>
          <Imagewrap>
            <img src="/jaji3.jpeg" />
          </Imagewrap>
          <Writeup>
            <Description>Abuja Project</Description>
          </Writeup>
        </Panel>
        <Panel>
          <Imagewrap>
            <img src="/jaji4.jpeg" />
          </Imagewrap>
          <Writeup>
            <Description>Victoria Island Project</Description>
          </Writeup>
        </Panel>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
const Job = styled.div`
  font-size: 3rem;
  color: #1c60b6;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #f3f5f6;
  marquee {
    font-size: 2rem;
    font-weight: bold;
    color: #39c67b;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* background-color: red; */
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 300px;
  height: 350px;
  background: white;
`;

const Save = styled.div`
  margin-top: 10px;

  /* margin-top: 50px; */
  height: 20px;
  width: 100px;
  /* background-color: red; */
  color: #2250ab;
`;
const Imagewrap = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* margin-top: 10px; */
  width: 300px;
  height: 300px;
  /* background-color: blue; */
  img {
    width: 250px;
    height: 270px;
    margin-top: 10px;
    border-radius: 5px;
    /* background-image: url("/panel.png"); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Writeup = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 95%;
  /* background-color: yellow; */
  margin-left: 15px;
  color: #2250ab;
`;
const Waranty = styled.div`
  margin-top: 15px;
  font-size: 0.7rem;
  /* color: #ffffff; */
`;
const Description = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 0.8rem;
`;
const Review = styled.div`
  /* margin-top: 20px; */
`;
const Price = styled.div`
  margin-top: 15px;
  color: red;
`;
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  height: 50px;
  width: 280px;
  text-align: center;
  background-color: #39c67b;
  font-weight: bold;
  color: #ffff;
`;
const Cartwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
