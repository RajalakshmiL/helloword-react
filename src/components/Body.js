import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((res) => <RestaurantCard key={res.info.id} restaurants={res}></RestaurantCard>)}
      </div>
    </div>
  }

  export default Body;