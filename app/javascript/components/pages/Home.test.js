/**
 * @jest-environment jsdom
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("<Home />", () => {
  it("renders the home page", () => {
    const { container } = render(
      <BrowserRouter>
        <Home logged_in={true} />
      </BrowserRouter>
    );
    expect(container.innerHTML).toContain("Welcome to my Swamp");
  });
});

export default Home.test;
