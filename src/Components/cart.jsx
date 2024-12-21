import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartItem from "./cartItem"

export default function Cart(){
    const { cart } = useSelector((state)=>state.cart)
    const [totalAmount,setTotalAmount] = useState(0)

    console.log(cart)
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0))
    },[cart])
    return(
        <div className="mt-5">
            {
                cart?.length > 0 ?  
                (<div className=" flex md:flex-row flex-col justify-center gap-4">

                <div className="flex md:w-[50%] w-full h-full gap-5 flex-col ">
                    {
                        cart.map((item)=>(
                            <CartItem key={item.id} item={item}/>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5 w-full md:w-[30%] h-[250px] bg-blue-200  rounded-xl p-5 mt-5 sticky top-[150px]"> 
                <div className="flex justify-between text-xl lg:text-2xl" ><p>Number of items:</p><p>{cart.length}</p></div>
                <div className="flex justify-between text-xl lg:text-2xl"><p>Delivery charges:</p> <p>Free</p></div>
                <div className="flex justify-between border-b-2 border-t-2 border-gray-600 text-xl lg:text-2xl"><p>TotalAmount:</p><p>${totalAmount}</p></div>
                <div className="text-xl "><button className="bg-red-500 p-2 w-full text-white rounded-xl">Purchase this product</button></div>

                </div>
                </div>

                ):(<p className="text-center text-2xl font-bold">Cart is empty </p>)
            }
        </div>
    )
}