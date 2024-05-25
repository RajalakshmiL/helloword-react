import Shimmer from "./Shimmer";
import { CDN_MENU_URL, MENU_API} from "../utils/constants";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(false);
    const {resId} = useParams();
    
    // updated - opening and closing same accordion functionality.
    const updateActiveIndex = (index) => {
        if(showIndex === index){
            setShowIndex(null);
        }  else{
            setShowIndex(index);
        }
    };
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage,avgRating,sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const count = itemCards && itemCards.length >0 ? itemCards.length : 0;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    
    return (<div className="p-4 m-4 text-center">
        <h1  className="font-bold text-xl">{name}</h1>
        <h3>{avgRating} - {costForTwoMessage}</h3>
        <h3 className="font-light text-sm">{cuisines.join(", ")}</h3>
        <h3 className="font-bold text-sm text-red-500">{sla?.slaString}</h3>
        
        {categories.map((category,index) => 
        // COntrolled Components
        
        <RestaurantCategory key={category?.card?.card
        ?.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
        setShowIndex = {() => updateActiveIndex(index)}
        />
   
        )}
    </div>
    )
}

export default RestaurantMenu;