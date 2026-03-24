import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RestaurentMenuData } from "../assets/RestaurentMenuData";
import Restlist from "./restlist";
function Rest() {
    // let [res,se]=useState([])
    // fetch="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01020&lng=76.97010&restaurantId=737927"
    // .then((val)=>val.json())
    // .then((re)=>console.log(re))
    let [res, se] = useState(null);
    let p = useParams();
    let ress = RestaurentMenuData.filter((x) => x.data.cards[2].card.card.info.id == p.id)
    useEffect(() => se(ress[0]), [])

    return (res == null ? <div>Loading....</div> :
        <div className="rc py-[5vh] px-[15vw]">
            <div className="rt text-center pb-[5vh] text-[1.5rem]">{res.data.cards[0].card.card != undefined ? res.data.cards[0].card.card.text : res.data.cards[2].card.card.info.name}</div>
            <div className="rmc flex flex-col gap-8">
                {
                    res.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map((x, i) =>
                      <Restlist key={i} value={x}/>)
                        
                }
            </div>
        </div>)
}
export default Rest;