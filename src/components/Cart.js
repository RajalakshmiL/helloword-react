import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-1 m-1 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1 className="m-3">Cart is empty. Pls add items to the cart.</h1>}
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}></ItemList>
        </div>
    </div>
}

export default Cart;