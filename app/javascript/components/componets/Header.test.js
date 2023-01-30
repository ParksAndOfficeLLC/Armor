/**
 * @jest-environment jsdom
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { render } from "@testing-library/react";

describe("<Header />", () => {
  it("renders the home page", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container.innerHTML).toContain("This is Where You Decide");
    expect(container.innerHTML).toContain("Your Serenity");
  });
});

export default Header.test;