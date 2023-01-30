import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductNew from "./pages/ProductNew";
import ProductIndex from "./pages/ProductIndex";
import ProductEdit from "./pages/ProductEdit";
import OrderNew from "./pages/OrderNew";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import OrdersProtectedIndex from "./pages/OrdersProtectedIndex";
import ProductShow from "./pages/ProductShow";
import { readProduct } from "./fetches";

const App = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    readProduct().then((payload) => setProducts(payload));
  }, []);

  const deleteProducts = (id) => {
    console.log("id:", id);
    fetch(`/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readProduct(payload))
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/productsnew" element={<ProductNew {...props} />} />
        <Route path="/ordersnew" element={<OrderNew {...props} />} />
        <Route
          path="/productsindex"
          element={
            <ProductIndex products={products} deleteProducts={deleteProducts} />
          }
        />
        <Route
          path="/productshow/:id"
          element={<ProductShow products={products} />}
        />
        <Route
          path="/ordersprotectedindex"
          element={<OrdersProtectedIndex {...props} />}
        />
        <Route
          path="/productedit/:id"
          element={<ProductEdit products={products} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
