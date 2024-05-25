import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
   
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API+resId);
            const json = await data.json();
            setresInfo(json.data);
        }catch (error) {

            setresInfo({error});
      
          }
    }
    return resInfo;
}

export default useRestaurantMenu;