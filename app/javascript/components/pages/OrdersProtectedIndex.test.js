/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import OrdersProtectedIndex from "./OrdersProtectedIndex";

describe("<OrdersProtectedIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<OrdersProtectedIndex />, div);
  });
});
