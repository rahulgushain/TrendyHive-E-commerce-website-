import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context";
import Product from "./product";
import Footer from "./footer";
import "./Detail.css";
import { FaRegHeart } from "react-icons/fa";


import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { GoHeartFill } from "react-icons/go";

export default function DetailPage() {
  const { data,removeHandler,cart, wishList,addHandler,heartHandler,heartRemoveHandler } = useContext(DataContext);
  const { proid } = useParams();
  const [mainimg, setMainImg] = useState("");
  const [product, setProduct] = useState(null);

  const URL = `http://localhost:4000/data/${proid}`;

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const output = await response.json();
      setProduct(output);
      setMainImg(output.image);
    } catch (error) {
      console.error("Error found:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [proid]);


  if (!product) {
    return <div>Loading...</div>;
  }


  const mouseHandler = (img) => {
    setMainImg(img);
  };

  const Controls = () => {
    const { zoomIn, zoomOut } = useControls();
    return (
        <div className='absolute left-2 top-2 z-20'>
            <button className='text-2xl w-9 h-16 bg-green-200 block' onMouseDownCapture={() => zoomIn()}>+</button>
            <button className='text-2xl w-9 h-16 bg-green-200 mt-2 block' onMouseUpCapture={() => zoomOut()}>-</button>
        </div>
    );
};
  return (
    <div>
      <div className="bg-black p-2  text-white text-2xl  h-full text-center">
        <p>Product Details</p>
      </div>
      <div className="md:flex md:justify-evenly min-h-[600px]  w-full text-black bg-gray-200 gap-5 p-5 ">
        <div className="relative min-h-[600px] w-full gap-6 md:w-[40%]  p-2  justify-center flex flex-col items-center border-2 border-gray-400 ">
        
       
          <div className="flex items-center justify-center relative content-center max-w-[450px]  max-h-[450px] border-2  overflow-hidden">
          <div className="absolute text-green-300 top-4 text-xl right-4 z-20">
        {wishList?.some((p) => p.id === product.id) ? (
                      <GoHeartFill
                        onClick={()=> heartRemoveHandler(product)}
                        className="text-red-500 text-3xl "
                      />
                    ) : (
                      <FaRegHeart onClick={()=> heartHandler(product)} className="text-3xl" />
                    )}
                    </div>
          <TransformWrapper>
              <Controls/>
                <TransformComponent>
                  <img
                    src={mainimg}
                    className="object-cover"
                    alt="test"
                  />
                </TransformComponent>
              </TransformWrapper>
          </div>
          <div className="mt-5 flex gap-2 w-full h-[100px] justify-center items-center">
            <img
              className="w-[100px] h-[100px] border-2 border-gray-400"
              src={product.img1}
              alt={product.title}
              onMouseOver={() => mouseHandler(product.img1)}
            />{" "}
            <img
              className="w-[100px] h-[100px] border-2 border-gray-400"
              src={product.img2}
              alt={product.title}
              onMouseOver={() => mouseHandler(product.img2)}
            />{" "}
            <img
              className="w-[100px] h-[100px] border-2 border-gray-400"
              src={product.img3}
              alt={product.title}
              onMouseOver={() => mouseHandler(product.img3)}
            />
          </div>
        </div>
        <div className="min-h-[500px] p-3  w-full md:w-[50%] ">
          <div className="text-center text-4xl text-red-950  capitalize">
            {product.title}
          </div>
          <div></div>
          <div>
            <p className="text-bold text-2xl mt-5 text-red-950">Description</p>
            {product.des}
          </div>
          <div>
            {product.category === "Electronic" ? (
              <div>
                <div>
                  <p className="text-bold text-2xl mt-5 text-red-950">
                    overview:
                  </p>
                  {product.overview}
                </div>
                <div>
                  <p className="text-bold text-2xl text-red-950">InBox:</p>
                  {product.Inbox}
                </div>
              </div>
            ) : (
              <div>
                <div className="font-serif">
                  <p className=" font-serif text-bold text-2xl text-red-950">
                    Design
                  </p>
                  {product.design}
                </div>
                <div>
                  <p className="text-bold text-2xl text-red-950">Fit </p>
                  {product.fit}
                </div>
                <div>
                  <p className="text-bold text-2xl text-red-950">Color</p>
                  {product.color}
                </div>
                <div>
                  <p className="text-bold text-2xl text-red-950">
                    {" "}
                    Care Instructions
                  </p>
                  {product.Care}
                </div>
              </div>
            )}
          </div>
          <div>
            {cart.find((p) => p.id === proid) ? (
              <button
                className="border-2 rounded-xl border-black p-2 mt-5 text-white bg-red-500"
                onClick={()=>removeHandler(product)}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="border-2 border-black p-2 mt-5 rounded-xl text-white bg-red-500"
                onClick={()=>addHandler(product)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-2xl p-2 mt-4">Similar Products</p>

        <div className="flex justify-center flex-wrap w-full min-h-[400px] gap-5 mt-4">
          {data.filter(
              (out) =>
                out.category === product.category && out.id !== product.id)
            ?.map((out) => <Product key={out.id} item={out} />) || (
            <div>No similar products found</div>
          )}
        </div>

        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
