import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // whenever state variables update, react triggers  a Reconciliation cycle(Re-renders the componenet)
    const [listofRestuarants, setListofRestuarants] = useState([]);
    const [filteredRestuarants, setfilteredRestuarants] = useState([]);
    const [searchText, setsearchText] = useState("");
    
    useEffect(()=>{
      fetchData();
    },[]);
    
    //  https://corsproxy.io/?
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      //  OPtional chaining
      setListofRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
    }
    // Conditional Rendering
    // if(listofRestuarants.length === 0){
    //   return <Shimmer />
    // }

    return listofRestuarants.length === 0 ? <Shimmer /> : <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"  className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
          <button onClick={()=>{
   
            const filteredRestuarant = listofRestuarants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilteredRestuarants(filteredRestuarant);
            
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
           const filteredlists = listofRestuarants.filter((res1)=> res1.info.avgRating > 4.5)
           setfilteredRestuarants(filteredlists);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestuarants.map((res) => <RestaurantCard key={res.info.id} restaurants={res}></RestaurantCard>)}
      </div>
    </div>
  }

  export default Body;