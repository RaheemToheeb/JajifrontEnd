import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import pix from "../../img/log.png";
import axios from "axios";
import swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");
  const formSchema = yup.object().shape({
    username: yup.string().required("This field must be filled"),
    name: yup.string().required("This field must be filled"),
    email: yup.string().email().required("This field must be filled"),
    password: yup.string().required("This field must be filled"),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password, username, name } = data;
    console.log(data);
    const url = `https://jajilite.herokuapp.com/api/user/register`;
    const url2 = `http://localhost:6060/api/user/register`;

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    await axios.post(url, formData, config).then((res) => {
      console.log("Error Data: ", res);
    });

    swal.fire({
      title: "Signup Successful!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    navigate("/signup/signin");
  });

  return (
    <Container>
      <Card>
        <Top>SignUp</Top>
        <Imagewrap>
        
        
        <ImageInput
          id="pix"
          onChange={handleImage}
          type="file"
          accept="image/*"
        />
        </Imagewrap>
        <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
        <Form onSubmit={onSubmit} type="multipart/form-data">
        <Input>
        Fullname
          <div>{errors.firstname && errors.firstname.message}</div>
          <input
            type="text"
            placeholder="Enter firstname"
            {...register("name")}
          />
        </Input>
        <Input>
          Username
          <div>{errors.username && errors.username.message}</div>
          <input
            email
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
        </Input>
        <Input>
          email
          <div>{errors.email && errors.email.message}</div>
          <input type="text" placeholder="Enter email" {...register("email")} />
        </Input>
        <Input>
          password
          <div>{errors.password && errors.password.message}</div>
          <input
            type="password"
            placeholder="Enterpassword"
            {...register("password")}
          />
        </Input>
        <Input>
          confirm
          <div>{errors.confirm && errors.confirm.message}</div>
          <input
            type="password"
            placeholder="confirm password"
            {...register("confirm password")}
          />
        </Input>
        <ButtonWrap>
        <Button type="submit"> Sign Up</Button>
        </ButtonWrap>
      </Form>
      </Card>
    </Container>
  );
};

export default Signup;
const ImageA = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  /* background-color: darkorange; */
  margin-bottom: 20px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;


const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: #2E9BCE;
  color: white;
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const ImageInput = styled.input`
  display: none;
`;
const Card = styled.div`
padding-top:20px;
display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 38%;
  background-color: white;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    box-shadow: none;
  }
`

const Imagewrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: #00441B;
  
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: calc(120vh - 80px);
  /* background-color: #2e9bce; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:10px;
`;

const Top = styled.div`
  font-size: 2rem;
  font-family: Oleo script;
  color: #2e9bce;
  /* margin-top: 20px; */
`;
const Form = styled.form`
  
`;
const Image = styled.div``;
const Input = styled.div`
  display: flex;

  flex-direction: column;
  width: 350px;
  height: 50px;
  margin-top: 15px;
  color: #2e9bce;
  font-family: Oleo script;
  border: none;
  /* background-color: red; */

  input {
    outline: none;
    width: 350px;
    height: 30px;
    border-radius: 5px;
    border: 0;
    border-bottom: 1px solid #00441B;
    text-align: center;

    :focus {
      outline: none;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  /* background-color: red; */
  margin-top: 10px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 150px;
  height: 50px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2e9bce;
  border: none;
  color: white;
`;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import pix from "../../img/log.png";
// import axios from "axios";

// const SignUp = () => {
//   const [uiImage, setUiImage] = useState(pix);
//   const [avatar, setAvatar] = useState("");

//   const modelSchema = yup.object().shape({
//     userName: yup.string().required("Please fill up this field"),
//     email: yup.string().email().required("Please fill up this field"),
//     password: yup.string().required("Please fill up this field"),
//     confirm: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Password doesn't match"),
//   });

//   const uploadImage = (e) => {
//     const file = e.target.files[0];
//     const save = URL.createObjectURL(file);
//     setUiImage(save);
//     setAvatar(file);
//   };

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(modelSchema),
//   });

//   const onHandleSubmit = handleSubmit(async (data) => {
//     const { userName, email, password } = data;

//     const formData = new FormData();

//     formData.append("userName", userName);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("avatar", avatar);

//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };

//     const url = "http://localhost:4444/api/user/register";

//     await axios.post(url, formData, config);

//     reset();
//   });

//   return (
//     <Container>
//       <Wrapper>
//         <Card onSubmit={onHandleSubmit}>
//           <Image src={uiImage} />
//           <ImageLabel htmlFor="pix">Upload Image</ImageLabel>
//           <ImageInput type="file" onChange={uploadImage} id="pix" />

//           <Holder>
//             <Hold>
//               <DivError>{errors.userName && errors?.userName.message}</DivError>
//               <TextInput placeholder="userName" {...register("userName")} />
//             </Hold>

//             <Hold>
//               <DivError>{errors.email && errors?.email.message}</DivError>
//               <TextInput placeholder="email" {...register("email")} />
//             </Hold>

//             <Hold>
//               <DivError>{errors.password && errors?.password.message}</DivError>
//               <TextInput placeholder="password" {...register("password")} />
//             </Hold>

//             <Hold></Hold>

//             <Hold>
//               <DivError>{errors.confirm && errors?.confirm.message}</DivError>
//               <TextInput placeholder="confirm" {...register("confirm")} />
//             </Hold>
//           </Holder>

//           <Holder>
//             <Button type="submit">Register</Button>
//           </Holder>

//           <Account>
//             Already have an Accout? <Div to="/signin">Sign in here</Div>
//           </Account>
//         </Card>
//       </Wrapper>
//     </Container>
//   );
// };

// export default SignUp;

// const Hold = styled.div`
//   width: 100%;
// `;
// const DivError = styled.p`
//   margin: 0px;
//   color: red;
//   font-size: 12px;
//   margin-top: 12px;
// `;

// const Account = styled.div`
//   text-align: center;
//   margin-top: 20px;
// `;
// const Div = styled(Link)`
//   font-weight: bold;
//   color: black;
//   text-decoration: none;
// `;

// const Button = styled.button`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   width: 100%;
//   background-color: red;
//   height: 50px;
//   outline: none;
//   border: 0;
//   color: white;
//   font-size: 25px;
//   font-weight: bold;
//   text-transform: uppercase;
//   transform: scale(1);
//   transition: all 350ms;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.02);
//   }
// `;

// const TextInput = styled.input`
//   width: 100%;
//   height: 45px;
//   border-radius: 5px;
//   border: 1px solid silver;
//   outline: none;
//   font-size: 16px;
//   padding-left: 10px;
//   ::placeholder {
//     font-family: Poppins;
//   }
// `;

// const Holder = styled.div`
//   width: 80%;
//   margin-top: 40px;
//   padding: 0 10px;
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   flex-direction: column;
// `;

// const ImageInput = styled.input`
//   display: none;
// `;

// const ImageLabel = styled.label`
//   background-color: red;
//   padding: 15px 30px;
//   border-radius: 5px;
//   color: white;
//   transform: scale(1);
//   transition: all 350ms;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.02);
//   }
// `;

// const Image = styled.img`
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   object-fit: cover;
//   background-color: red;
//   margin-bottom: 30px;
// `;

// const Card = styled.form`
//   width: 500px;
//   min-height: 500px;
//   height: 100%;
//   background-color: white;
//   border-radius: 10px;
//   padding: 30px 0;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Container = styled.div`
//   padding-top: 150px;
//   min-height: calc(100vh - 100px);
//   height: 100%;
//   background-color: lightgrey;
// `;
