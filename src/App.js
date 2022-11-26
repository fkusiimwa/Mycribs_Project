import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleBlog from "./pages/SingleBlog";
import HectoDemo from "./pages/HectoDemo";
import HectoDemo1 from "./pages/HectoDemo1";
import ShoppingCart from "./pages/ShoppingCart";
import OrderCompleted from "./pages/OrderCompleted";
import ProductDetails from "./pages/ProductDetails";
import MyAccount from "./pages/MyAccount";
import Faq from "./pages/Faq";
import ABOUTUS from "./pages/ABOUTUS";
import CONTACTUS from "./pages/CONTACTUS";
import NOTFOUND from "./pages/NOTFOUND";
import ShopLeftSidebar from "./pages/ShopLeftSidebar";
import ShopList from "./pages/ShopList";
import GridDefault from "./pages/GridDefault";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/single-blog":
        title = "";
        metaDescription = "";
        break;
      case "/hecto-demo":
        title = "";
        metaDescription = "";
        break;
      case "/hecto-demo1":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart":
        title = "";
        metaDescription = "";
        break;
      case "/order-completed":
        title = "";
        metaDescription = "";
        break;
      case "/product-details":
        title = "";
        metaDescription = "";
        break;
      case "/my-account":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/404-not-found":
        title = "";
        metaDescription = "";
        break;
      case "/shop-left-sidebar":
        title = "";
        metaDescription = "";
        break;
      case "/shop-list":
        title = "";
        metaDescription = "";
        break;
      case "/grid-default":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/single-blog" element={<SingleBlog />} />

      <Route path="/hecto-demo" element={<HectoDemo />} />

      <Route path="/hecto-demo1" element={<HectoDemo1 />} />

      <Route path="/shopping-cart" element={<ShoppingCart />} />

      <Route path="/order-completed" element={<OrderCompleted />} />

      <Route path="/product-details" element={<ProductDetails />} />

      <Route path="/my-account" element={<MyAccount />} />

      <Route path="/faq" element={<Faq />} />

      <Route path="/about-us" element={<ABOUTUS />} />

      <Route path="/contact-us" element={<CONTACTUS />} />

      <Route path="/404-not-found" element={<NOTFOUND />} />

      <Route path="/shop-left-sidebar" element={<ShopLeftSidebar />} />

      <Route path="/shop-list" element={<ShopList />} />

      <Route path="/grid-default" element={<GridDefault />} />
    </Routes>
  );
}
export default App;
