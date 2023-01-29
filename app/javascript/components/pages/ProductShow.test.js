/**
* @jest-environment jsdom
*/
import React from "react"
import { render, screen } from "@testing-library/react"
import ProductShow from "./ProductShow"
import { BrowserRouter } from "react-router-dom"

describe("<ProductShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <ProductShow />
      </BrowserRouter>,
     div)
     expect(screen.getByText("The One You Want")).toBeInTheDocument
  })
})