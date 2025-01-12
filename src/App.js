import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import Home from "./routs/home";
import Header from "./shared/layout/header";
import Footer from "./shared/layout/footer";
import About from "./routs/about";
import OurCampus from "./routs/campus";
import Shop from "./routs/shop";
import Layout from "./shared/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./general/redux/store";
import AddCart from "./routs/shop/addCart";
import Cart from "./routs/cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/campus",
          element: <OurCampus />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "addCart",
          element: <AddCart />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
