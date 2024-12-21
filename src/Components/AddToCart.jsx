import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./redux/slices/cartSlice";
import { remove, add } from "./redux/slices/cartSlice";

export default function AddToCart() {
    const dispatch = useDispatch()
    const {cart} = useSelector ((state)=> state.cart)
    
  const removeHandler=()=>{
    dispatch(remove(proid))
    toast.error("removed")

  }
  const addHandler=()=>{
    dispatch(add(product))
    toast.success("Added")

  }


  return (
    <div>
        {
            cart.find((p)=> p.id === item.id || proid ) ? <button onClick={removeHandler}>Remove from cart</button>:<button onClick={addHandler}>Add to cart</button>
        }
    </div>
  );
}
