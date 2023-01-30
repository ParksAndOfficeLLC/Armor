import { Formik, Form, Field } from "formik";
import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const createProduct = async (data) => {
  try {
    const response = await fetch("/products", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const payload = response.json();

    return payload;
  } catch (error) {
    console.error({ error });
  }
};

const ProductNew = ({ loggedIn, ...props }) => {
  const navigate = useNavigate();

  if (loggedIn) {
    return (
      <Formik
        initialValues={{
          name: "",
          price: "",
          cost: "",
          user_id: props.currentUser.id,
        }}
        onSubmit={async (values) => {
          const data = {
            name: values.name,
            price: parseInt(values.price),
            cost: parseInt(values.cost),
            user_id: Number(values.user_id),
          };
          const response = await createProduct(data);
          if (response) {
            navigate("/productsindex");
          } else {
            alert("Something went wrong...");
          }
        }}
      >
        <Form className="submitForm">
          <FormGroup>
            <Label for="name">Name</Label>
            <Field id="name" name="name" placeholder="Name" as={Input} />

            <Label for="price">Price</Label>
            <Field
              type="float"
              name="price"
              id="price"
              placeholder="Price"
              as={Input}
            />

            <Label for="cost">Wholesale Price</Label>
            <Field
              type="float"
              name="cost"
              id="cost"
              placeholder="Cost"
              as={Input}
            />
            <button type="submit">Submit New Product</button>
          </FormGroup>
        </Form>
      </Formik>
    );
  } else {
    return <h1>Please sign in to add new products</h1>;
  }
};

export default ProductNew;
