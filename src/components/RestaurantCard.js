import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurants } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } =
    restaurants?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="font-normal">
        {avgRating} stars . {sla?.slaString}
      </h4>
      <p className="font-light text-sm">{cuisines.join(", ")}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return <div>
      <label className="absolute bg-black text-white px-2 rounded-md">Promoted</label>
      <RestaurantCard {...props}></RestaurantCard>
    </div>
  }
}

export default RestaurantCard;
