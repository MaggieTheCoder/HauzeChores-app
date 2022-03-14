import React from "react";
import { render } from "@testing-library/react";
import DashBoard from "../components/DashBoard";

describe("Dashboard component", () => {
  const validProps = {
    houseId: 1,
    userId: 1,
    setUserId: () => {},
  };
  test("Component renders as expected", () => {
    const { asFragment } = render(
      <DashBoard
        houseId={validProps.houseId}
        userId={validProps.userId}
        setUserId={validProps.setUserId}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
