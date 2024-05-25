import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // Conditional Rendering
    // if(listofRestuarants.length === 0){
    //   return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks you are Offline!! Pls check your Internet Connection.</h1>
    const {setuserName,LoggedInuser} = useContext(UserContext);
    return listofRestuarants.length === 0 ? <Shimmer /> : <div className="body">
      <div className="flex items-center">
        <div className="search mx-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
   
            const filteredRestuarant = listofRestuarants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilteredRestuarants(filteredRestuarant);
            
          }}>Search</button>
        </div>
        <div className="px-4 py-2 m-4 bg-gray-100 rounded-lg">
        <button className="" onClick={()=>{
           const filteredlists = listofRestuarants.filter((res1)=> res1.info.avgRating > 4.5)
           setfilteredRestuarants(filteredlists);
        }}>Top Rated Restaurants</button>
        </div>

        <div>
          <label>User Name:</label>
          <input value={LoggedInuser} className="border border-black p-2" onChange={(e)=>setuserName(e.target.value)}></input>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarants.map((res) => <Link to={"restaurant/"+res.info.id} key={res.info.id}>
          {res.info.avgRating >= 4.5 ? <RestaurantCardPromoted restaurants={res}></RestaurantCardPromoted> : <RestaurantCard restaurants={res}></RestaurantCard>}
          </Link>)}
      </div>
    </div>
  }

  export default Body;