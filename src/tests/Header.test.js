import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

test("renders app correctly", () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});
