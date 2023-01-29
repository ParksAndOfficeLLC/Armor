import React, { useEffect, useState }  from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { readOrders } from "../App";


const OrdersProtectedIndex = ({ orders, current_user, deleteOrder }) => {
    const current_user_orders = orders?.filter((orders) => {
    console.log(orders)
    console.log("orderID", orders.user_id)
    console.log("USER", current_user)
    return orders.user_id === current_user;
    // const eraser = (orders.id) => {
    //     deleteOrder(orders.id)
    // }

    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //   readOrders().then((payload) => setOrders(payload));
    // }, []);



  });

  return (
    <div className='card-index'>
        {/* {current_user && orders?.filter(orders => orders.user_id === user.id).map(orders => { */}
      <h3>Your Current Order</h3>
       {current_user_orders?.map((orders) => {
        return (
          <Card
            style={{
              width: "14rem",
            }}
            key={index}
          >
            <CardBody>
              <CardTitle tag="h5">Your Order Number {orders.id}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Includes The Following Product: {orders.product_id}
              </CardSubtitle>
              <NavLink to={`/productsindex`}>
                <Button>See More Products</Button>
              </NavLink>
              <NavLink to="/">
                <Button onClick={() => eraser(`${orders?.id}`)} outline color="">Delete This Order</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
export default OrdersProtectedIndex;
