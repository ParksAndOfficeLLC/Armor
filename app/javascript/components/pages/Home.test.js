/**
 * @jest-environment jsdom
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { render } from "@testing-library/react";

describe("<Home />", () => {
  it("renders the home page", () => {
    const { container } = render(
      <BrowserRouter>
        <Home logged_in={true} />
      </BrowserRouter>
    );
    expect(container.innerHTML).toContain("Welcome To Your Store");
  });
});

export default Home.test;
