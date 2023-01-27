import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PropTypes from "prop-types"
import ProductNew from "./pages/ProductNew"
import OrderNew from "./pages/OrderNew"

// class App extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// }

const App = (props) => {
  const [products, setproducts] = useState([])
    useEffect(() => {
      readProducts()
    }, [])

    const readProducts = () => {
      fetch("/products")
      .then((response) => response.json())
      .then((payload) => {
        setproducts(payload)
    })
    .catch((error) => console.log(error))
  }

  const createProduct = (product) => {
    console.log(product)
    fetch("http://localhost:3000/products", {
      body: JSON.stringify(product),
      header: {
        "Content-Type": "application/json"
      },
      method: "Post"
    })
    .then((response) => response.json())
    .then((payload) => readProducts())
    .catch((errors) => console.log("Product creation errors:", errors))
  }

  const [orders, setorders] = useState([])
    useEffect(() => {
      readOrders()
    }, [])

    const readOrders = () => {
      fetch("/orders")
      .then((response) => response.json())
      .then((payload) => {
        setorders(payload)
    })
    .catch((error) => console.log(error))
  }

  const createOrder = (order) => {
    console.log(order)
    fetch("http://localhost:3000/orders", {
      body: JSON.stringify(order),
      header: {
        "Content-Type": "application/json"
      },
      method: "Post"
    })
    .then((response) => response.json())
    .then((payload) => readOrders())
    .catch((errors) => console.log("Order creation errors:", errors))
  }

  return (
    <BrowserRouter>
      {/* <Header {...props} /> */}
        <Routes>
          {/* <Route exact path="/" element={<Home {...props} />} /> */}
          <Route path="/productsnew" element={<ProductNew createProduct={createProduct} {...props} />} />
          <Route path="/ordersnew" element={<OrderNew createOrder={createOrder} {...props} />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App