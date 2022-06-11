import React from "react";
import styled from "styled-components";

const Layer1 = () => {
  return (
    <Container>
      <Popular>
        <PopText>Popular professional services</PopText>
        <Popwrap>
          <Popimage1>
            <nav>Calculate</nav>
            <span>Electrical load size</span>
            <Buttonwrap>
              <button>Get Started</button>
            </Buttonwrap>
          </Popimage1>
          <Popimage2>
            <nav>Lithium Battery</nav>
            <span>The future generation battery </span>
            <Buttonwrap>
              <button>Buy Now</button>
            </Buttonwrap>
          </Popimage2>
          <Popimage3>
            <nav>Solar Panel</nav>
            <span>Get the most EHS </span>
            <Buttonwrap>
              <button>Buy Now</button>
            </Buttonwrap>
          </Popimage3>
        </Popwrap>
        <Delivery>
          <Deliver>
            <img />
            <Navwrap>
              <nav>Free Shipping Across India</nav>
              <nav>
                We generally ship next day and try to deliver the product with
                in
              </nav>
              <nav>
                3-7 days. It is shipped through Blue Dart or Delhivery Courier.
              </nav>
              <nav>Check now...</nav>
            </Navwrap>
          </Deliver>
          <Loan>
            <img />
            <Navwrap>
              <nav>Buy Solar on Easy EMI / Loan</nav>
              <nav>
                We have partnered with leading banks to provide you on Easy EMI
                / Solar Loan.
              </nav>
              <nav>Check out product page for details.</nav>
              <nav> Know more...</nav>
            </Navwrap>
          </Loan>
        </Delivery>
        <Sales>
          <Text>Popular Categories</Text>
          <Saleswrap>
            <Twrap>
              <Imagewrap>
                <img src="/panelpng.png" />
              </Imagewrap>
              <Text2>Solar Panel</Text2>
            </Twrap>
            <Twrap>
              <Imagewrap>
                <img src="/controllerbg.png" />
              </Imagewrap>
              <Text2>Solar Panel</Text2>
            </Twrap>
            <Twrap>
              <Imagewrap>
                <img src="/luminuos.png" />
              </Imagewrap>
              <Text2>Solar Panel</Text2>
            </Twrap>
            <Twrap>
              <Imagewrap>
                <img src="/panelpng.png" />
              </Imagewrap>
              <Text2>Solar Panel</Text2>
            </Twrap>
            <Twrap>
              <Imagewrap>
                <img src="/powerbg.png" />
              </Imagewrap>
              <Text2>Solar Panel</Text2>
            </Twrap>
          </Saleswrap>
        </Sales>
      </Popular>
    </Container>
  );
};

export default Layer1;

const Sales = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Saleswrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
`;
const Text = styled.div``;

const Text2 = styled.div`
  margin-top: 20px;
`;
const Imagewrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, */
  /* rgba(0, 0, 0, 0.22) 0px 10px 10px; */
  /* background-color: #e5e6eb; */
  height: 200px;
  width: 200px;
  border-radius: 100%;
  img {
    height: 100px;
    width: 100px;
    background-image: contain;
  }
`;
const Twrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Delivery = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25vh;
  width: 100%;
  margin-top: 30px;
`;
const Deliver = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25vh;
  width: 45%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  /* background-color: yellow; */
  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    /* background-color: red; */
    background-image: url("/van3.png");
    background-size: contain;
  }
`;

const Image = styled.div``;

const Loan = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 25vh;
  width: 45%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    /* background-color: red; */
    background-image: url("/naira.png");
    background-size: contain;
  }
  height: 25vh;
  width: 50%;
`;

const Navwrap = styled.div`
  /* background-color: green; */
  width: 80%;
`;

const Container = styled.div`
  /* height: 100%; */
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f3f5f6; */
  /* background-color: red; */
`;

const Popular = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 90vh;
  /* background-color: red; */
`;
const PopText = styled.div`
  /* display: flex;
  justify-content: flex-start; */
  font-size: 2rem;
  color: #4c4145;
  width: 98%;
  font-weight: bold;
`;

const Popimage1 = styled.div`
  margin-top: 20px;
  height: 350px;
  width: 400px;
  background-image: url("/lady.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-position: center;
  background-color: red;
  nav {
    margin-top:10px;
    margin-left:5px;
    color: white;
    font-weight: bold;
  }
  span {
    margin-left:5px;
    font-size: 1.4rem;
    color: white;
    font-weight: bold;
  }
`;

const Buttonwrap = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* background-color: blue; */
  height: 30vh;
  button {
    text-align: center;
    padding: 18px 50px;
    background-color: #00441B;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    margin-top: 300px;
    margin-right: 20px;
  }
`;
const Popimage2 = styled.div`
margin-top: 20px;
  height: 350px;
  width: 400px;
  background-image: url("/battery3.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-color: red;
  nav {
    margin-left:5px;
    margin-top:10px;
    color: white;
    font-weight: bold;
  }
  span {
    margin-left:5px;
    font-size: 1.4rem;
    color: white;
    font-weight: bold;
  }
`;
const Popimage3 = styled.div`
 margin-top: 20px;
  height: 350px;
  width: 400px;
  background-image: url("/panel2.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-color: red;
  nav {
    margin-top:10px;
    margin-left:5px;
    color: white;
    font-weight: bold;
  }
  span {
    margin-left:5px;
    font-size: 1.4rem;
    color: white;
    font-weight: bold;
  }
`;

const Popwrap = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  width: 100%;
  height: 70vh;
  flex-wrap: wrap;

  /* background-color: blue; */
`;
