import { render, screen } from "@testing-library/react";
import Home from "../pages/home";

test("renders Home page heading", () => {
  render(<Home />);
  const heading = screen.getByText("Home Page");
  expect(heading).toBeInTheDocument();
});

test("renders Button inside Home", () => {
  render(<Home />);
  const button = screen.getByText("submit");
  expect(button).toBeInTheDocument();
});

