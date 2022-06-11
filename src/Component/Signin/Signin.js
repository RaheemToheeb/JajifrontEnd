import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../Globalstate/state";
import swal from "sweetalert2";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const formSchema = yup.object().shape({
    username: yup.string().email().required("This field cannot be empty"),
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });



  const onHandleSubmit = handleSubmit(async (data) => {
    const { email, password, username } = data;
    console.log(data);
    const url = `https://jajilite.herokuapp.com/api/user/signin`;
    const url2 = `http://localhost:6060/api/signin`;

    const res = await axios.post(url,  { email, password, username });
    if (res) {
      // localStorage.setItem("user", JSON.stringify(res.data.data));
      console.log(res.data.data)
      dispatch(createUser(res.data.data))
    }
    reset();
    navigate("/gallery");
  });

  return (
    <Container>
      <Wrapper onSubmit={onHandleSubmit}>
        <Login>Login</Login>
        <Wraps>
          <Name>
            <div>{errors.email && errors?.email.message}</div>
            Username
            <input
              type="text"
              placeholder="Enter username"
              {...register("username")}
            />
          </Name>
          <Email>
            <div>{errors.email && errors?.email.message}</div>
            Email
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
          </Email>
          <Password>
            <div>{errors.password && errors?.password.message}</div>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <nav>Forgot Password</nav>
          </Password>
        </Wraps>
        <Submitwrap>
          <Submit type="submit">Login</Submit>
        </Submitwrap>
        <Imagewrap>
          <img src="/google.png" />
          <img src="/Facebook.png" />
          <img src="/twitter.png" />
        </Imagewrap>
      </Wrapper>
    </Container>
  );
};

export default Signin;

const Wraps = styled.div`
  /* background-color: red; */
`;
const Imagewrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 120px;
  margin-top: 20px;
  /* background-color: green; */
  img {
    height: 30px;
    width: 30px;
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
  height: 100%;
  min-height: calc(100vh - 10px);
  padding:10px;
  //   background-color: #2e9bce;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;
const Wrapper = styled.form`
  display: flex;
  margin-top: 50px;
  height: 500px;
  /* background-color: red; */

  /* background-color: red; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media screen and (max-width: 768px) {
    box-shadow: none;
  }

  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  height: 80vh;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  width: 450px;
  /* background-color: red; */
  border-radius: 5px;
`;
const Login = styled.div`
  font-size: 3rem;
  font-family: Oleo script;
  color: #2e9bce;
  margin-top: 40px;
`;
const Name = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 20px;
  color: #2e9bce;
  font-family: Oleo script;

  input {
    width: 320px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
    @media screen and (min-width: 768px) {
    }
  }
`;
const Email = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: #2e9bce;
  font-family: Oleo script;
  input {
    width: 320px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #00441B;
    text-align: center;
  }
`;
const Password = styled.div`
  width: 350px;
  height: 50px;
  margin-top: 30px;
  color: #2e9bce;
  font-family: Oleo script;

  nav {
    display: flex;
    justify-content: flex-end;
    width: 320px;
    font-family: normal;
    /* background-color: red; */
  }

  input {
    width: 320px;
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
