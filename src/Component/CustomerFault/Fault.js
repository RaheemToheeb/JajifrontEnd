import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import pix from "../../img/log.png";
import { useNavigate } from "react-router-dom";

const Faults = () => {
  return (
    <Container>
      <Wrapper>
        <Login>Jcare Center</Login>
        <Name>
          Customer name
          <input type="text" placeholder="Enter name" />
        </Name>
        <Product>
          Product
          <input type="text" placeholder="Enter product name" />
        </Product>
        <Purchase>
          Purchase
          <input type="date" placeholder="Enter date of purchase" />
        </Purchase>
        <Address>
          Address
          <input type="text" placeholder="Enter Address" />
        </Address>
        <Submitwrap>
          <Submit type="submit">SUBMIT</Submit>
        </Submitwrap>
      </Wrapper>
      <Imagesection>
        <Image>
          <img src="/fault.jpg" />
          <button>uploadimgae</button>
        </Image>
        <Description>
          Description
          <textarea type="text" placeholder="Enter Description" />
        </Description>
      </Imagesection>
    </Container>
  );
};

export default Faults;
const Description = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: white;
  font-family: Oleo script;
  textarea {
    width: 350px;
    height: 100px;
    border-radius: 10px;
    border:none;
  }
`;
const Imagesection = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 80vh;
  color: white;
  font-family: Oleo script;
  background-color: #40919b;
  /* background-color: #2e9bce; */
  margin-top: 80px;
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 120px;
  margin-top: 20px;
  background-color: green;
  img {
    height: 30px;
    width: 30px;
    background-size: contain;
  } */
`;
const Image = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  /* background-color: yellow; */
  button {
    padding: 10px 60px;
    border: none;
    border-radius: 5px;
    background-color: #08b85a;
    color: white;
    font-weight: bold;
  }
  img {
    margin-top: 30px;
    height: 300px;
    width: 80%;
    background-size: contain;
  }
`;

const Submitwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  /* background-color: red; */
  margin-top: 50px;
`;
const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2e9bce;
  border: none;
  color: white;
  //   background-color: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  //   background-color: #2e9bce;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.form`
  display: flex;
  margin-top: 80px;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  background-color: #f0f0f2;

  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  height: 80vh;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  width: 30%;
  /* background-color: white; */
  border-radius: 5px 0px 0px 5px;
`;
const Login = styled.div`
  font-size: 3rem;
  font-family: Oleo script;
  color: #2e9bce;
`;
const Name = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 20px;
  color: #2e9bce;
  font-family: Oleo script;

  input {
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
  }
`;
const Product = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: #2e9bce;
  font-family: Oleo script;
  input {
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
  }
`;
const Address = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: #2e9bce;
  font-family: Oleo script;
  input {
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
  }
`;
const Purchase = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: #2e9bce;
  font-family: Oleo script;

  nav {
    display: flex;
    justify-content: flex-end;
    width: 350px;
    font-family: normal;
  }

  input {
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
  }
`;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import pix from "./pix.jpg";
// import axios from "axios";
// import { AuthContext } from "../../GlobalState/AuthProvider";
// const Register = () => {
//   // const formSchema = yup.object.shape({
//   //     userName:yup.string().required("This field must be filled"),
//   //     email:yup.string().required("This field must be filled"),
//   //     password:yup.string().required("This field must be filled"),
//   //     confirm:yup.string().oneOf([yup.ref("password"),null])
//   // })

//   return (
//     <Container>
//       <Wrapper>
//         <Login>Login</Login>
//         <Name>
//           Username
//           <input type="text" placeholder="Enter Name" />
//         </Name>
//         <Email>
//           Email
//           <input type="text" placeholder="Enter your email" />
//         </Email>
//         <Password>
//           Password
//           <input type="password" placeholder="Enter your psswordd" />
//           <nav>Forgot Password</nav>
//         </Password>
//         <Submitwrap>
//           <Submit>Login</Submit>
//         </Submitwrap>
//         <Imagewrap>
//           <img src="/google.png" />
//           <img src="/Facebook.png" />
//           <img src="/twitter.png" />
//         </Imagewrap>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;
// const Imagewrap = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   height: 50px;
//   width: 120px;
//   margin-top: 20px;
//   /* background-color: green; */
//   img {
//     height: 30px;
//     width: 30px;
//     background-size: contain;
//   }
// `;

// const Submitwrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 50px;
//   color: white;
//   /* background-color: red; */
//   margin-top: 50px;
// `;
// const Submit = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 150px;
//   height: 50px;
//   font-weight: bold;
//   border-radius: 5px;

//   background-color: #2e9bce;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: #2e9bce;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   margin-top: 80px;

//   /* justify-content: center; */
//   flex-direction: column;
//   align-items: center;
//   height: 80vh;
//   /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
//     rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
//   width: 30%;
//   background-color: white;
//   border-radius: 5px;
// `;
// const Login = styled.div`
//   font-size: 3rem;
//   font-family: Oleo script;
//   color: #39c67b;
// `;
// const Name = styled.div`
//   width: 350px;
//   height: 50px;
//   margin-top: 20px;
//   color: #2e9bce;
//   font-family: Oleo script;

//   input {
//     width: 350px;
//     height: 40px;
//     border-radius: 10px;
//     border: 2px solid #39c67b;
//     text-align: center;
//   }
// `;
// const Email = styled.div`
//   width: 350px;
//   height: 50px;
//   margin-top: 30px;
//   color: #2e9bce;
//   font-family: Oleo script;
//   input {
//     width: 350px;
//     height: 40px;
//     border-radius: 10px;
//     border: 2px solid #39c67b;
//     text-align: center;
//   }
// `;
// const Password = styled.div`
//   width: 350px;
//   height: 50px;
//   margin-top: 30px;
//   color: #2e9bce;
//   font-family: Oleo script;

//   nav {
//     display: flex;
//     justify-content: flex-end;
//     width: 350px;
//     font-family: normal;
//   }

//   input {
//     width: 350px;
//     height: 40px;
//     border-radius: 10px;
//     border: 2px solid #39c67b;
//     text-align: center;
//   }
// `;
