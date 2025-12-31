import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  return (
    <div className="card-container">
      <img
        className="restro-img"
        src={`${CDN_URL}/${restData?.cloudinaryImageId}`}
        alt="vegRice"
      />
      <h2>{restData?.name}</h2>
      <h3>{restData?.cuisines?.join(",")}</h3>
      <h3>{restData?.avgRatingString}</h3>
      <h3>{restData?.sla?.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
