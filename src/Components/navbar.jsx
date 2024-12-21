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
    <div className="fixed w-full z-50">
      <div className="relative flex  items-center justify-between p-2 bg-gray-500 w-full ">
        <Link to="/home">
          <div className="w-[80px] h-[80px] rounded-full">
            <img className="rounded-full w-full h-full" src={logo}></img>
          </div>
        </Link>
        <nav className="flex  justify-between items-center h-[50px] ">
          <div className="flex bg-white items-center rounded-xl">
            <Search />
           
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <div className="lg:flex gap-5 items-center text-white hidden ">
            <ul className="flex items-center gap-5">
              <li>
                <Link to="/support">About</Link>
              </li>
              <li>
                <Link to="/labs">contact us</Link>
              </li>
            </ul>
            {!islogin && (
              <button>
                <Link to="/">Log in</Link>
              </button>
            )}
            {!islogin && (
              <button>
                <Link to="/signup"> sign up</Link>
              </button>
            )}
            {islogin && (
              <button
                onClick={() => {
                  setlogin(!islogin);
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

          <div>
            {select && (
              <div
                className="flex flex-col fixed right-0 top-[100px] 
                 lg:hidden bg-slate-500  text-white text-2xl w-[300px] p-4"
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
          <div className="flex gap-5 items-center">
          <Link to="/cart">
            <div className="relative ">
              <MdOutlineShoppingBag className="text-white text-3xl " />
              <div className="absolute flex justify-center items-center right-5 font-bold bg-red-600 text-white  rounded-full w-[20px]  h-[20px] top-0">
                {cart.cart.length}
              </div>
            </div>
          </Link>
          <div>
            <button className="relative " 
             onClick={clickFavHandler}>
              <FaRegHeart
                className="text-white text-[28px]"
               
              />
              <div className="absolute   right-5 font-bold bg-red-600 text-white  rounded-full w-[20px]  h-[20px] top-0">
                {cart.wishList.length}
              </div>
            </button>
          </div>
          <div
            className="text-white block lg:hidden text-4xl"
            onClick={clickHandler}
          >
            {select ? <ImCross /> : <IoMenu />}
          </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 w-full h-[50px] text-center  bg-opacity-85">
        <ul className="flex justify-center items-center h-full gap-3 md:gap-7 text-center text-white w-full">
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
