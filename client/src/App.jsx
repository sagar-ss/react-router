import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"cocktail",
        element:<Cocktail/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"error",
        element:<Error/>
      },
      {
        path:"newsletter",
        element:<Newsletter/>
      },
      
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
