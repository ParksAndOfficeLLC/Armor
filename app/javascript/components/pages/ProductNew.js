import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const ProductNew = ({ createProduct, logged_in }) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    cost: "",
    user_id: "",
    order_id: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createProduct(newProduct);
    navigate("/productindex");
  };

//   if (logged_in) {
    return (
      <Formik
        initialValues={{
          email: "",
          price: "",
          cost: "",
        }}
        onSubmit={async (values) => {
          //this runs the submit function 
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="submitForm">
          <FormGroup>
            <Label for="name">Name</Label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Jane"
              as={Input}
            />

            {/* Formik's uses the name of the Label in this case for="price" */}
            <Label for="price">Price</Label>
            {/* Associastes the name ^ in the for="<here>" with the id="price", uses that to handle changing state. */}
            <Field type="float" name="price" id="price" as={Input} />

            <Label for="cost">Wholesale Price</Label>
            <Field type="float" name="cost" id="cost" as={Input} />

            {/* formik handles the handleSubmit; calls onSubmit, you can use css to style this button

                if you want to use the Reactstrap Button component, you can still, but there's an extra step to get the handleSubmit to work.

                You would have to pull handleSubmit from formik and use that to call OnSubmit; if you look at the formik docs, you can see how to do that.

             */}
            <button type="submit">
              Submit New Product
            </button>
          </FormGroup>
        </Form>
      </Formik>
    );
//   } else {
//     return <h1>Please sign in to add new products</h1>;
//   }
};

export default ProductNew;
