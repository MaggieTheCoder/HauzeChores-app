import React from "react";
import { render, screen } from "@testing-library/react";
import Tabs from "../components/Tabs";

describe("Tab component", () => {
  const validProps = {
    houseTasks: [],
    setAddedANewTask: () => {},
    userId: 2,
    userTasks: [],
  };
  test("it renders correctly", () => {
    const { asFragment } = render(
      <Tabs
        houseTasks={validProps.houseTasks}
        setAddedANewTask={validProps.setAddedANewTask}
        userId={validProps.userId}
        userTasks={validProps.userTasks}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Tab buttons render correctly", () => {
    render(
      <Tabs
        houseTasks={validProps.houseTasks}
        setAddedANewTask={validProps.setAddedANewTask}
        userId={validProps.userId}
        userTasks={validProps.userTasks}
      />
    );
    const button1 = screen.getByText("All Tasks");
    const button2 = screen.getByText("My Tasks");
    const button3 = screen.getByText("Leaderboard");

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
