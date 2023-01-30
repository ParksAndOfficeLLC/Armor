/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import ProductEdit from "./ProductEdit";

describe("<ProductEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <ProductEdit />
      </BrowserRouter>,
      div
    );
  });
});
