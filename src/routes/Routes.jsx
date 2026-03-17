import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=>fetch("https://raw.githubusercontent.com/Ahmad-Mridul/reactonic-pro/refs/heads/main/src/data/AppsData.json").then(res=>res.json())
            },
            {
                path:"/apps",
                element:<Apps/>,
                loader:()=>fetch("https://raw.githubusercontent.com/Ahmad-Mridul/reactonic-pro/refs/heads/main/src/data/AppsData.json").then(res=>res.json())
            },
            {
                path:"/installation",
                element:<Installation/>
            }
        ]
    }
]);

export default router;