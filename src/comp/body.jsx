import { useEffect, useState } from "react";
import Card from "./Card";
import a from "../assets/constant";
import { RestaurentData } from "../assets/RestaurentData";
function Body() {
    // let [data, set] = useState([])
    // let [dta, setda] = useState([])


    let [data, set] = useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    let [dta, setda] = useState(RestaurentData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    // function Data() {
    //     fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //         //.then(res => res.json())
    //         //.then(data => console.log(data));
    //         .then((val) => val.json())
    //         .then((i) => {
    //             set(i.data.cards[1].card.card.
    //                 gridElements.infoWithStyle.restaurants)
    //             setda(i.data.cards[1].card.card.
    //                 gridElements.infoWithStyle.restaurants)
    //         }
    //         )
    // }
    // useEffect(() => Data(), [])

    function hs() {
        let tinput = document.getElementById("sinput").value;
        //let re=data.filter((element,index)=>tinput.toLowerCase()==element.info.name.toLowerCase())

        let re = dta.filter((c) => c.info.name.toLowerCase().includes(tinput.toLowerCase()))
        set(re)

    }

    return <div>
        <div className="bg-gray-100 m-3 rounded-2xl">

            <div className="relative rounded-2xl">

                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                    className="w-full h-56 object-cover rounded-2xl "
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 rounded-2xl">
                    <h1 className="text-3xl font-bold mb-2">
                        Delicious Food Delivered Fast
                    </h1>

                    <p className="text-md">
                        Order your favorite meals anytime
                    </p>
                </div>

            </div>

        </div>

        <div className="main flex justify-center" >
            <input className="p-2 mt-7 mb-6 border-2 border-gray-400 w-75 text-[20px]
            transition duration-300
            focus:shadow-[0_0_10px_#3b82f6] focus:border-black -500 focus:outline-none" placeholder="Enter Restaurent Name" type="text" id="sinput" onChange={hs} />
            {/* <button onClick={hs}>Search</button> */}
        </div>

        <div className="sec flex flex-wrap gap-y-12 justify-evenly ">
            {
                data.map((v, y) =>
                    <Card key={v.info.id} val={v} />)
            }

        </div>
    </div>
}
export default Body;