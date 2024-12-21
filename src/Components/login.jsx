import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {  Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login({ setlogin, islogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 
  const emailData = localStorage.getItem("emailData")

    const passData = localStorage.getItem("passData")

    const list = JSON.parse(localStorage.getItem("list"))


    localStorage.setItem("emailData","rahulg252002@gmail.com")
    localStorage.setItem("passData","12345")



  const clickHandler = () => {

    if (email === (list.email ||emailData) && password === (list.password || passData)) {
      setlogin(!islogin);
      toast.success("Login successful!");
      navigate("/home");
    } else {
      toast.error("Email or password does not match.");
    }
  };

  return (
    <div className="h-[80vh] w-[100%] flex justify-center items-center bg-slate-600" 
     style={{
    backgroundImage: `url("https://img.freepik.com/free-photo/office-desk-workspace-bright-color-yellow-background_169016-38713.jpg?semt=ais_hybrid")`,
    backgroundSize: "cover", // Ensures the image covers the div
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center", // Centers the image
   // Example height
    width: "100%"   // Example width
  }}
>
      <div className="h-[95%] md:h-[90%] w-[80%] sm:w-[50%] p-4 border-2 border-gray-700 rounded-xl bg-white bg-opacity-30 backdrop-blur-lg ">
        <h2 className="text-xl font-bold text-center">Welcome Back, Shopper! 🛍️</h2>
        <p className="mt-4 text-blue-500 text-center"> Unlock exclusive deals, faster checkouts, and a world of trends waiting for you!</p>
        <form className="flex flex-col w-[100%] mt-10">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter Email address"
            id="email"
            name="email"
            className="border border-black rounded p-1.5 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className="border border-black rounded p-1.5 mt-2"
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-blue-500 mt-2 text-end">Forget password?</p>
        </form>
        <div className="flex flex-col">
          <button
            className="border border-1.5 border-black w-[100%] rounded p-2 mt-2 sm:mt-5"
            onClick={clickHandler}
          >
            Sign in
          </button>

          <div className="flex items-center mt-5">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          <Link to="/signup">
          <button className="border border-1.5 border-black w-[100%] rounded p-2 mt-5 flex justify-center items-center gap-4">
 
            <FcGoogle />
            Sign in with Google
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
