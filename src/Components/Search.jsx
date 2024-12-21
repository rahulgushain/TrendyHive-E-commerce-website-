import { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";

export default function Search() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const { searchFilter, setSearchFilter,setFilteredData,click, setClick } = useContext(DataContext);

    const URL = "http://localhost:4000/data";

    const ChangeHandler = (e) => {
        setClick(true);
        const value = e.target.value;
        setSearch(value);

        if (value) {
            const suggestions = data.filter((item) =>
                item?.title?.toLowerCase().includes(value.toLowerCase())
            );
            setSearchFilter(suggestions);
            setFilteredData(searchFilter)
        } else {
            setSearchFilter([]);
        }
    };

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const clickHandler = (item) => {
        setClick(false); // Close the dropdown
        setSearch(item.title); // Update the input value
    };

    return (
        <div className="flex relative items-center">
            <input
                className="p-2 rounded-md bg-none w-[120px] sm:w-[150px] lg:w-[450px] focus-visible:outline-none"
                placeholder="search here"
                value={search}
                onChange={ChangeHandler}
            />
            {click && searchFilter.length > 0 && (
                <ul className="absolute top-[70px] z-10 w-[500px] mt-1 bg-white border border-gray-300 rounded-md max-h-40 overflow-y-auto">
                    {searchFilter.map((item) => (
                        <li
                            key={item.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => clickHandler(item)}
                        >
                            <Link to={`/search/${item.title}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}

            <IoIosSearch className="text-4xl border-l-2 border-gray-400" 
                onClick={()=>setClick(false)}
            />
        </div>
    );
}
