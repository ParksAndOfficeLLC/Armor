import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const createOrder = async (data) => {
  try {
    const response = await fetch("/orders", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    });
    const order = await response.json();
    return order;
  } catch (error) {
    console.error({ error });
  }
};

const OrderNew = ({ loggedIn, currentUser }) => {
  const navigate = useNavigate();
  const [newOrder, setNewOrder] = useState({
    user_id: currentUser?.id,
    product_id: "",
  });

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = {
      user_id: Number(newOrder?.user_id),
      product_id: Number(newOrder?.product_id),
    };

    const response = await createOrder(data);

    console.log({ response });
    if(response){
      navigate("/productsindex");
    } else {
      alert("Please enter a valid product ID")
    }
  };

  if (loggedIn) {
    return (
      <Form className="submitForm">
        <FormGroup>
          <Label for="product_id">Product ID</Label>
          <Input
            type="integer"
            name="product_id"
            onChange={handleChange}
            value={newOrder?.product_id}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit New Order
        </Button>
      </Form>
    );
  } else {
    return <h1>Please sign in to add new orders</h1>;
  }
};
export default OrderNew;
