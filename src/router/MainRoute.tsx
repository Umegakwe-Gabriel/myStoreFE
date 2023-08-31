import { createBrowserRouter } from "react-router-dom"
import LayOut from "../components/common/LayOut"
import MainPage from "../pages/MainPage"
import CheckOutPage from "../pages/CheckOutPage"

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <LayOut/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "detail",
                element: <MainPage/>
            },
            {
                path: "cart",
                element: <MainPage/>
            },
            {
                path: "check-out",
                element: <CheckOutPage/>
            },
        ]
    }
])