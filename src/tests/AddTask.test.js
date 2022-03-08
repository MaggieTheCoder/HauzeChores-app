import React from "react";
import { render, screen } from "@testing-library/react";
import AddTask from "../components/AddTask";

describe("AddTask component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddTask />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("button renders with correct text", () => {
    render(<AddTask />);
    const buttonElement = screen.getByText("Add Task");
    expect(buttonElement).toBeInTheDocument();
  });
});
