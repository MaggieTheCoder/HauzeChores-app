import React from "react";
import { render } from "@testing-library/react";
import Task from "../components/Task";

test("renders Task component correctly", () => {
  const { asFragment } = render(<Task />);

  expect(asFragment()).toMatchSnapshot();
});
