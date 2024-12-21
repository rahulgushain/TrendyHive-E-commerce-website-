
export default function Team({data}){
    return(
        <div className= "mt-5 flex flex-col items-center w-[250px] h-[200px] bg-gray-300 ">
            <div >
                <img src={data.image}></img>
            </div>
            <h2>{data.name}</h2>
            <p>{data.role}</p>
        </div>
    )
}