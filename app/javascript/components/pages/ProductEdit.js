import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../fetches"

const ProductEdit = ({ products, logged_in, current_user }) => {
    console.log(products)
    // const navigate = useNavigate();
    const { id } = useParams();
    let currentProduct = products?.find((product) => product.id === +id)
    console.log(currentProduct)
//     const [editProduct, setEditProduct] = useState({
//         name: currentProduct.name,
//         price: currentProduct.price,
//         cost: currentProduct.cost,
//         user_id: currentProduct.user_id,
//         order_id: currentProduct.order_id,
//   });

  //with formik you wouldn't need this
//   const onSubmit = (e) => {
//     setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
//   };

  //with formik you could call this onSubmit - or move the inside of this function to the onSubmit function in the Formik onSubmit
//   const onSubmit = () => {
//     editProduct(updateProduct, id)
//     navigate(`/productshow/${id}`)
//   }

  // if (logged_in) {
    return (
      <Formik
        initialValues={{
            name: currentProduct?.name || "",
            price: currentProduct?.price || "",
            cost: currentProduct?.cost || "",
        }}

        onSubmit={async (values) => {
            console.log(values)
           const response = await updateProduct(values, id)
           console.log({response})
        //   navigate(`/productshow/${id}`);
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
              Submit Updated Product
            </button>
          </FormGroup>
        </Form>
      </Formik>
    );
//   } else {
//     return <h1>Please sign in to add new products</h1>;
//   }
};

export default ProductEdit