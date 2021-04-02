import React from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";

import MockedSocket from "socket.io-mock";
import Roles from "../Roles";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";

jest.mock("socket.io-client");

describe("Testing connection", () => {
  let socket;

  beforeEach(() => {
    socket = new MockedSocket();
    io.mockReturnValue(socket);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  test("renders Roles", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Roles></Roles>, div);

    expect(io.connect).toHaveBeenCalled();
  });

  test("roles buttons show text", async () => {
    const { getByText } = render(<Roles />);

    getByText("p1", "p2", "spectator");
  });
});
