import React from "react";
import styled from "styled-components";

const Layer2 = () => {
  return (
    <Container>
      <Jaj>JAJILITE PANEL STRORE</Jaj>
      <Wrapper>
        <Panel>
          <Save>Save Rs. 1,450</Save>
          <Imagewrap>
            <img src="/panel2.png" />
          </Imagewrap>
          <Writeup>
            <Waranty>25 YEARS* WARRANTY</Waranty>
            <Description>
              Loom Solar Panel 10 watt - 12 volt for Mobile Charging
            </Description>
            <Review>56 reviews</Review>
            <Price>Rs. 1,050 Rs. 1,500</Price>
          </Writeup>
          <Cartwrap>
            <Cart>Add to Cart</Cart>
          </Cartwrap>
        </Panel>
        <Panel>
          <Save>Save Rs. 1,450</Save>
          <Imagewrap>
            <img src="/panelpng.png" />
          </Imagewrap>
          <Writeup>
            <Waranty>25 YEARS* WARRANTY</Waranty>
            <Description>
              Loom Solar Panel 10 watt - 12 volt for Mobile Charging
            </Description>
            <Review>56 reviews</Review>
            <Price>₦ 11,050 </Price>
          </Writeup>
          <Cartwrap>
            <Cart>Add to Cart</Cart>
          </Cartwrap>
        </Panel>
        <Panel>
          <Save>Save Rs. 1,450</Save>
          <Imagewrap>
            <img src="/panel.png" />
          </Imagewrap>
          <Writeup>
            <Waranty>25 YEARS* WARRANTY</Waranty>
            <Description>
              Loom Solar Panel 10 watt - 12 volt for Mobile Charging
            </Description>
            <Review>56 reviews</Review>
            <Price>₦ 22,050</Price>
          </Writeup>
          <Cartwrap>
            <Cart>Add to Cart</Cart>
          </Cartwrap>
        </Panel>
        <Panel>
          <Save>Save Rs. 1,450</Save>
          <Imagewrap>
            <img src="/panelwire.png" />
          </Imagewrap>
          <Writeup>
            <Waranty>25 YEARS* WARRANTY</Waranty>
            <Description>
              Loom Solar Panel 10 watt - 12 volt for Mobile Charging
            </Description>
            <Review>56 reviews</Review>
            <Price>₦ 55,200</Price>
          </Writeup>
          <Cartwrap>
            <Cart>Add to Cart</Cart>
          </Cartwrap>
        </Panel>
      </Wrapper>
    </Container>
  );
};

export default Layer2;

const Jaj = styled.div`
  font-weight: bold;
  color: #08b85a;
  font-size: 2rem;
  margin-bottom: 15px;
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
  /* } */
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 300px;
  height: 500px;
  background: white;
`;

const Save = styled.div`
  margin-top: 10px;

  /* margin-top: 50px; */
  height: 20px;
  width: 100px;
  background-color: red;
  color: white;
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
    height: 200px;
    margin-top: 10px;
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
  color: #08b85a;
  font-weight: bold;
`;
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  height: 50px;
  width: 280px;
  text-align: center;
  background-color: #00441B;
  font-weight: bold;
  color: #ffff;
`;
const Cartwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
