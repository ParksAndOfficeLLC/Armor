/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    );
  });

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("About"));
    expect(screen.getByText("About")).toBeInTheDocument();
    userEvent.click(screen.getByText("Contact"));
    expect(screen.getByText("Contact")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign UP"));
    expect(screen.getByText("Sign UP")).toBeInTheDocument();
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Login")).toBeInTheDocument();
    userEvent.click(screen.getByText("Log Out"));
    expect(screen.getByText("Log Out")).toBeInTheDocument();
    userEvent.click(screen.getByText("Products"));
    expect(screen.getByText("Products")).toBeInTheDocument();
    userEvent.click(screen.getByText("Add New Products"));
    expect(screen.getByText("Add New Products")).toBeInTheDocument();
    userEvent.click(screen.getByText("Your Orders"));
    expect(screen.getByText("Your Orders")).toBeInTheDocument();
    userEvent.click(screen.getByText("Create Orders"));
    expect(screen.getByText("Create Orders")).toBeInTheDocument();
  });
});
