import React from "react";
import { render } from "@testing-library/react";
import UserTask from "../components/UserTask";

test("renders UserTask component correctly", () => {
  const { asFragment } = render(<UserTask />);

  expect(asFragment()).toMatchSnapshot();
});
