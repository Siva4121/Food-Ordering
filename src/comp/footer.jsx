import { Link } from "react-router";
function Foot(){
    return (<div><footer className="bg-gray-900 text-white mt-20">
  
  <div className="max-w-6xl mx-auto p-6 grid grid-cols-3 gap-8">

    <div>
      <h2 className="text-xl font-semibold mb-3">FoodApp</h2>
      <p className="text-gray-400">
        Order your favorite food quickly and easily.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-1">Quick Links</h2>
      <div className="w-max text-gray-400 flex flex-col">
        <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
        <Link to="/contact" className="hover:text-white cursor-pointer">Contact</Link>
        <Link to="/cart" className="hover:text-white cursor-pointer">Cart</Link>
       <Link to="/about" className="hover:text-white cursor-pointer">About</Link>
      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400">Email: foodapp@gmail.com</p>
      <p className="text-gray-400">Phone: +91 7373486543</p>
    </div>

  </div>

  <div className="text-center border-t border-gray-700 py-4 text-gray-400">
    © 2026 FoodApp. All rights reserved.
  </div>

</footer></div>)
}
export default Foot;