import { useSelector } from "react-redux";
import WishItem from "./WishItem";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function WishList({ isOpen, setIsOpen }) {
  const { wishList } = useSelector((state) => state.cart);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  useEffect(() => {
    Aos.init({
      duration: 400,
    });
  });

  return (
    <div
      className="absolute right-0 top-0 bg-slate-300  h-[80vh] rounded-xl min-w-[500px] p-5
       overflow-y-scroll transition-transform duration-100 ease-in-out z-10
       scrollbar-thin "
      data-aos="fade-left"
    >
      <div className="flex sticky top-2 justify-end p-3 bg-yellow-600 ">
        <ImCross onClick={clickHandler} />
      </div>
      {wishList.length > 0 ? (
        wishList.map((item) => <WishItem key={item.id} item={item} />)
      ) : (
        <p className="text-center h-[70%] content-center ">Cart is Empty</p>
      )}
    </div>
  );
}
