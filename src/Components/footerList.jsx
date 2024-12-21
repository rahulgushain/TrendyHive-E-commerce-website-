
export default function FooterList({ data }) {
 
  return (
    <div>
      <div className="sm:w-[170px] xl:w-[170px] lg:w-[200px] 2xl:w-[170px]  h-[200px] ">
        <p className="font-bold text-xl">{data.title}</p>
        <ul className="mt-4">
          {data.list.map((item, index) => (
            <li
              key={index}
              className=""
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
