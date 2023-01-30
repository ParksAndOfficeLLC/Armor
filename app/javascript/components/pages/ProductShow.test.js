/**
 * @jest-environment jsdom
 */
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import ProductShow from "./ProductShow";
// import { BrowserRouter } from "react-router-dom";

// describe("<ProductShow />", () => {
//   it("renders without crashing", () => {
//     const div = document.createElement("div");
//     render(
//       <BrowserRouter>
//         <ProductShow />
//       </BrowserRouter>,
//       div
//     );
//     expect(screen.getByText("The latest and greatest")).toBeInTheDocument;
//   });
// });

import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import ProductShow from './ProductShow';
import { readProduct } from '../fetches';

jest.mock('../fetches', () => ({
  readProduct: jest.fn().mockResolvedValue([
    {
      id: 1,
      name: 'product 1',
      price: 10,
      cost: 5,
    },
    {
      id: 2,
      name: 'product 2',
      price: 20,
      cost: 15,
    },
  ]),
}));

describe('ProductShow component', () => {
  it('renders product details', async () => {
    const { getByText, getByAltText } = render(
      <ProductShow />
    );

    // const productDetails = await waitForElement(() => getByText('product 1, 10, 5'));
    // expect(productDetails).toBeInTheDocument();

    const productDescription = getByText((content) => content.startsWith('The latest and greatest product 1,'));
    expect(productDescription).toBeInTheDocument();

    const productImage = getByAltText('Sample');
    expect(productImage).toBeInTheDocument();

    const backButton = getByText('Back To All Products');
    expect(backButton).toBeInTheDocument();
  });
});

