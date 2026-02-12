import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/button";
import { vi } from "vitest";


test("renders button with correct label", () => {
  console.log(Button);
  render(<Button label="Submit" />);
  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const mockClick = vi.fn();
  console.log(Button); 
  render(<Button label="submit" onClick={mockClick} />);

  const buttonElement = screen.getByText("submit");
  fireEvent.click(buttonElement);

  expect(mockClick).toHaveBeenCalledTimes(1);
});
