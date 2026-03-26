import { useDispatch } from 'react-redux'
import { addItem } from "./cartSlice";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

let Contact = () => {
    let dispatch = useDispatch();
    function hC() {
        dispatch(addItem())
    }

return (
<div>

    <div className="bg-gray-100 px-4 py-6 sm:p-10">

        <h1 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
            Contact Us
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">

            {/* Contact Information */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">

                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Get in Touch
                </h2>

                <div className="flex items-center gap-3 mb-4 text-sm sm:text-base">
                    <FaPhoneAlt className="text-indigo-600" />
                    <p>+91 7373486543</p>
                </div>

                <div className="flex items-center gap-3 mb-4 text-sm sm:text-base">
                    <FaEnvelope className="text-indigo-600" />
                    <p>foodapp@gmail.com</p>
                </div>

                <div className="flex items-center gap-3 text-sm sm:text-base">
                    <FaMapMarkerAlt className="text-indigo-600" />
                    <p>Coimbatore, Tamil Nadu</p>
                </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">

                <form className="flex flex-col gap-3 sm:gap-4">

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="border p-2 rounded text-sm sm:text-base"
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border p-2 rounded text-sm sm:text-base"
                    />

                    <textarea
                        placeholder="Enter your message"
                        className="border p-2 rounded h-24 text-sm sm:text-base"
                    ></textarea>

                    <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 text-sm sm:text-base">
                        Send Message
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>
)
}
export default Contact;
