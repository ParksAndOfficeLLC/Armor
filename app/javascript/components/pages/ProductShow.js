import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { NavLink, useParams } from "react-router-dom";

const ProductShow = ({ products }) => {
  const { id } = useParams();
  console.log(products);
  let currentProduct = products?.find((product) => product.id === +id);
  console.log({ currentProduct });
  return (
    <div>
      {currentProduct && (
        <div className="show-background">

          <Card
            key={currentProduct}
            color="info"
            style={{
              width: "18rem",
            }}
          >
             <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
            <CardBody>
              <CardTitle tag="h5">
                {currentProduct.name}, {currentProduct.price},{" "}
                {currentProduct.cost}
              </CardTitle>
              <CardText>
                The latest and greatest {currentProduct.name}, normally costs $
                {currentProduct.price}, but can be yours at wholesale for only $
                {currentProduct.cost}.
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                Current And Fresh {currentProduct.name}
              </ListGroupItem>
              <ListGroupItem>
                Market Price: ${currentProduct.price}, Our Wholesale Price: $
                {currentProduct.cost}
              </ListGroupItem>
              <ListGroupItem>
                Please Add To Your Order, The Following Product ID:{" "}
                {currentProduct.id}
              </ListGroupItem>
            </ListGroup>
            <CardBody>
              <NavLink to={`/productsindex`} className="nav-link">
                <Button>Back To All Products</Button>
              </NavLink>
            </CardBody>
          </Card>
          </div>
        // {/* );
       )}
    </div>
  );
};
export default ProductShow;
