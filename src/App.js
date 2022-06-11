import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/header";

import Home from "./Component/Home/Home";
// import Hero from "./Component/Hero/Hero";
// import Layer1 from "./Component/Layer1/Layer1";
// import Layer2 from "./Component/Layer2/Layer2";
// import Layer3 from "./Component/Layer3/Layer3";
import Signup from "./Component/Signup/Signup";
import Signin from "./Component/Signin/Signin";
import Gallery from "./Component/Gallery/Gallerry";
import Fault from "./Component/CustomerFault/Fault";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Fault" element={<Fault />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
