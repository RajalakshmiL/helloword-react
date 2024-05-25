import { useDispatch } from "react-redux";
import { CDN_MENU_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{
    const dispatch = useDispatch();
    const handleAddCart = (item) => {
        dispatch(addItem(item));
    }
    return <div>
        {items.map((item) => 
            <div key={item?.card?.info?.id} className="p-2 m-2 text-left border-b-2 border-gray-200 flex justify-between">
                <div className="">
                    <p className="py-2"><span className="font-semibold">{item?.card?.info?.name}</span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
                    <p className="text-sm">{item?.card?.info?.description}</p>
                  
                </div>
                
                <div>  
                    <div className="absolute flex justify-center"><button className="p-[2] rounded-sm bg-black text-white" onClick={()=>handleAddCart(item)}>Add+</button></div>
                    {item?.card?.info?.imageId ? <img src={CDN_MENU_URL + item?.card?.info?.imageId} className="w-24"></img> : ''}
                </div>
            </div>
        )}
    </div>
}

export default ItemList;