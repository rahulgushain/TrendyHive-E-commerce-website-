import { useEffect, useState } from "react"

export default function FirstSlider({item}){
    const [currIndex,setCurrIndex] =useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrIndex((prevIndex)=>(prevIndex + 1)% item.length)
        },5000);
        return()=>clearInterval(interval)
    },[item])

    

    return(
        <div className="relative w-full h-[70vh] p-6"> 
        <div  className=" flex absolute w-full h-full top-0 left-0 transition-transform duration-700 ease-in-out "
      >
      
            <img  className="w-full h-full" src={item[currIndex]}  />      
          
        </div>
        <div className="flex justify-center items-end gap-6 h-full">
            {
                item.map((_,index)=>(
                    <button
                    key={index}
                    className={`flex w-[20px] h-[20px] rounded-full z-10 bg-gray-200 
                     ${index === currIndex ? 'bg-white' : 'bg-slate-400'} focus:border-none `}
                    onClick={()=>setCurrIndex(index)}
                    >

                    </button>
                ))
            }
        </div>
            
        </div>
    )
}