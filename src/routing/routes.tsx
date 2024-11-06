import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import LIstPage from "./LIstPage";
import ContactPage from "./ContactPage";
import DetailsPage from "./DetailsPage";

const router = createBrowserRouter([

    {path:'/', element: <HomePage/>},
    {path:'/users', element: <LIstPage/>},
    {path:'/contactpage', element: <ContactPage/>},
    {path:'/users/:id', element: <DetailsPage/>},
   
])

export default router;