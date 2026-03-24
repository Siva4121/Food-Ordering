import Bar from "./bar"
import Body from "./body";
import Foot from "./footer";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./about";
import Cart from "./cart";
import Contact from "./contact";
import Rest from "./rest";
import Error from "./error";
import { Provider } from "react-redux";
import appStore from "./appStore";


let Layout = () => {

    return (<div>
        <Provider store={appStore}>
        <Bar />
        <Outlet />
        <Foot/>
        </Provider>
    </div>)
}



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[

            {
                path: "/",
                element: <Body />,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/cart",
                element: <Cart/>,
            },

            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/:id",
                element:<Rest/>,
            },
        ],
        errorElement:<Error/>,
        
    }
]);

function App() {
    return (<div>
        <RouterProvider router={router} />
    </div>
    )
}

export default App;