import { useContext, useState } from "react";
import { DataContext } from "./Context";

export default function Filter() {
  // State for filters
  const {datas, setFilteredData} =useContext(DataContext)
  const [price, setPrice] = useState(200);
  const [selRating, setSelRating] = useState("");

  // Filter data when filters change
  const applyFilters = () => {
    const filtered = datas.filter((item) => {
      const ratingFilter = !selRating || item.rating >= parseInt(selRating);
      const priceFilter = item.price >= price;

      return ratingFilter && priceFilter;
    });

    setFilteredData(filtered); // Update filtered data in the parent component
  };

  // Trigger filtering when filters change
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    applyFilters();
  };

  const handleRatingChange = (e) => {
    setSelRating(e.target.value);
    applyFilters();
  };

  return (
    <div className="p-5">
      <div className="text-xl font-bold mb-4">Filter</div>

      {/* Rating Filter */}
      <div className="mb-6">
        <p className="font-medium mb-2">Rating</p>
        <select
          value={selRating}
          onChange={handleRatingChange}
          className="border rounded p-2 w-full"
        >
          <option value="">All Ratings</option>
          <option value="4">4 Star & Above</option>
          <option value="3">3 Star & Above</option>
          <option value="2">2 Star & Above</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <p className="font-medium mb-2">Price</p>
        <input
          type="range"
          id="range"
          min="0"
          max="1000"
          value={price}
          onChange={handlePriceChange}
          className="w-full cursor-pointer"
        />
        <label htmlFor="range" className="block mt-1">
          Selected Price: ${price}
        </label>
      </div>
    </div>
  );
}
