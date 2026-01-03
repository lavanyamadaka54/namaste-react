import RestaurantCard from "./RestaurantCard";
import { fetchedResData } from "../utils/mockData";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredResListData, setFilteredResListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      setResListData(fetchedResData);
      setFilteredResListData(fetchedResData);
    }, 2000);
  };

  const getFilteredList = () => {
    const filteredList = resListData?.filter(
      (res) => res?.card?.card?.info?.avgRating > 4
    );
    setFilteredResListData(filteredList);
  };

  if (resListData?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body-container">
      <div className="search-filter-btn">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredSearchList = resListData.filter((rest) =>
              rest?.card?.card?.info?.name
                ?.toLowerCase()
                ?.includes(searchText.toLowerCase())
            );
            setFilteredResListData(filteredSearchList);
          }}
        >
          Search
        </button>
      </div>
      <button className="filterButton" onClick={getFilteredList}>
        Get Most Rated Restaurants
      </button>

      <div className="cards-container">
        {filteredResListData?.map((restaurant) => (
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
