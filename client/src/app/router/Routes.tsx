import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Homepage from "../../features/home/Homepage";
import Activitydashboard from "../../features/activities/dashboard/Activitydashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";

export const router =createBrowserRouter([
    {   
        path:'/',
        element:<App />,
        children:[
            {path:'', element:<Homepage />},
             {path:'activities', element:<Activitydashboard />},
               {path:'activities/:id', element:<ActivityDetail />},
              {path:'createActivity', element:<ActivityForm  key='create'/>},
              {path:'manage/:id', element:<ActivityForm />},
        ]
        
    }])