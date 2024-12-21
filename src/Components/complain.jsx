
export default function Complain({data}){
    return(
        <div className="flex flex-col items-center
         text-center p-4 justify-center w-[300px] h-[250px] bg-green-100 shadow-2xl">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="mt-4">{data.des}</p>
            <p className="text-blue-800 mt-4">{data.contact}</p>

        </div>
    )
}