import { useState } from "react";
import "./App.css";
import Home from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";

function App() {

  return (
    <>
      <div className="root">
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
