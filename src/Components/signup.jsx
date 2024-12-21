import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { toast } from 'react-hot-toast'
import { Link } from "react-router-dom";

function Signup(){
    const [formdata,setFormdata]= useState([{
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirmpassword:""
    }])

    const[visible,setVisible] = useState({
        createpass:false,
        confirmpass:false
    })
    // const[password,setPassword]= useState('')
    // const[passwordvalid,setPasswordvalid] = useState(false)

    function clickHandler(field){
        setVisible((prev)=>({
            ...prev,
            [field]:!prev[field]
        }));

    }
    // function validationcheck(password){

    //     const validate= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@$%^&*])(?=.*[A-Za-z\d!@#$%^&*]{8,})$/;
    //     return validate.test(password)

    // }
     
     function emailHandler(event){
        setFormdata((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        })
    )

     }
     
    //  console.log("Data retrieved successfully:", getEmail);

    //  if (getEmail) {
    //      console.log("Data retrieved successfully:", getEmail.email);
    //      console.log("Data retrieved successfully:", getEmail.password);

    //   } else {
    //     console.error("No data found in localStorage!");
    //   }

    localStorage.setItem("list",JSON.stringify(formdata))
   


    return(
    <div className=" h-[80vh] w-[100%] flex justify-center items-center "  style={{
        backgroundImage: `url("https://prmceam.ac.in/wp-content/uploads/2017/05/background-learner1.jpg")`,
        backgroundSize: "cover", // Ensures the image covers the div
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the image
       // Example height
        width: "100%"   // Example width
      }}>
        <div className="h-[83%] md:h-[93%] xl:h-[87%] md:w-[50%] w-[80%] shadow-2xl  p-4  bg-white rounded-xl bg-opacity-30" >
            <div className=""> 
            <h2 className="text-xl font-bold text-center">Join Us & Start Your Shopping Journey! 🛍️
            </h2>

            </div>
            <div className="hidden md:block">
            <p className="mt-4 text-center">Sign up to unlock exclusive offers, personalized recommendations, and more!</p>
            </div>
            <form className=" flex flex-col w-[100%]  mt-5">
                <div className=" flex mb-5 gap-3 w-[100%]">
                <div className="w-[50%]">
                <label htmlFor="fname">First Name</label>
                <input 
                required
                type="text"
                placeholder="Enter First Name"
                id="fname"
                name="fname"
                value={formdata.fname}
                onChange={emailHandler}
                className="border border-black rounded p-1.5 mt-2 w-[100%]"
                />
                </div>
                <div className="w-[50%]">
                <label htmlFor="lname">Last Name</label>
                <input 
                type="text"
                placeholder="Enter Last Name"
                id="lname"
                name="lname"
                value={formdata.lname}
                onChange={emailHandler}

                className="border border-black rounded p-1.5 mt-2 w-[100%]"
                />
                </div>
                
                </div>
                <label htmlFor="email">Email Address<sup>*</sup></label>
                <input 
                required
                type="text"
                placeholder="Enter Email address"
                id="email"
                name="email"    
                value={formdata.email}
                onChange={emailHandler}
           
                className="border border-black rounded p-1.5 mt-2"
                />


                <div className=" flex mt-2 gap-3 w-[100%]">

                <div className=" w-[50%]">
                <label htmlFor="password">Create password</label>
                <div className="relative">
                <input 
                type={visible.createpass?"text":"password"}
                onChange={emailHandler}
                placeholder="password"
                id="password"
                name="password"
                value={formdata.password}
                className=" border border-black rounded p-1.5 mt-2 w-[100%]"
                />
                <button 
                value='create button'
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center  text-gray-500"
                onClick={()=>clickHandler('createpass')}>
                   {visible.createpass?(<FaRegEye className=""/>):(<FaRegEyeSlash />)}
                </button>
                </div>
                </div>

                <div className="w-[50%]">
                <label htmlFor="checkpassword">Check password</label>
                <div className="relative">
                <input 
                type={visible.confirmpass?"text":"password"}
                placeholder="confirm password"
                id="checkpassword"
                name="confirmpassword"
                onChange={emailHandler}
                value={formdata.confirmpassword}
                className="border border-black rounded p-1.5 mt-2 w-[100%]"
                />
                <button 
                value='check button'
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center  text-gray-500"
                onClick={()=>clickHandler('confirmpass')}>
                   {visible.confirmpass?(<FaRegEye className=""/>):(<FaRegEyeSlash />)}
                </button>

                </div>
                
                </div>
                </div>

                
                
            </form>
           <div className="flex flex-col ">
           <Link to='/'>
           <button 
           className="border border-1.5 border-black w-[100%] rounded p-1.5 mt-5 " 
           onClick={()=>{

            toast.success('Account created')
           }}>
           Create Account</button></Link>
             <div className="flex items-center mt-3">
      <div className="flex-grow border-t border-gray-600"></div>
      <span className="mx-2 text-gray-500">OR</span>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>
           <button className="border border-1.5 border-black w-[100%] rounded p-2 mt-3 flex justify-center items-center gap-4"><FcGoogle />Sign in with Google</button>
           </div>
        </div>
        
    </div>
    )
}

export default Signup;