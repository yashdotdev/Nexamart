import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // {path: "/products", element: <Products/>},
      // {path: "/products/:id", element: <ProductDetail/>},
      { path: "/cart", element: <Cart /> },
      { path: "/product/:id", element: <ProductDetail /> }, // <-- add this
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
