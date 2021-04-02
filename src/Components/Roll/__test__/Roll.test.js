import React from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";

import MockedSocket from "socket.io-mock";
import Roll from "../Roll";
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

  it("renders Roll", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Roll></Roll>, div);

    expect(io.connect).toHaveBeenCalled();
  });

  test("input box works", async () => {
    const { getByText, getByTestId } = render(<Roll />);

    const input = getByTestId("rollinput");
    fireEvent.change(input, { target: { value: "8" } });
    await (() => getByText("8"));
  });

  //not sure how to get test to submit from two diff clients
  // test("submitting roll works", async () => {
  //   const { getByText, getByTestId } = render(<Roll />);

  //   const input = getByTestId("rollinput");
  //   const input = getByTestId("rollsubmit");
  //   fireEvent.change(input, { target: { value: "8" } });
  //   await (() => getByText("8"));
  // });
});
