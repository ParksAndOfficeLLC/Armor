export const updateProduct = (product, id) => {
  fetch(`/products/${id}`, {
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((payload) => payload)
    .catch((errors) => console.log("Product update errors:", errors));
};

export const readProduct = () => {
  fetch("/products")
    .then((response) => response.json())
    .then((payload) => payload)
    .catch((error) => console.log(error));
};
