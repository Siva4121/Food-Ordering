import logo from "../assets/24384-3-starbucks-logo-file.png"
import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TbAlertCircle } from "react-icons/tb";
import { Link } from "react-router";
import { motion } from "motion/react"

function Bar() {
    return (
        <div className="header bg-gray-900 text-white 
        flex flex-col sm:flex-row 
        justify-between items-center 
        p-3 sm:p-4 gap-3 sm:gap-0">

            {/* LOGO */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                <Link to="/" className="cursor-pointer">
                    <img className="logo w-25 sm:w-25 bg-white rounded-full" src={logo} />
                </Link>
            </motion.div>

            {/* NAV MENU */}
            <div className="navMenu 
            flex flex-wrap sm:flex-nowrap 
            justify-center items-center 
            gap-3 sm:gap-7.5 text-sm sm:text-base">

                <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 1 }} transition={{ duration: 0.4 }}>
                    <Link to="/" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded hover:bg-indigo-500">
                        <FaHome /> <span className="hidden sm:inline">HOME</span>
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 1 }} transition={{ duration: 0.4 }}>
                    <Link to="/contact" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded hover:bg-indigo-500">
                        <MdPermContactCalendar /> <span className="hidden sm:inline">CONTACT</span>
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 1 }} transition={{ duration: 0.4 }}>
                    <Link to="/about" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded hover:bg-indigo-500">
                        <TbAlertCircle /> <span className="hidden sm:inline">ABOUT</span>
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.10 }} whileTap={{ scale: 1 }} transition={{ duration: 0.4 }}>
                    <Link to="/cart" className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded hover:bg-indigo-500">
                        <FaShoppingCart /> <span className="hidden sm:inline">CART</span>
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}

export default Bar;
