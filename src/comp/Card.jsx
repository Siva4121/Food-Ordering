import { Link } from "react-router";
import { motion } from "motion/react"

function Card(i) {
    let img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (<Link to={i.val.info.id} className="card w-[20vw] p-4 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-gray-300 ">
        <motion.div
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <img className="io w-full h-[35vh] rounded-2xl object-cover hover:scale-100 transition duration-300" src={img + i.val.info.cloudinaryImageId} />
            <div>{i.val.info.name}</div>
            <div>{i.val.info.areaName}</div></motion.div>
    </Link>)
}
export default Card;