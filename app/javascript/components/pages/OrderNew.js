import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const OrderNew = ({ createOrder, logged_in, current_user }) => {
    const navigate = useNavigate();
    const [newOrder, setNewOrder] = useState({
        user_id: "",
        product_id: ""
    })

    const handleChange = (e) => {
        setNewOrder({ ...newOrder, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
       createOrder(newOrder)
       navigate("/productsindex") 
    }

    if(logged_in) {
        return (
        <Form className="submitForm">
            <FormGroup>
                <Label for="product_id">Product ID</Label>
                <Input type="integer" name="product_id" onChange={handleChange} value={newOrder.product_id} />
            </FormGroup>
            <Button onClick={handleSubmit} name="submit">
              Submit New Order
            </Button>
        </Form>
        )
    } else {
        return (
            <h1>Please sign in to add new orders</h1>
        )}
}
export default OrderNew