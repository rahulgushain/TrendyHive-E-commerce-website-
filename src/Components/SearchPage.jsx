import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context";
import Product from "./product";
import Filter from "./Filter";
import Footer from "./footer";

export default function SearchPage() {
  const { searchFilter } = useContext(DataContext);
  const { title } = useParams();

  return (
    <div>
      <div className="flex gap-5 w-full h-full">
        {/* Sidebar Filter */}
        <div className="w-[25%] h-[80vh] bg-gray-400 sticky top-[145px] left-0">
          <Filter />
        </div>

        {/* Main Content */}
        <div className="flex flex-col p-5 flex-wrap w-[70%] gap-5 justify-center">
          <div>
            <p className="text-center font-bold capitalize text-xl">
              {title ? `${title} Products` : "Products"}
            </p>
          </div>

          <div className="flex flex-wrap gap-[20px] justify-center mt-4">
            {searchFilter.length > 0 ? (
              searchFilter.map((item) => <Product key={item.id} item={item} />)
            ) : (
              <p className="text-center text-red-500 font-bold">
                No products found matching your search.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
