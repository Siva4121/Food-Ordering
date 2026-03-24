import logo from "../assets/24384-3-starbucks-logo-file.png"
import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { TbAlertCircle } from "react-icons/tb";
import { Link } from "react-router";
import { motion } from "motion/react"
function Bar() {
    return <div className="header bg-gray-900 text-white flex justify-between  items-center p-4">

        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >   <Link to="/" className="cursor-pointer object-cover hover:scale-100 transition duration-300"><img className="logo w-25 bg-white rounded-[600px]" src={logo} /></Link>
           </motion.div>  <div className="navMenu flex items-center gap-7.5">       <motion.div
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Link to="/" className="flex items-center gap-1 px-3 py-1 rounded hover:bg-indigo-500"> <FaHome />HOME</Link> </motion.div>
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                > <Link to="/contact" className="flex items-center gap-1 px-3 py-1 rounded hover:bg-indigo-500"><MdPermContactCalendar />CONTACT</Link></motion.div>
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                > <Link to="/about" className="flex items-center gap-1 px-3 py-1 rounded hover:bg-indigo-500"><TbAlertCircle />ABOUT</Link></motion.div>
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >  <Link to="/cart" className="flex items-center gap-1 px-3 py-1 rounded hover:bg-indigo-500"><FaShoppingCart />CART</Link></motion.div>
            </div>
    </div>
}
export default Bar;