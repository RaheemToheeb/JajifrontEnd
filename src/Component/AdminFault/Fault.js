import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Customer = () => {
  return (
    <Container>
      <Wrapper>
        <Welcome>
          <Imagetext>Board fault</Imagetext>
          <Image src="./fault.jpg" />
          <Event>_Kunle Ajayi_</Event>
        </Welcome>
        <Sign>
          <Contentwrap>
            I can really explain what happen, all I know was thet the light kept
            on tripping off
          </Contentwrap>
        </Sign>
      </Wrapper>
    </Container>
  );
};

export default Customer;

// const Content = styled.div``;
const Contentwrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 300px;
  width: 300px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: white;
  border-radius: 5px;
  color: #749d76;
  font-family: Oleo Script;
  font-size: 1.2rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  //   min-height: 100%;
  /* background-color: #f7f5c9; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  width: 70%;
  height: 80%;
  //   border-radius: 10px;
  /* background-color: red; */
  margin: 10px;
`;

const Sign = styled.div`
  width: 50%;
  height: 100%;
  background-color: #00441B;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0px 10px 10px 0px;

  /* background-image: url("./book3.jpeg"); */
  /* background-size: cover;
  background-position: center;
  opacity: 1; */
  /* background-repeat: no-repeat; */
  /* border-radius: 10px; */
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #c3c1c1;
  border-radius: 10px 0px 0px 0px;
  background-color: #d6d6d6;

  /* border-radius: 10px; */
`;
const Image = styled.img`
  width: 90%;
  height: 80%;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 30px;
`;

const Event = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 20px;
  font-size: 1.2rem;
  font-family: Oleo Script;
  color: #1f81a4;
  /* background-color: white; */
`;

const Imagetext = styled.div`
  height: 10px;
  width: 90%;
  color: #1f81a4;
  font-size: 2rem;
  font-weight: bold;
  font-family: Oleo Script;
`;
