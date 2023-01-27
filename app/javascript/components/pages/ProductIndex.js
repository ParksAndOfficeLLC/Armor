import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ProductIndex = ({ products }) => {
  return (
    <>
      <h3>All Products</h3>
      {products?.map((product, index) => {
        return (
          <Card
            key={index}
            style={{
              width: "18rem",
            }}
          >
            {/* <img alt="Card" src={product.image} /> */}
            <CardBody>
              <CardTitle tag="h5">
                {product.name}, {product.price}, {product.cost}
              </CardTitle>
              <CardText>
                The latest and greatest {product.name}, normally costs $
                {product.price}, but can be yours at wholesale for only $
                {product.cost}.
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Current And Fresh {product.name}</ListGroupItem>
              <ListGroupItem>
                Market Price: ${product.price}, Our Wholesale Price: $
                {product.cost}
              </ListGroupItem>
              <ListGroupItem>
                Please Add To Your Order, The Following Product ID: {product.id}
              </ListGroupItem>
            </ListGroup>
            <CardBody>
              <NavLink to={`/productshow/${product.id}`} className="nav-link">
                <Button>See Product</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default ProductIndex