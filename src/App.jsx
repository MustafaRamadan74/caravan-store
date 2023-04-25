import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home"
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Jewelery from './Components/Jewelery/Jewelery';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {


  let routers = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "home", element: <Home /> },
        { path: "men", element: <Men /> },
        { path: "women", element: <Women /> },
        { path: "Jewelery", element: <Jewelery /> },
        { path: "productDetails/:id", element: <ProductDetails /> },
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: '*', element: <ErrorPage /> },
      ]
    }
  ]);




  return <>

    <div className="">

      <RouterProvider router={routers} />

    </div>

  </>
}

export default App;
