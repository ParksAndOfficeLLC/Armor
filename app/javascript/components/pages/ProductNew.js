import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ProductNew = ({ createProduct, logged_in }) => {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        cost: "",
        user_id: "",
        order_id: ""
    })

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
       createProduct(newProduct)
       navigate("/productindex") 
    }

    if(logged_in) {
        return (
        <Form className="submitForm">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" onChange={handleChange} value={newProduct.name} /> 
            </FormGroup>
            <FormGroup>
                <Label for="price">Price</Label>
                <Input type="float" name="price" onChange={handleChange} value={newProduct.price} />
            </FormGroup>
            <FormGroup>
                <Label for="cost">Wholesale Price</Label>
                <Input type="float" name="cost" onChange={handleChange} value={newProduct.cost} />
            </FormGroup>
            <Button onClick={handleSubmit} name="submit">
              Submit New Product
            </Button>
        </Form>
        )
    } else {
        return (
            <h1>Please sign in to add new products</h1>
        )}
}

export default ProductNew