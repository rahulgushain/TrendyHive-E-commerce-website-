import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./product"; // A reusable component for rendering a single product
import Filter from "./Filter"; // Your Filter component
import { DataContext } from "./Context";
import Footer from "./footer";
import Icon from "./icon";
import data from "../data";


export default function Products() {
  const {filteredData,fetchData} =useContext(DataContext)
  const { procategory } = useParams();
  console.log(procategory)
 

  useEffect(() => {
    fetchData();
  }, [procategory]); 
console.log(filteredData)
  return (
    <div>
    <div  className="flex gap-5">
      {/* Filter Sidebar */}
      <div className="w-[25%] h-[80vh] bg-gray-400 sticky top-[145px] left-0">
        {/* Pass category-filtered data and a function to update the filtered results */}
        <Filter/>
      </div>

      {/* Products Grid */}
      <div className="w-[70%]">
        <h2 className="font-bold text-center text-2xl mt-4 animate__bounceInLeft">
          Products
        </h2>
        <div className="flex flex-wrap gap-[20px] justify-center mt-4">
          {filteredData.length > 0 ? (
            filteredData?.map((item) => (
              <Product key={item.id} item={item}/>
            ))
          ) : (
            <div>No products found with the selected filters.</div>
          )}
        </div>
      </div>
      </div>
      <div className=" flex flex-wrap p-5 justify-center gap-9 text-7xl min-h-[250px]  w-full mt-3">
        {data.icons.map((data) => (
          <Icon key={data.id} data={data} />
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
