import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders footer correctly", () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});
