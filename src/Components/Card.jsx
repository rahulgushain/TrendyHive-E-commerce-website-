import { useEffect,useState } from 'react';
import './Card.css'



export default function Card({data}){
    const [currindex,setCurrindex]=useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrindex((prev) => (prev + 1) % data.image.length);
        }, 4000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [data.image.length]);

    const clickHandler=(index)=>{
        setCurrindex(index)

    }
 

    return(
      
        <div className="flex relative flex-col justify-end w-full h-[400px]  lg:h-[500px] xl:w-[400px] text-center bg-slate-500 
         items-center p-5 ">
         <div className=' absolute transform duration-75 ease-out top-0 w-full h-full bg-red-400'>
            <img className=' w-full h-full ' src={data.image[currindex]}></img>
         </div>
         <div className='z-10 absolute right-2 bottom-[50px]'>
        <h1 className=" mt-2 text-white font-bold text-2xl">{data.heading}</h1>  
            <div className="flex gap-2 justify-center mt-2">
            {
                data.image.map((_,index)=>(
                    <button className={`w-[20px] h-[20px] rounded-full
                    ${index === currindex ? 'bg-white' : 'bg-slate-400'} focus:border-none` }
                    key={index}
                    onClick={()=>clickHandler(index)}></button>
                ))
            }
            </div>
            <p className="mt-2 text-white">
            {data.detail}

            </p>
            </div>
            <button className='bg-blue-900 border-2 mt-2 w-[200px] p-2 '>SHOP NOW</button>

        </div>
           
       
    )


}