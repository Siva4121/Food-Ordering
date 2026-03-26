import { useEffect, useState } from "react";
import Card from "./Card";
import a from "../assets/constant";
import { RestaurentData } from "../assets/RestaurentData";

function Body() {

    let [data, set] = useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    let [dta, setda] = useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    function hs() {
        let tinput = document.getElementById("sinput").value;
        let re = dta.filter((c) =>
            c.info.name.toLowerCase().includes(tinput.toLowerCase())
        )
        set(re)
    }

    return <div className="px-2 sm:px-6">

        {/* HERO SECTION */}
        <div className="bg-gray-100 m-2 sm:m-3 rounded-2xl">

            <div className="relative rounded-2xl">

                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    className="w-full h-40 sm:h-56 object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 rounded-2xl px-2 text-center">
                    <h1 className="text-xl sm:text-3xl font-bold mb-2">
                        Delicious Food Delivered Fast
                    </h1>

                    <p className="text-sm sm:text-md">
                        Order your favorite meals anytime
                    </p>
                </div>

            </div>

        </div>

        {/* SEARCH */}
        <div className="main flex justify-center">
            <input
                className="p-2 mt-5 sm:mt-7 mb-5 sm:mb-6 border-2 border-gray-400 
                w-[70%] sm:w-100 text-[16px] sm:text-[20px]
                transition duration-300
                focus:shadow-[0_0_10px_#3b82f6] focus:border-black focus:outline-none"
                placeholder="Enter Restaurent Name"
                type="text"
                id="sinput"
                onChange={hs}
            />
        </div>

        {/* CARDS */}
        <div className="sec flex flex-wrap gap-6 justify-center px-2">
            {
                data.map((v, y) =>
                    <Card key={v.info.id} val={v} />
                )
            }
        </div>

    </div>
}

export default Body;
