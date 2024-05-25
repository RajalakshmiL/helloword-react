import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return <div>
        {/* header */}
        <div className="w-6/12 my-4 p-3 shadow-lg mx-auto">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/* Body Accordian */}
            {showItems && <ItemList items={data.itemCards}/> }
          
        </div>
        
    </div>
   
}

export default RestaurantCategory;