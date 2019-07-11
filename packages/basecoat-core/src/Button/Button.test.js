import React from "React";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("App", () => {
  it("Runs and Pass", () => {
    expect(true).toBe(true);
  });

  it("Renders without error", () => {
    render(<Button />);
  });
});
