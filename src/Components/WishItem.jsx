import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove, removeWishList } from "./redux/slices/cartSlice";

export default function WishItem({ item }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [rate, setRate] = useState(item.rating);
  const clickHandler = (starvalue) => {
    setRate(starvalue);
  };

  const clickAddHandler = () => {
    dispatch(add(item));
    toast.success("ADDED");
  };
  const clickRemoveHandler = () => {
    dispatch(remove(item.id));
    toast.error("removed");
  };
  const deleteHandler = () => {
    dispatch(removeWishList(item.id));
    toast.error("removed");
  };

  return (
    <div className="flex mt-3 items-center h-[200px] rounded-xl border-b-2 border-black ">
      <div className="w-[150px] h-[150px] ">
        <img className="w-full h-full" src={item.image} />
      </div>
      <div className="p-4">
        <div className="text-center font-bold capitalize ">{item.title}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-red-600">${item.price}</div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => {
              const starvalue = index + 1;
              return (
                <FaStar
                  key={index}
                  style={{
                    color: starvalue <= rate ? "gold" : "gray", // Dynamically set color
                    cursor: "pointer", // Add pointer cursor for interactivity
                  }}
                  color={starvalue <= rate ? "yellow" : "gray"}
                  onClick={() => clickHandler(starvalue)}
                />
              );
            })}
          </div>
        </div>

        <div className="w-[300px] text-blue-600 line-clamp-3">{item.des}</div>
        <div className="flex gap-5 items-center">
          {cart.find((p) => p.id === item.id) ? (
            <button
              className="bg-green-400 rounded-xl mt-2 border-black border-2 text-xl  w-full"
              onClick={clickRemoveHandler}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="bg-green-400 rounded-xl mt-2 border-black border-2 text-lg w-full"
              onClick={clickAddHandler}
            >
   
              Add To Cart
            </button>
          )}

          <button
            className="bg-red-500 rounded-xl mt-2 border-black border-2 text-lg text-white p-[5px] "
            onClick={deleteHandler}
          >
            <MdDelete className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
