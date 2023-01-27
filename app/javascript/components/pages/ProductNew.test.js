/**
* @jest-environment jsdom
*/
import React from "react"
import { render, screen } from "@testing-library/react"
import ProductNew from "./ProductNew"
import { BrowserRouter } from "react-router-dom"

describe("<ProductNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ProductNew />
      </BrowserRouter>,
     div)
     expect(screen.getByText("Please sign in to add new products")).toBeInTheDocument
  })

//   it("has a form with entries for name, price, cost", () => {
//     const formName = screen.getByText("Name");
//     expect(formName.getAttribute("For")).toEqual("name");

//     const formPrice = screen.getByText("Price");
//     expect(formPrice.getAttribute("For")).toEqual("price");

//     const formCost = screen.getByText("Cost");
//     expect(formCost.getAttribute("For")).toEqual("cost")
//   })
})