import { Formik, Form, Field } from "formik";
import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../fetches";

const ProductEdit = ({ products, loggedIn }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let currentProduct = products?.find((product) => product.id === +id);

  if (loggedIn) {
    return (
      <Formik
        initialValues={{
          name: currentProduct?.name || "",
          price: currentProduct?.price || "",
          cost: currentProduct?.cost || "",
        }}
        onSubmit={async (values) => {
          const response = await updateProduct(values, id);
          if (response) {
            navigate(`/productshow/${id}`);
          } else {
            alert("something went wrong");
          }
        }}
      >
        <Form className="submitForm">
          <FormGroup>
            <Label for="name">Name</Label>
            <Field
              id="name"
              name="name"
              placeholder="Product Name"
              as={Input}
            />
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
            <button type="submit">Submit Updated Product</button>
          </FormGroup>
        </Form>
      </Formik>
    );
  } else {
    return <h1>Please sign in to add new products</h1>;
  }
};
export default ProductEdit;
