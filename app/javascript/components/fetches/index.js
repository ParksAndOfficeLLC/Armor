export const updateProduct = async (product, id) => {
  try {
    const response = await fetch(`/products/${id}`, {
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    });
    const payload = await response.json();
    return payload;
  } catch (errors) {
    return console.log("Product update errors:", errors);
  }
};

export const readProduct = async () => {
  try {
    const response = await fetch("/products");
    const payload = await response.json();
    return payload;
  } catch (error) {
    return console.log(error);
  }
};
