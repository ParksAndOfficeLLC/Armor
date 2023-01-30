import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const readOrders = async () => {
  try {
    const response = await fetch("/orders");
    const payload = await response.json();
    return payload;
  } catch (error) {
    return console.log(error);
  }
};

const OrdersProtectedIndex = ({ currentUser, delord }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    readOrders().then((payload) => setOrders(payload));
  }, []);

  const current_user_orders = orders?.filter((orders) => {


    return orders.user_id === currentUser.id;
  });


  return (
    <div className="card-index">
      <h3>Your Current Order</h3>
      {current_user_orders?.map((order, index) => {

        return (
          <Card
            key={index}
            color="warning"
            outline
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Your Order Number {order.id}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Includes The Following Product: {order.product_id}
              </CardSubtitle>
              <NavLink to={`/productsindex`}>
                <Button>See More Products</Button>
              </NavLink>
              <NavLink to="/">
                <Button onClick={() => delord(order?.id)}>Delete Order</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
export default OrdersProtectedIndex;
