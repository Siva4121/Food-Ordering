import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
import no from "../assets/no.png"

function Restlist({ value }) {
    let imgi = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    let [sl, ssl] = useState(false)
    let dispatch = useDispatch();
    function hc() {
        ssl(!sl)
    }
    let handleSubmit = (i) => {
        dispatch(addItem(i))
    }
    return (
        <div className="rounded-xl bg-white shadow-md overflow-hidden mb-6">

            <div
                className="text-lg font-semibold py-3 px-5 bg-gray-700 text-white cursor-pointer hover:bg-teal-600 transition flex justify-between"
                onClick={hc}>
                <div>{value.card.card.title}</div> <div>⮟</div>
            </div>

            <div>
                {
                    value.card.card.itemCards != undefined
                        ? sl && value.card.card.itemCards.map((x, i) =>

                            <div className="flex p-5 gap-6 justify-between border-b border-gray-200 hover:bg-gray-50 transition">

                                <div className="flex flex-col justify-center gap-2 w-[70%]">

                                    <div className="font-semibold text-gray-800">
                                        {x.card.info.name}
                                    </div>

                                    <div className="text-sm">
                                        {x.card.info.description != undefined
                                            ? x.card.info.description
                                            : "Description not available"}
                                    </div>

                                    <div className="text-green-600 font-semibold">
                                        ₹ {Math.floor(x.card.info.price / 100)}
                                    </div>

                                </div>

                                <div className="relative flex flex-col items-center">

                                    <img
                                        className="h-25 w-30 object-cover rounded-lg"
                                        src={x.card.info.imageId != undefined ? imgi + x.card.info.imageId : no}
                                        alt="no image"
                                    />

                                    <button
                                        className="absolute -bottom-2 bg-gray-200 text-green-600 font-bold px-3 py-1 rounded-md shadow-md border hover:bg-green-50 cursor-pointer"
                                        onClick={() => handleSubmit(x)}
                                    >
                                        ADD +
                                    </button>

                                </div>

                            </div>

                        )
                        : <div className="p-5 text-gray-500">not available....</div>
                }
            </div>
        </div>
    )
}
export default Restlist;