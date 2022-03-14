import React from "react";
import { render, screen } from "@testing-library/react";
import AddHouse from "../components/AddHouse";

describe("Add House component", () => {
  const validProps = {
    setHouseId: () => {},
    houseId: 2,
    user: {},
    setCode: () => {},
    setUserId: () => {},
  };

  test("It renders correctly", () => {
    const { asFragment } = render(
      <AddHouse
        setHouseId={validProps.setHouseId}
        houseId={validProps.houseId}
        user={validProps.user}
        setCode={validProps.setCode}
        setUserId={validProps.setUserId}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Create house button and input render correctly", () => {
    render(
      <AddHouse
        setHouseId={validProps.setHouseId}
        houseId={validProps.houseId}
        user={validProps.user}
        setCode={validProps.setCode}
        setUserId={validProps.setUserId}
      />
    );
    const creatButton = screen.getByText("CREATE");
    const createInput = screen.getByPlaceholderText("type house name");

    expect(creatButton).toBeInTheDocument();
    expect(createInput).toBeInTheDocument();
  });
  test("Find and join house button and input render correctly", () => {
    render(
      <AddHouse
        setHouseId={validProps.setHouseId}
        houseId={validProps.houseId}
        user={validProps.user}
        setCode={validProps.setCode}
        setUserId={validProps.setUserId}
      />
    );
    const findButton = screen.getByText("FIND AND JOIN");
    const findInput = screen.getByPlaceholderText("use invitation code");

    expect(findButton).toBeInTheDocument();
    expect(findInput).toBeInTheDocument();
  });

  it("Next button renders correctly", () => {
    render(
      <AddHouse
        setHouseId={validProps.setHouseId}
        houseId={validProps.houseId}
        user={validProps.user}
        setCode={validProps.setCode}
        setUserId={validProps.setUserId}
      />
    );
    const nextButton = screen.getByText("NEXT");

    expect(nextButton).toBeInTheDocument();
  });
});
