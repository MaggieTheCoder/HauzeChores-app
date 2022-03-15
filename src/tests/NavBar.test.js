import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar component", () => {
  const validProps = {
    user: { email: "test@test.com" },
    logout: () => {},
    code: "test-code",
  };

  test("renders properly", () => {
    const { asFragment } = render(
      <NavBar
        user={validProps.user}
        logout={validProps.logout}
        code={validProps.code}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("log out button renders correctly", () => {
    render(
      <NavBar
        user={validProps.user}
        logout={validProps.logout}
        code={validProps.code}
      />
    );

    const buttonElement = screen.getByText("LOG OUT");

    expect(buttonElement).toBeInTheDocument();
  });

  test("invite code renders when code prop is true value", () => {
    render(
      <NavBar
        user={validProps.user}
        logout={validProps.logout}
        code={validProps.code}
      />
    );
    const codeElement = screen.getByText("test-code");

    expect(codeElement).toBeInTheDocument();
  });

  test("user email to render when user prop is true value", () => {
    render(
      <NavBar
        user={validProps.user}
        logout={validProps.logout}
        code={validProps.code}
      />
    );
    const emailElement = screen.getByText(
      `Logged in as ${validProps.user.email}`
    );

    expect(emailElement).toBeInTheDocument();
  });
});
