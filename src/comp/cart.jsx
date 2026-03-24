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

            <div className="flex justify-center items-center m-40">
                 <Link to="/"> 
                <div className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-md">
                   Add Food To Cart
                </div></Link>
            </div>

            :

            <div className="flex justify-evenly mt-10 w-full">

                <div>
                    {a.map((x) =>
                        <div className="w-162.5 flex gap-10 justify-between border border-gray-300 rounded-xl bg-white shadow-md p-5 mt-4">

                            <div>
                                <div className="font-bold">{x.card.info.name}</div>
                                <div className="text-sm text-gray-500 m-[5%]">
                                    {x.card.info.description || "Description not available"}
                                </div>
                                <div className="text-green-600">
                                    ₹ {Math.floor(x.card.info.price / 100)}
                                </div>
                            </div>

                            <div className="w-full flex justify-end">
                                <img className="h-20 w-30 rounded-2xl" src={x.card.info.imageId != undefined ? imgi + x.card.info.imageId : no} alt="no image" />
                                <button onClick={() => dispatch(removeItem(x))} className=" h-7 flex rounded hover:bg-gray-300">❌</button>
                            </div>

                        </div>
                    )}
                </div>

                <div className="w-75 bg-white shadow-lg rounded-xl p-5 border border-gray-200 h-max">

                    <div className="text-lg font-bold text-center border-b pb-3 mb-4">
                        CART SUMMARY
                    </div>

                    <div className="space-y-2 text-gray-700">

                        {a.map((x, i) =>
                            <div key={i} className="flex justify-between text-sm">
                                <span>{x.card.info.name}</span>
                                <span>₹ {Math.floor(x.card.info.price / 100)}</span>
                            </div>
                        )}

                    </div>

                    <div className="border-t mt-4 pt-3 flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-green-600">₹ {total}</span>
                    </div>

                </div>

            </div>
    )
}

export default Cart;