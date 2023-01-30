/**
 * @jest-environment jsdom
 */
import React from "react";
import Footer from "./Footer";
import { render } from "@testing-library/react";


describe("<Footer />", () => {
  it("renders the footer", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
    
  });
})

export default Footer.test;