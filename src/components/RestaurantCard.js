import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurants} = props;
    const {cloudinaryImageId,name,avgRating,cuisines} = restaurants?.info;
    return <div className="res-card">
       <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
       <h3 className="res-name">{name}</h3>
       <h4 className="res-rating">{avgRating} stars . {restaurants.info.sla.slaString}</h4>
       <p className="res-cuisines">{cuisines.join(', ')}</p>
    </div>
  }

  
  export default RestaurantCard;