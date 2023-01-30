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
import Orders from "./pages/Orders";

import { readProduct } from "./fetches";

const App = (props) => {



  const [products, setProducts] = useState([]);

  useEffect(() => {
    readProduct().then((payload) => setProducts(payload));
  }, []);

  const createProduct = (product) => {
    fetch("/products", {
      body: JSON.stringify(product),
      header: {
        "Content-Type": "application/json",
      },
      method: "Post",
    })
      .then((response) => response.json())
      .then((payload) => payload)
      .catch((errors) => console.log("Product creation errors:", errors));
  };

  const [orders, setorders] = useState([]);
  useEffect(() => {
    readOrders();
  }, []);

  const readOrders = () => {
    fetch("/orders")
      .then((response) => response.json())
      .then((payload) => {
        setorders(payload);
      })
      .catch((error) => console.log(error));
  };

  const createOrder = (order) => {
    fetch("/orders", {
      body: JSON.stringify(order),
      header: {
        "Content-Type": "application/json",
      },
      method: "Post",
    })
      .then((response) => response.json())
      .then((payload) => readOrders())
      .catch((errors) => console.log("Order creation errors:", errors));
  };

  const deleteProducts = (id) => {
    console.log("id:", id);
    fetch(`/productsindex/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readProduct(payload))
      .catch((errors) => console.log("delete errors:", errors))
    }

    const deleteOrders = (id) => {
      console.log("id:", id);
      fetch(`/orders/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
        .then((response) => response.json())
        .then((payload) => readOrders(payload))
        .catch((errors) => console.log("delete errors:", errors))
      }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/productsnew"
          element={<ProductNew createProduct={createProduct} {...props} />}
        />
        <Route
          path="/ordersnew"
          element={<OrderNew createOrder={createOrder} {...props} />}
        />
        <Route path="/orders" element={<Orders /> deleteOrders={deleteOrders}} />
        <Route
          path="/productsindex"
          element={<ProductIndex products={products} deleteProducts={deleteProducts}/>}
        />
        <Route path="/productedit/:id" element={<ProductEdit products={products}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
