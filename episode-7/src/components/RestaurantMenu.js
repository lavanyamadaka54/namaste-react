import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchedResData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  const fetchMenu = () => {
    const menuData = fetchedResData?.find(
      (res) => res?.card?.card?.info?.id === resId
    );
    setTimeout(() => {
      setResMenu(menuData);
    }, 1000);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cloudinaryImageId, locality, costForTwo, menu } =
    resMenu?.card?.card?.info;
    
  return (
    <div className="menu-main-container">
      <h1>Restaurant Name: {name}</h1>
      <h2>Location: {locality}</h2>
      <img
        className="restro-img-menupage"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="resCard"
      />
      <h2>Cost For Two - {costForTwo}</h2>
      <ul>
        {menu?.map((menuItem) => (
          <li
            key={menuItem.itemId}
          >{`Item: ${menuItem.name} - RS: ${menuItem.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
