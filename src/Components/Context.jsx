import { createContext, useEffect, useState } from "react";
import {add, remove,addWishList,removeWishList,} from "../Components/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";


export const DataContext = createContext();

export default function ContextFunc({ children }) {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [searchFilter,setSearchFilter] = useState([])
  const [click, setClick] = useState(true);
  const [filteredData, setFilteredData] = useState([]); // Data filtered by category, rating, and price
  const [datas, setDatas] = useState([]); // Filtered data by category

  const procategory = useLocation();
  console.log(procategory)
  const main =  procategory.pathname.split("/")[2]
  console.log(main)

  const dispatch = useDispatch();
  const { cart, wishList } = useSelector((state) => state.cart);              


  const removeHandler = (item) => {
    dispatch(remove(item.id));
    toast.error("REMOVED");
  };
  const addHandler = (item) => {
    dispatch(add(item));
    toast.success("ADDED");
  };

  const heartHandler = (item) => {
    dispatch(addWishList(item));
    toast.success("Add in Favourte");
  };
  const heartRemoveHandler = (item) => {
    dispatch(removeWishList(item.id));
    toast.error("remove Favourte");
  };

 console.log(procategory)

 
  
  const URL = "http://localhost:4000/data";

  const fetchData =async ()=> {
    try {
      const res = await fetch(URL);
      const result = await res.json();
      
      const categoryFilteredData =
      main === "All"
        ? result
        : result?.filter((item) => item.category === main);

    console.log(categoryFilteredData)
   setData(result)
    setDatas(categoryFilteredData); 

    setFilteredData(categoryFilteredData); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
 
  useEffect(() => {
   
    fetchData();
  }, []);
  console.log(filteredData)
  console.log(cart)

  const value = { data, setData,
    searchFilter,setSearchFilter,
    removeHandler,addHandler,heartHandler,heartRemoveHandler,
    click, setClick,
    filteredData, setFilteredData,
    datas, setDatas,cart,wishList,fetchData

   };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
