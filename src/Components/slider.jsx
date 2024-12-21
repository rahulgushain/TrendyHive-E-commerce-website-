export default function Slider({ data }) {
  return (
    <div className="w-[350px] h-[350px] mt-2 rounded-xl hover:shadow-xl ">
      <div className="w-[350px]  overflow-hidden rounded-xl h-[300px]">
        <img className="w-full h-full bg-red-400 rounded-xl hover:scale-[1.1] " src={data.image}></img>
      </div>
      <div>
        <p className="text-center font-bold text-xl  ">{data.title}</p>
      </div>
    </div>
  );
}
