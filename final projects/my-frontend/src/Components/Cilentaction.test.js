import { render, screen } from "@testing-library/react";
import Cilentaction from "./Cilentaction"; 

test("Renders Title of the application", () => {
  render(<Cilentaction />);
  const linkElement = screen.getByText(/CURD operation in React/i);
  expect(linkElement).toBeInTheDocument();
});
