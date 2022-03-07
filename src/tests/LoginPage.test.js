import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../components/LoginPage";

describe("LoginPage component", () => {
  const validProps = {
    setUser: () => {},
  };
  test("", () => {
    const { asFragment } = render(<LoginPage setUser={validProps.setUser} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Login form renders correctly", () => {
    render(<LoginPage setUser={validProps.setUser} />);
    const loginButton = screen.getByText("Login");
    const loginEmailInput = screen.getByTestId("login-email");
    const loginPasswordInput = screen.getByTestId("login-password");

    expect(loginButton).toBeInTheDocument();
    expect(loginEmailInput).toBeInTheDocument();
    expect(loginPasswordInput).toBeInTheDocument();
  });

  test("Register form renders correctly", () => {
    render(<LoginPage setUser={validProps.setUser} />);
    const registerButton = screen.getByText("Register");
    const registerEmailInput = screen.getByTestId("register-email");
    const registerPasswordInput = screen.getByTestId("register-password");

    expect(registerButton).toBeInTheDocument();
    expect(registerEmailInput).toBeInTheDocument();
    expect(registerPasswordInput).toBeInTheDocument();
  });
});
