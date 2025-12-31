import RestaurantCard from "./RestaurantCard";
import { resDataList } from "../utils/mockData";
import React, { useState } from "react";

const Search = () => {
  return (
    <div>
      <h2>Search</h2>
    </div>
  );
};

const Body = () => {
  const [resListData, setResListData] = useState(resDataList);

  const getFilteredList = () => {
    const filteredList = resListData?.filter(
      (res) => res?.card?.card?.info?.avgRating > 4
    );

    setResListData(filteredList);
  };

  return (
    <div className="body-container">
      <div className="search">
        <Search />
      </div>
      <button className="filterButton" onClick={getFilteredList}>
        Get Most Rated Restaurants
      </button>
      <div className="cards-container">
        {resListData?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            restData={restaurant?.card?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
