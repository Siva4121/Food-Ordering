import { Link } from "react-router";

function Foot(){
    return (
        <div>
            <footer className="bg-gray-900 text-white mt-10 sm:mt-20">
  
                <div className="max-w-6xl mx-auto px-4 py-6 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                gap-6 sm:gap-8 text-center sm:text-left">

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3">FoodApp</h2>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Order your favorite food quickly and easily.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2">Quick Links</h2>
                        <div className="w-max mx-auto sm:mx-0 text-gray-400 flex flex-col gap-1">
                            <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
                            <Link to="/contact" className="hover:text-white cursor-pointer">Contact</Link>
                            <Link to="/cart" className="hover:text-white cursor-pointer">Cart</Link>
                            <Link to="/about" className="hover:text-white cursor-pointer">About</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3">Contact</h2>
                        <p className="text-gray-400 text-sm sm:text-base">Email: foodapp@gmail.com</p>
                        <p className="text-gray-400 text-sm sm:text-base">Phone: +91 7373486543</p>
                    </div>

                </div>

                <div className="text-center border-t border-gray-700 py-4 text-gray-400 text-sm sm:text-base">
                    © 2026 FoodApp. All rights reserved.
                </div>

            </footer>
        </div>
    )
}  

export default Foot;
