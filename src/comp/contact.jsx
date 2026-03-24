//import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addItem } from "./cartSlice";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


let Contact = () => {
    let dispatch = useDispatch();
    function hC() {
        dispatch(addItem())
    }

return (<div>

            <div className="bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10">

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-indigo-600" />
            <p>+91 7373486543</p>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-indigo-600" />
            <p>foodapp@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600" />
            <p>Coimbatore, Tamil Nadu</p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Enter your name"
              className="border p-2 rounded"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded"
            />

            <textarea
              placeholder="Enter your message"
              className="border p-2 rounded h-24"
            ></textarea>

            <button className="bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
</div>)
}
export default Contact;