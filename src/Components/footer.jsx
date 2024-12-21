import imgh from "../Components/photos/logo-transparent-png.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import FooterList from "./footerList";
import data from "../data";

export default function Footer() {
  return (
    <div className="min-h-[400px] w-full p-5 bg-gray-200">
      <div className="flex flex-wrap gap-5 w-full">
        <div className=" flex flex-col items-center md:items-start z-20 md:w-[25vw] min-h-[200px]">
          <div className="j w-[100px] h-[100px] bg-white rounded-full ">
            <img className="w-full h-full " src={imgh} />
          </div>
          <div>
            <p className="w-full mt-3 z-20">
              TrendyHive is your ultimate online shopping destination, offering
              a diverse range of products to suit every trend and lifestyle. It
              brings convenience, affordability, and quality to your doorstep,
              all in one buzzing hive of trendy finds!
            </p>
          </div>
        </div>

        <div className="flex mt-2 md:mt-0 sm:justify-center flex-wrap  md:items-start gap-5 w-full md:w-[65vw]   min-h-[250px]  xl:p-4 md:p-2 ">
          {data.footer.map((data) => (
            <FooterList key={data.id} data={data} />
          ))}
          {/* 
          <div className="flex flex-col gap-5 w-[170px] h-[200px]">
            <p>Subsribe</p>
            <input placeholder="Your Email Address" />
            <button className="p-2 bg-blue-400 text-white">SUBSCRIBE</button>
          </div> */}
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row mt-4 md:mt-8">
        <div className=" md:w-full">
          <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
        </div>
        <div className="flex text-xl gap-5 mt-2">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaGoogle />
          <FaInstagram />
          <SlSocialLinkedin />
        </div>
      </div>
    </div>
  );
}
