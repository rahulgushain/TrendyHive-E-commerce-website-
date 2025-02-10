import data from "../data";
import Card from "./Card";
import "./home.css";
import Slider from "./slider";

import { useEffect, useRef } from "react";
import Icon from "./icon";
import Footer from "./footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import FirstSlider from "./FirstSlider";

function Home() {
  const sliderRef = useRef(null);

  // Handler to scroll right
  const rightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth, // Scroll by one slide's width
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  };

  // Handler to scroll left
  const leftHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth, // Scroll back by one slide's width
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  };

  useEffect(()=>{
    Aos.init({
      duration:1200
    })
  })
  return (
    <div className="  overflow-hidden">
      <div className=" flex justify-center md:justify-start  bgimage p-5  text-white md:text-amber-950">
        <div className="flex flex-col justify-center  ">
          <h2 className="sm:w-[500px] md:w-[600px] text-2xl sm:text-5xl md:text-6xl">
            Raining Offers For this Cold winter!
          </h2>
          <p className="text-2xl mt-4 ">25% OFF On All Product </p>
          <div className="flex gap-5 flex-col md:flex-row mt-4 ">
          <Link to="products/All">
           <button className="bg-red-500 text-white w-full rounded-xl p-1.5 md:p-3 hover:scale-[1.2] ">
              View all product
            </button>
            </Link>
            {/* <button className="bg-gray-500 border-2 border-gray-800 rounded p-1.5 md:p-3 hover:scale-[1.2] ">
              find more
            </button> */}
          </div>
        </div>
      </div>
      <div className=" min-h-[200px] relative p-2 ">
        {
         
          <FirstSlider item={data.FirstSlider}/>
          
        }
      </div>
      <div className="flex flex-col gap-2 items-center md:flex-row w-full min-h-[300px] justify-evenly p-9" 
      data-aos="flip-down">
        {data.sections.map((data) => (
          <Card data={data} />
        ))}
      </div>
      <div className="flex p-5 text-center flex-col justify-center items-center w-full min-h-[200px] bg-black" data-aos="flip-up">
        <p className="font-bold text-3xl text-white ">
          Find Everything You Need, All in One Place
        </p>
        <p className="max-w-[500px] text-white  mt-4">
          Looking for the perfect gift? Or perhaps a little something to treat
          yourself? Explore our wide range of categories, filled with unique
          finds and popular picks. With deals and discounts updated regularly,
          you’re sure to snag something special!
        </p>
      </div>
      <div className=" w-full min-h-[400px] mt-4 p-5">
        <p className=" relative w-full text-center font-bold text-2xl p-5 ">
          Most Sale Product
        </p>
        <div
          ref={sliderRef}
          className="scrollbar-none flex gap-5 overflow-x-scroll scroll-snap-x snap-mandatory items-center"
        >
          <div
            className=" flex absolute cursor-pointer items-center text-5xl text-gray-700 left-0"
            onClick={leftHandler}
          >
            {"<"}
          </div>
          <div
            className="absolute cursor-pointer  text-5xl text-gray-700  right-0 "
            onClick={rightHandler}
          >
            {">"}
          </div>

          {data.slider.map((data) => (
            <Slider key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="secondbg  p-5 overflow-hidden ">
      <div className="max-w-[600px] text-white">
        <p className="font-bold">Limited Time Offer</p>
        <h2 className="font-bold text-5xl mt-2">Special Edition</h2>
        <p className=" text-xl mt-4">
          This winter, wrap yourself in warmth and style with our exclusive
          collection. From snug sweaters and chic jackets to trendy accessories,
          our Winter Special Edition has everything you need to stay fashionable
          and comfortable.
          <p>Shop now and make this winter your most stylish season yet!</p>
        </p>
        <p className="font-bold text-2xl mt-2">
          Buy At 20% Discount,Use Code OFF20{" "}
        </p>
        <button className="font-bold text-2xl mt-4 border p-2 bg-slate-500">
          Shop Now
        </button>
        </div>
      </div>
      <div className=" flex flex-wrap p-5 justify-center gap-9 text-7xl min-h-[250px]  w-full mt-3">
        {data.icons.map((data) => (
          <Icon key={data.id} data={data} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
