import data from "../data";

export default function Icon({data}){
    return(
        <div>
            <div className="flex flex-col justify-center items-center max-w-[600px] md:w-[300px] h-[200]  text-gray-600 ">
           {data.icon}
          <div className="text-center  ">
            <h1 className="text-2xl font-bold mt-2">{data.title}</h1>
            <p className="text-xl mt-2">{data.details}</p>
          </div>
        </div>
        </div>
    )
}