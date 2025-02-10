import { Link } from "react-router-dom";
import logo from "../Components/photos/logo-png.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import WishList from "./WishList";
import Search from "./Search";
import Aos from "aos";
import "aos/dist/aos.css";


function 


NavBar(prop) {
  const { cart } = useSelector((state) => state);
  const [select, setSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  let islogin = prop.islogin;
  let setlogin = prop.setlogin;

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSelect(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickHandler = () => {
    setSelect(!select);
  };
  const clickFavHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full z-50 bg-white ">
      <div className="relative flex  items-center justify-between  text-black w-full px-4 ">
        <Link to="/home">
          <div className="w-[100px] h-[100px] rounded-full">
            <img className="rounded-full w-full h-full bg-gray-500" src={logo}></img>
          </div>
        </Link>
        <nav className="flex  justify-between items-center h-[50px] ">
          <div className="flex bg-white items-center rounded-xl">
            <Search />
           
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <div className="lg:flex gap-5 items-center  hidden ">
            <ul className="flex items-center text-xl text-gray-600 gap-5">
              <li>
                <Link to="/support">About</Link>
              </li>
              <li>
                <Link to="/labs">contact us</Link>
              </li>
            </ul>
            {!islogin && (
              <button className="text-xl text-gray-600">
                <Link to="/">Log in</Link>
              </button>
            )}
            {!islogin && (
              <button className="text-xl text-gray-600">
                <Link to="/signup">Sign up</Link>
              </button>
            )}
            {islogin && (
              <button
              className="text-xl text-gray-600"
                onClick={() => {
                  setlogin(!islogin);
                }}
              >
                <Link to="/">logout</Link>
              </button>
            )}
            {islogin && (
              <button
              className="text-xl text-gray-600">
                <Link to="/dashbord">Dashbord</Link>
              </button>
            )}
          </div>

          <div>
            {select && (
              <div
                className="flex flex-col fixed right-0 top-[100px] 
                 lg:hidden bg-slate-500   text-2xl w-[300px] p-4"
                data-aos="fade-left"
              >
                <ul className="flex flex-col items-center  ">
                  <li onClick={() => setSelect(false)}>
                    <Link to="/home">Home</Link>
                  </li>
                  <li onClick={() => setSelect(false)}>
                    <Link to="/support">About</Link>
                  </li>
                  <li onClick={() => setSelect(false)}>
                    <Link to="/labs">contact us</Link>
                  </li>
                </ul>
                {!islogin && (
                  <button onClick={() => setSelect(false)}>
                    <Link to="/">Log in</Link>
                  </button>
                )}
                {!islogin && (
                  <button onClick={() => setSelect(false)}> 
                    <Link to="/signup"> sign up</Link>
                  </button>
                )}
                {islogin && (
                  <button
                    onClick={() => {
                      setlogin(!islogin);
                      localStorage.clear()
                    }}
                  >
                    <Link to="/">logout</Link>
                  </button>
                )}
                {islogin && (
                  <button>
                    <Link to="/dashbord">Dashbord</Link>
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex gap-5 text-gray-600 items-center">
          <Link to="/cart">
            <div className="relative ">
              <MdOutlineShoppingBag className=" text-3xl " />
              <div className="absolute flex justify-center items-center right-5 font-bold text-white bg-red-600  rounded-full w-[20px]  h-[20px] top-0">
                {cart.cart.length}
              </div>
            </div>
          </Link>
          <div>
            <button className="relative " 
             onClick={clickFavHandler}>
              <FaRegHeart
                className=" text-[28px]"
               
              />
              <div className="absolute text-white  right-5 font-bold bg-red-600   rounded-full w-[20px]  h-[20px] top-0">
                {cart.wishList.length}
              </div>
            </button>
          </div>
          <div
            className=" block lg:hidden text-4xl"
            onClick={clickHandler}
          >
            {select ? <ImCross /> : <IoMenu />}
          </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 w-full h-[50px] text-center  bg-opacity-85">
        <ul className="flex justify-center text-gray-700 items-center h-full gap-3 md:gap-7 text-xl text-center w-full">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products/All">All</Link>
          </li>

          <li name="Mens">
            <Link to="/products/mens">Mens</Link>
          </li>

          <li>
            <Link to="/products/womens">Women</Link>
          </li>
          <li>
            <Link to="/products/kids">kids</Link>
          </li>
          <li>
            <Link to="/products/Electronic">Electronics</Link>
          </li>
        </ul>
      </div>
      <div>
        {isOpen && (
          <div className="relative">
            <WishList isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </div>
  );
}
export default NavBar;
