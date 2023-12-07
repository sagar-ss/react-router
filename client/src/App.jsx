import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError
} from "./pages/index";

import {loader as landingLoader} from './pages/Landing'
import {loader as SingleCocktailLoader} from './pages/Cocktail'
import {action as newsLetterAction } from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader:landingLoader,
        errorElement:<SinglePageError/>
      },
      {
        path:"cocktail/:id",
        element:<Cocktail/>,
        errorElement:<SinglePageError/>,
        loader:SingleCocktailLoader
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
        element:<Newsletter/>,
        action:newsLetterAction
      },
      
    ]
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
