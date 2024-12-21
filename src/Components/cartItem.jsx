import { useDispatch} from "react-redux"
import { remove} from "../Components/redux/slices/cartSlice";


export default function CartItem({item}){

    const dispatch = useDispatch()

    const removeHandler=()=>{
        dispatch(remove(item.id))
    }

    return(
        <div className="flex border-b-2 border-black rounded-xl gap-5 p-5 min-h-[300px] overflow-hidden ">
        <div className="w-1/2 h-[300px] overflow-hidden ">
        <img className="w-full h-full  hover:scale-[1.1]" src={item.image}/></div>
        <div  className="w-1/2 min-h-[300px]">
        <div className="min-h-[250px]">
        <div className="font-bold text-center">{item.title}</div>
        <div className="flex">
            <div className="mt-4 text-red-500 text-xl font-bold">${item.price}</div>
            <div></div>
        </div>
        <div className="mt-7 text-gray-700">Description: {item.des}</div>
        <div className="mt-0  text-gray-700">Color: {item.color}</div>
       
        
        </div>
        <div  className="flex flex-col md:justify-between  gap-4 md:flex-row">
            <button className=" border-gray-600 border-2 p-2 bg-red-500 rounded-xl text-white">Buy Now</button>
            <button className=" border-gray-600 border-2 p-2 bg-red-500 rounded-xl text-white"
            onClick={removeHandler}>Remove From Cart</button>
        </div>
       
        </div>
        </div>

    )
}