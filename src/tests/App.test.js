import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
