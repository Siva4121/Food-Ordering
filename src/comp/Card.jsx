import { Link } from "react-router";
import { motion } from "motion/react"

function Card(i) {
    let img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    return (
        <Link 
            to={i.val.info.id} 
            className="card 
            w-full sm:w-[45%] md:w-[30%] lg:w-[22%] 
            p-3 sm:p-4 
            rounded-2xl 
            hover:shadow-2xl 
            transition-all duration-300 
            hover:-translate-y-2 
            cursor-pointer 
            bg-gray-300"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <img 
                    className="w-full h-40 sm:h-50 md:h-60 rounded-2xl object-cover" 
                    src={img + i.val.info.cloudinaryImageId} 
                />

                <div className="mt-2 font-semibold text-sm sm:text-base">
                    {i.val.info.name}
                </div>

                <div className="text-gray-600 text-xs sm:text-sm">
                    {i.val.info.areaName}
                </div>
            </motion.div>
        </Link>
    )
}

export default Card;
