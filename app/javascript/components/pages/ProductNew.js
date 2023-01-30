import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ProductNew = ({ createProduct, loggedIn, ...props }) => {
  const navigate = useNavigate();
    console.log({props})
  //with formik you wouldn't need this
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    cost: "",
    user_id: "",
    order_id: "",
  });

  //with formik you wouldn't need this
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  //with formik you could call this onSubmit - or move the inside of this function to the onSubmit function in the Formik onSubmit
  // const handleSubmit = () => {
  //   createProduct(newProduct);
  //   navigate("/productindex");
  // };

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
          console.log({values})
          const response = await createProduct(values);
          console.log({response})
          navigate("/productsindex");
          
        }}
      >
        <Form className="submitForm">
          <FormGroup>
            <Label for="name">Name</Label>
            <Field id="name" name="name" placeholder="Name" as={Input} />

            {/* Formik's uses the name of the Label in this case for="price" */}
            <Label for="price">Price</Label>
            {/* Associastes the name ^ in the for="<here>" with the id="price", uses that to handle changing state. */}
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

            {/* formik handles the handleSubmit; calls onSubmit, you can use css to style this button

                if you want to use the Reactstrap Button component, you can still, but there's an extra step to get the handleSubmit to work.

                You would have to pull handleSubmit from formik and use that to call OnSubmit; if you look at the formik docs, you can see how to do that.
             */}
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
