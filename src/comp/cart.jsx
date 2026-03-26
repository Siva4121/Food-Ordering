import { removeItem } from "./cartSlice";
import { FaRegTired } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import no from "../assets/no.png"
import { Link } from "react-router";

function Cart() {

    let dispatch = useDispatch();
    let imgi = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    let a = useSelector((store) => store.cart.cartList);

    let total = 0;
    a.map((x) => {
        total += Math.floor(x.card.info.price / 100)
    })

    return (
        a.length == 0 ?

            <div className="flex justify-center items-center mt-20 sm:m-40 px-4">
                <Link to="/">
                    <div className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-md text-center">
                        Add Food To Cart
                    </div>
                </Link>
            </div>

            :

            <div className="flex flex-col lg:flex-row justify-evenly mt-6 sm:mt-10 w-full px-2 sm:px-6 gap-6">

                {/* LEFT - ITEMS */}
                <div className="w-full lg:w-[60%]">
                    {a.map((x, i) =>
                        <div className="w-full flex flex-row items-center justify-between 
border border-gray-300 rounded-xl bg-white shadow-md 
p-3 sm:p-5 mt-4">

    {/* LEFT TEXT */}
    <div className="flex-1 pr-3">
        <div className="font-bold text-sm sm:text-base">
            {x.card.info.name}
        </div>

        <div className="text-xs sm:text-sm text-gray-500 my-1 line-clamp-2">
            {x.card.info.description || "Description not available"}
        </div>

        <div className="text-green-600 text-sm sm:text-base">
            ₹ {Math.floor(x.card.info.price / 100)}
        </div>
    </div>

    {/* RIGHT IMAGE + DELETE */}
    <div className="flex items-center gap-3">

        <img
            className="h-17.5 w-22.5 sm:h-20 sm:w-30 rounded-xl object-cover"
            src={x.card.info.imageId != undefined ? imgi + x.card.info.imageId : no}
        />

        <button
            onClick={() => dispatch(removeItem(x))}
            className="text-red-500 text-lg"
        >
            ❌
        </button>

    </div>

</div>
                    )}
                </div>

                {/* RIGHT - SUMMARY */}
                <div className="w-full lg:w-[30%] bg-white shadow-lg rounded-xl p-4 sm:p-5 border border-gray-200 h-max">

                    <div className="text-base sm:text-lg font-bold text-center border-b pb-3 mb-4">
                        CART SUMMARY
                    </div>

                    <div className="space-y-2 text-gray-700">

                        {a.map((x, i) =>
                            <div key={i} className="flex justify-between text-xs sm:text-sm">
                                <span className="truncate w-[70%]">{x.card.info.name}</span>
                                <span>₹ {Math.floor(x.card.info.price / 100)}</span>
                            </div>
                        )}

                    </div>

                    <div className="border-t mt-4 pt-3 flex justify-between font-semibold text-base sm:text-lg">
                        <span>Total</span>
                        <span className="text-green-600">₹ {total}</span>
                    </div>

                </div>

            </div>
    )
}

export default Cart;
