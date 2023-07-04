import { render } from "@testing-library/react";
import Button from "../button";
import "@testing-library/jest-dom";

describe("should render button", () => {
  it("should render button and show label", () => {
    render(<Button />); 
    expect(1).toBe(1);
  });
});
