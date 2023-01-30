/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderNew from "./OrderNew";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("<OrderNew />", () => {
  beforeEach(() => {
    render(
      // <MemoryRouter>
      <BrowserRouter>
        <OrderNew />
      </BrowserRouter>
      // </MemoryRouter>
    );
  });
  it("renders without crashing", () => {
    expect(screen.getByText("Please sign in to add new orders"))
      .toBeInTheDocument;
  });

  //   it("has a form with entries for product_id", () => {
  //     const formProduct_id = screen.getByText("Product ID");
  //     expect(formProduct_id.getAttribute("For")).toEqual("Product ID");
  //   })
});
