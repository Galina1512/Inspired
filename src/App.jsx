import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom";
import { MainPage } from "./Conponents/MainPage/MainPage";
import { Root } from "./routes/Root";
import { ErrorPage } from "./Conponents/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorSlice";
import { ProductPage } from "./Conponents/ProductPage/ProductPage.jsx";
import { FavoritePage } from "./Conponents/FavoritePage/FavoritePage.jsx";
import { CartPage } from "./Conponents/CartPage/CartPage.jsx";
import { SearchPage } from "./Conponents/SearchPage/SearchPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/catalog/:gender/:category?' element={<MainPage />} />

      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () =>  {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
    
  }, [dispatch]);

return <RouterProvider router={router}></RouterProvider> ;
};
