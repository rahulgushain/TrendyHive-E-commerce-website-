import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";

import { useDispatch, useSelector } from "react-redux";
import {add, remove,addWishList,removeWishList,} from "../Components/redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./Context";



export default function Product({item}) {
  const {removeHandler,cart, wishList,addHandler,heartHandler,heartRemoveHandler} = useContext(DataContext)
  // const { cart, wishList } = useSelector((state) => state.cart);
  // setItem(item)
  // console.log(item)

  // const dispatch = useDispatch();

  // const removeHandler = () => {
  //   dispatch(remove(item.id));
  //   toast.error("REMOVED");
  // };
  // const addHandler = () => {
  //   dispatch(add(item));
  //   toast.success("ADDED");
  // };

  // const heartHandler = () => {
  //   dispatch(addWishList(item));
  //   toast.success("Add in Favourte");
  // };
  // const heartRemoveHandler = () => {
  //   dispatch(removeWishList(item.id));
  //   toast.error("remove Favourte");
  // };

  return (
    <div className="border-gray-500 border-2 rounded-xl p-2">
      <div key={item.id} className="h-[400px] w-[300px]">
        <div className="w-full h-[80%]">
          <Link to={`/details/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-fill rounded-xl"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center h-[20%]">
          <h3 className="text-center font-bold">{item.title}</h3>
          <div className="flex justify-between mt-4">
            <p>Price: ${item.price}</p>
            {wishList?.some((p) => p.id === item.id) ? (
              <GoHeartFill
                onClick={()=> heartRemoveHandler(item)}
                className="text-red-500 text-3xl "
              />
            ) : (
              <FaRegHeart onClick={()=> heartHandler(item)} className="text-3xl" />
            )}
          </div>
          <div className="text-white line-clamp-1">{item.des}</div>
        </div>
      </div>
      <div className="text-center rounded-xl bg-red-400">
        {cart.find((p) => p.id === item.id) ? (
          <button onClick={()=> removeHandler(item)} className="p-2 text-white w-full rounded-xl ">
            Remove From BAG
          </button>
        ) : (
          <button onClick={()=> addHandler(item)} className="p-2 text-white  w-full rounded-xl">
            ADD TO BAG
          </button>
        )}
      </div>
    </div>
  );
}
